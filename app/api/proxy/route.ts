import { NextResponse } from "next/server";
import { categories } from "../../data/apis";
import dns from "node:dns/promises";

// DNS Cache to avoid redundant lookups for SSRF protection
// Key: hostname, Value: { isPrivate: boolean, expiry: number }
const DNS_CACHE = new Map<string, { isPrivate: boolean; expiry: number }>();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// Pre-calculate allowed hostnames for performance
const ALLOWED_HOSTS = new Set<string>();

categories.forEach((category) => {
  category.apis.forEach((api) => {
    if (api.url) {
      try {
        const urlObj = new URL(api.url);
        ALLOWED_HOSTS.add(urlObj.hostname);
      } catch (e) {
        // Ignore invalid URLs in data
      }
    }
  });
});

const ALLOWED_METHODS = new Set([
  "GET",
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
  "HEAD",
  "OPTIONS",
]);

async function isPrivateIp(hostname: string): Promise<boolean> {
  const now = Date.now();
  const cached = DNS_CACHE.get(hostname);

  if (cached && cached.expiry > now) {
    return cached.isPrivate;
  }

  try {
    const addresses = await dns.lookup(hostname, { all: true });
    let isPrivate = false;

    for (const { address, family } of addresses) {
      if (family === 4) {
        // Check IPv4 private ranges
        const parts = address.split(".").map(Number);
        if (
          parts[0] === 10 ||
          (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
          (parts[0] === 192 && parts[1] === 168) ||
          parts[0] === 127 ||
          (parts[0] === 169 && parts[1] === 254)
        ) {
          isPrivate = true;
          break;
        }
      } else if (family === 6) {
        // Check IPv6 private/special ranges
        // ::1 (Loopback), fc00::/7 (ULA), fe80::/10 (Link-Local)
        if (
          address === "::1" ||
          address === "::" ||
          address.toLowerCase().startsWith("fc") ||
          address.toLowerCase().startsWith("fd") ||
          address.toLowerCase().startsWith("fe80:")
        ) {
          isPrivate = true;
          break;
        }
      }
    }

    DNS_CACHE.set(hostname, { isPrivate, expiry: now + CACHE_TTL });
    return isPrivate;
  } catch (error) {
    // If DNS lookup fails, treat as unsafe/invalid
    return true;
  }
}

async function validateUrl(url: string) {
  try {
    const urlObj = new URL(url);

    if (urlObj.protocol !== "http:" && urlObj.protocol !== "https:") {
      return false;
    }

    // Check whitelist
    if (!ALLOWED_HOSTS.has(urlObj.hostname)) {
      return false;
    }

    // Check private IP
    if (await isPrivateIp(urlObj.hostname)) {
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { url, method } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const requestedMethod = (method || "GET").toUpperCase();

    // 1. Validate Method
    if (!ALLOWED_METHODS.has(requestedMethod)) {
        return NextResponse.json(
            { error: "Method Not Allowed" },
            { status: 405 }
        );
    }

    // 2. Validate URL (SSRF Protection)
    if (!(await validateUrl(url))) {
        return NextResponse.json(
            { error: "Forbidden: URL not allowed or resolves to private IP" },
            { status: 403 }
        );
    }

    // 3. Handle Redirects Manually (Limit 5)
    let currentUrl = url;
    let redirectCount = 0;
    let finalResponse: Response | null = null;

    while (redirectCount < 5) {
        // Validate currentUrl again before fetching
        if (!(await validateUrl(currentUrl))) {
            return NextResponse.json(
                { error: "Forbidden: Redirect URL not allowed" },
                { status: 403 }
            );
        }

        const response = await fetch(currentUrl, {
            method: requestedMethod,
            headers: {
                "User-Agent": "OpenAPIHub/1.0",
            },
            redirect: "manual"
        });

        if (response.status >= 300 && response.status < 400 && response.headers.get("location")) {
            const location = response.headers.get("location");
            if (!location) break;

            try {
                currentUrl = new URL(location, currentUrl).toString();
            } catch (e) {
                return NextResponse.json({ error: "Invalid Redirect URL" }, { status: 500 });
            }

            redirectCount++;
            continue;
        }

        finalResponse = response;
        break;
    }

    if (!finalResponse) {
         return NextResponse.json({ error: "Too many redirects" }, { status: 500 });
    }

    const contentType = finalResponse.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await finalResponse.json();
    } else {
      data = await finalResponse.text();
    }

    return NextResponse.json(data, { status: finalResponse.status });

  } catch (error: any) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
