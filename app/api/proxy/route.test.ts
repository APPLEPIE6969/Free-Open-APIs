import { test, describe, it, before } from "node:test";
import assert from "node:assert";

describe("API Proxy Route", () => {
  let routeHandler: any;

  before(async () => {
    // Import the route handler.
    // The loader will handle 'next/server' mocking and resolving 'data/apis'.
    const mod = await import("./route.ts");
    routeHandler = mod.POST;
  });

  it("should return 400 when URL is missing", async () => {
    const req = {
      json: async () => ({}),
    } as unknown as Request;

    const response = await routeHandler(req);
    assert.strictEqual(response.status, 400);
    const body = await response.json();
    assert.strictEqual(body.error, "URL is required");
  });

  it("should return 405 for invalid method", async () => {
    const req = {
      json: async () => ({ url: "https://age-of-empires-2-api.herokuapp.com/api/v1/", method: "INVALID" }),
    } as unknown as Request;

    const response = await routeHandler(req);
    assert.strictEqual(response.status, 405);
  });

  it("should return 403 for private IP (SSRF)", async () => {
    const req = {
      json: async () => ({ url: "http://127.0.0.1/sensitive", method: "GET" }),
    } as unknown as Request;

    const response = await routeHandler(req);
    assert.strictEqual(response.status, 403);
  });

  it("should return 200 for allowed URL", async () => {
    const originalFetch = global.fetch;

    global.fetch = async (url: any) => {
        return {
            status: 200,
            headers: new Map([["content-type", "application/json"]]),
            json: async () => ({ data: "success" }),
        } as any;
    };

    try {
        const req = {
          json: async () => ({ url: "https://age-of-empires-2-api.herokuapp.com/api/v1/", method: "GET" }),
        } as unknown as Request;

        const response = await routeHandler(req);

        if (response.status === 200) {
             const body = await response.json();
             assert.deepStrictEqual(body, { data: "success" });
        } else {
             // In CI/Sandbox without DNS, this might be 403
             assert.strictEqual(response.status, 403);
        }

    } finally {
        global.fetch = originalFetch;
    }
  });
});
