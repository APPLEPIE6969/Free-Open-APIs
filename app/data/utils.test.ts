import { generateSlug, getAllApiSlugs } from "./utils.ts";
import assert from "node:assert";

/**
 * Tests for generateSlug
 */
function testGenerateSlug() {
  console.log("Running testGenerateSlug...");

  const testCases = [
    { input: "Simple Name", expected: "simple-name" },
    { input: "Multiple   Spaces", expected: "multiple-spaces" },
    { input: "Special!@#$%^&*()Chars", expected: "special-chars" },
    { input: "Leading and Trailing-", expected: "leading-and-trailing" },
    { input: "PokéAPI", expected: "pok-api" },
    { input: "123 Number 456", expected: "123-number-456" },
    { input: "---Already-Slugged---", expected: "already-slugged" },
    { input: "Mixed Case With SYMBOLS", expected: "mixed-case-with-symbols" },
  ];

  testCases.forEach(({ input, expected }) => {
    const actual = generateSlug(input);
    assert.strictEqual(actual, expected, `Failed for input: "${input}". Expected: "${expected}", Actual: "${actual}"`);
  });

  console.log("✅ testGenerateSlug passed!");
}

/**
 * Tests for getAllApiSlugs
 */
function testGetAllApiSlugs() {
  console.log("Running testGetAllApiSlugs...");

  const slugs = getAllApiSlugs();

  // 1. Check if it's an array
  assert(Array.isArray(slugs), "Should return an array");

  // 2. Check if it's not empty
  assert(slugs.length > 0, "Should not be empty");

  // 3. Check structure of items
  slugs.forEach(item => {
    assert(item && typeof item === "object", "Each item should be an object");
    assert(typeof item.slug === "string", "Each item should have a slug string");

    // Verify slug format
    assert(/^[a-z0-9-]+$/.test(item.slug), `Invalid slug format: ${item.slug}`);
    assert(!item.slug.startsWith("-"), `Slug should not start with hyphen: ${item.slug}`);
    assert(!item.slug.endsWith("-"), `Slug should not end with hyphen: ${item.slug}`);
  });

  // 4. Verify some specific APIs are present
  const knownApis = [
    "Age of Empires II",
    "Cat Facts",
    "Binance Public API",
    "PokéAPI"
  ];

  knownApis.forEach(name => {
    const expectedSlug = generateSlug(name);
    assert(slugs.some(s => s.slug === expectedSlug), `Missing expected slug for API: ${name} (${expectedSlug})`);
  });

  console.log(`✅ testGetAllApiSlugs passed! Verified ${slugs.length} slugs.`);
}

// Run tests
try {
  testGenerateSlug();
  testGetAllApiSlugs();
  console.log("\n✨ All tests passed successfully!");
} catch (error) {
  console.error("\n❌ Test failed!");
  console.error(error);
  process.exit(1);
}
