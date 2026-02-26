import { describe, it } from "node:test";
import assert from "node:assert";
import { generateSlug, getApiBySlug, getCategoryBySlug } from "./utils.ts";

describe("generateSlug", () => {
  it("should generate slug for simple names", () => {
    assert.strictEqual(generateSlug("Test API"), "test-api");
  });

  it("should handle special characters", () => {
    // C# -> c- -> c (trailing hyphen removed)
    assert.strictEqual(generateSlug("C#"), "c");
    // C++ -> c- -> c (trailing hyphen removed)
    assert.strictEqual(generateSlug("C++"), "c");
    // .NET -> -net -> net (leading hyphen trimmed)
    assert.strictEqual(generateSlug(".NET"), "net");
  });

  it("should handle leading/trailing spaces and hyphens", () => {
    assert.strictEqual(generateSlug("  Test API  "), "test-api");
    assert.strictEqual(generateSlug("-Test-API-"), "test-api");
  });

  it("should handle multiple spaces and special characters", () => {
    assert.strictEqual(generateSlug("Test   API"), "test-api");
    assert.strictEqual(generateSlug("Test & API"), "test-api");
  });

  it("should handle mixed case", () => {
    assert.strictEqual(generateSlug("TeSt ApI"), "test-api");
  });
});

describe("getApiBySlug", () => {
  it("should find an existing API", () => {
    const result = getApiBySlug("age-of-empires-ii");
    assert.ok(result);
    assert.strictEqual(result?.api.name, "Age of Empires II");
  });

  it("should return null for non-existing API", () => {
    const result = getApiBySlug("non-existing-api");
    assert.strictEqual(result, null);
  });
});

describe("getCategoryBySlug", () => {
  it("should find an existing Category", () => {
    const category = getCategoryBySlug("games-comics");
    assert.ok(category);
    assert.strictEqual(category?.name, "Games & Comics");
  });

  it("should return undefined for non-existing Category", () => {
    const category = getCategoryBySlug("non-existing-category");
    assert.strictEqual(category, undefined);
  });
});
