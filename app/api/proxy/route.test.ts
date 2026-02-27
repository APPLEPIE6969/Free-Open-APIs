import { test, describe, it, before, after, mock } from "node:test";
import assert from "node:assert";
// NOTE: In the test runner script, we swap the import below to point to our mock
import { POST } from "./route";

// Mock global fetch
const originalFetch = global.fetch;

describe("API Proxy Route", () => {
  after(() => {
    global.fetch = originalFetch;
  });

  it("should return 400 if URL is missing", async () => {
    const req = {
      json: async () => ({}),
    } as unknown as Request;

    const response = await POST(req);
    // @ts-ignore
    assert.strictEqual(response.status, 400);
    // @ts-ignore
    assert.strictEqual(response.body.error, "URL is required");
  });

  it("should return 405 if method is not allowed", async () => {
    const req = {
        json: async () => ({ url: "https://example.com", method: "TRACE" }),
    } as unknown as Request;

    const response = await POST(req);
    // @ts-ignore
    assert.strictEqual(response.status, 405);
  });

  it("should return 403 for disallowed hosts", async () => {
     const req = {
        json: async () => ({ url: "https://google.com", method: "GET" }),
    } as unknown as Request;

    const response = await POST(req);
    // @ts-ignore
    assert.strictEqual(response.status, 403);
  });

  it("should return 200 for allowed hosts", async () => {
    // Mock fetch for success
    global.fetch = async () => ({
        status: 200,
        headers: new Map([["content-type", "application/json"]]),
        json: async () => ({ success: true }),
    } as unknown as Response);

    const req = {
        json: async () => ({ url: "https://api.coindesk.com/v1/bpi/currentprice.json", method: "GET" }),
    } as unknown as Request;

    const response = await POST(req);
    // @ts-ignore
    assert.strictEqual(response.status, 200);
    // @ts-ignore
    assert.strictEqual(response.body.success, true);
  });

  it("should handle fetch errors gracefully (500)", async () => {
    // Mock fetch to throw
    global.fetch = async () => {
        throw new Error("Network Error");
    };

    const req = {
        json: async () => ({ url: "https://api.coindesk.com/v1/bpi/currentprice.json", method: "GET" }),
    } as unknown as Request;

    const response = await POST(req);

    // @ts-ignore
    assert.strictEqual(response.status, 500);
    // @ts-ignore
    assert.strictEqual(response.body.error, "Internal Server Error");
  });

  it("should handle private IP SSRF attempts", async () => {
      // Note: We need to mock dns.lookup.
      // Since dns is imported in the module, we rely on the test runner script to mock it or
      // we assume the 'isPrivateIp' function works.
      // For a true unit test of the route, we'd mock the 'isPrivateIp' function if it was exported,
      // or mock the 'node:dns/promises' module.

      // For this environment, we will rely on the real isPrivateIp check which uses real DNS.
      // So we use a localhost IP that should fail validation.

      const req = {
        json: async () => ({ url: "http://127.0.0.1/sensitive", method: "GET" }),
      } as unknown as Request;

      const response = await POST(req);
      // @ts-ignore
      assert.strictEqual(response.status, 403);
  });
});
