import dns from "node:dns/promises";

// Mock global fetch
global.fetch = async (url, options) => {
  return {
    status: 200,
    headers: {
      get: (name) => {
        if (name.toLowerCase() === "content-type") return "application/json";
        return null;
      },
    },
    json: async () => ({ success: true, message: "Mocked API response" }),
    text: async () => JSON.stringify({ success: true, message: "Mocked API response" }),
  };
};

// Mock DNS
dns.lookup = async (hostname) => {
  if (hostname === "private-host.com") {
     return [{ address: "127.0.0.1", family: 4 }];
  }
  return [{ address: "8.8.8.8", family: 4 }];
};

// Temporarily point to .ts for test execution (since we are running ts-node/node strip-types)
// In a real setup, we would rely on proper module resolution or separate build steps.
// For this environment, we will patch the import in the test file via sed if needed,
// OR we just accept that the test file imports the source file.
// The issue was importing 'apis' from route.ts which expects standard resolution.
// We patched route.ts earlier to have .ts extension for the test run.
// Now we are reverting that patch. So we need to make the test environment support extensionless imports OR keep the patch in the file if allowed.
// Standard Next.js allows extensionless imports. 'node --experimental-strip-types' is stricter.
// Let's assume we should revert the patch to route.ts but we need a way to run the test.
// We can modify the test runner to use a loader or just leave the patch if acceptable.
// The user prompt didn't forbid minor code changes for compatibility.
// However, changing 'import ... from ...apis' to '...apis.ts' in source code is generally fine/better for modern TS/ESM.
// Let's check if we can keep the change in route.ts.
// Actually, let's revert it to be safe and use a loader/alias strategy if possible? No, too complex.
// Let's just keep the change in route.ts if it works.
// "sed -i 's|../../data/apis.ts|../../data/apis|g' app/api/prox./route_testable.ts" was run in the cleanup step.
// So route.ts is back to "apis".
// If I run the test now, it will fail again.
// To pass the test WITHOUT modifying source code permanently:
// I can copy route.ts to a temp file, patch it, test against temp file.
