import { NextResponse } from "next/server";
import dns from "node:dns/promises";
import { categories } from "../../data/apis";

// Extract allowed hostnames from the API directory to create a whitelist
const ALLOWED_HOSTS = new Set<string>();
categories.forEach((category) => {
  category.apis.forEach((api) => {
    if (api.url) {
      try {
        const url = new URL(api.url);
        ALLOWED_HOSTS.add(url.hostname.toLowerCase());
      } catch {
        // Skip invalid URLs in data
      }
    }
  });
});

/**
 * Checks if an IP address belongs to a private or internal range.
 */
function isPrivateIP(ip: string): boolean {
  // IPv4 check
  const ipv4Parts = ip.split(".").map(Number);
  if (ipv4Parts.length === 4 && !ipv4Parts.some(isNaN)) {
    const [a, b] = ipv4Parts;
    // 10.0.0.0/8
    if (a === 10) return true;
    // 127.0.0.0/8
    if (a === 127) return true;
    // 169.254.0.0/16
    if (a === 169 && b === 254) return true;
    // 172.16.0.0/12
    if (a === 172 && b >= 16 && b <= 31) return true;
    // 192.168.0.0/16
    if (a === 192 && b === 168) return true;
    // 0.0.0.0/8
    if (a === 0) return true;
    return false;
  }

  // IPv6 check
  const ipLower = ip.toLowerCase();
  // Loopback
  if (ipLower === "::1" || ipLower === "0:0:0:0:0:0:0:1") return true;
  // Link-local
  if (ipLower.startsWith("fe80:")) return true;
  // Unique local
  if (ipLower.startsWith("fc00:") || ipLower.startsWith("fd00:")) return true;
  // Multicast
  if (ipLower.startsWith("ff00:")) return true;

  return false;
}

/**
 * Validates a URL to prevent SSRF attacks.
 */
async function isSafeUrl(urlStr: string): Promise<boolean> {
  try {
    const url = new URL(urlStr);

    // Only allow HTTP and HTTPS
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return false;
    }

    const hostname = url.hostname.toLowerCase();

    // 1. Check whitelist (fastest)
    if (ALLOWED_HOSTS.has(hostname)) {
      return true;
    }

    // 2. Block obvious internal hostnames
    const internalHostnames = ["localhost", "127.0.0.1", "0.0.0.0", "::1"];
    if (internalHostnames.includes(hostname)) {
      return false;
    }

    // 3. Resolve hostname to IP and check if it's private
    try {
      const { address } = await dns.lookup(hostname);
      if (isPrivateIP(address)) {
        return false;
      }
    } catch {
      // If DNS resolution fails, we can't verify it's safe
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { url, method } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    let currentUrl = url;
    let response: Response;
    let redirectCount = 0;
    const maxRedirects = 5;

    // Follow redirects manually to ensure each hop is validated
    while (true) {
      if (!(await isSafeUrl(currentUrl))) {
        return NextResponse.json(
          { error: "Access to the requested URL is denied for security reasons" },
          { status: 403 }
        );
      }

      response = await fetch(currentUrl, {
        method: method || "GET",
        headers: {
          "User-Agent": "OpenAPIHub/1.0",
        },
        redirect: "manual",
      });

      // Handle redirects (301, 302, 303, 307, 308)
      if (response.status >= 300 && response.status < 400 && redirectCount < maxRedirects) {
        const location = response.headers.get("location");
        if (!location) break;

        // Resolve relative URLs
        currentUrl = new URL(location, currentUrl).toString();
        redirectCount++;
      } else {
        break;
      }
    }

    if (redirectCount >= maxRedirects) {
      return NextResponse.json({ error: "Too many redirects" }, { status: 508 });
    }

    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      try {
        data = await response.json();
      } catch {
        data = await response.text();
      }
    } else {
      data = await response.text();
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    // Log error details to console but return generic message to client if preferred
    // For this app, we'll return the error message for better debugging as it's a proxy
    console.error("Proxy error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
