import { test, describe, it } from "node:test";
import assert from "node:assert";
import { getApiBySlug, getAllCategorySlugs } from "./utils.ts";
import { categories } from "./apis.ts";

describe("getApiBySlug", () => {
  it("should return null for a non-existent slug", () => {
    const result = getApiBySlug("non-existent-api-slug-12345");
    assert.strictEqual(result, null);
  });

  it("should return the correct API and category for a valid slug", () => {
    const slug = "age-of-empires-ii";
    const result = getApiBySlug(slug);

    assert.notStrictEqual(result, null, "Result should not be null");
    assert.strictEqual(result?.api.name, "Age of Empires II");
    assert.strictEqual(result?.category.name, "Games & Comics");
  });
});

describe("getAllCategorySlugs", () => {
  it("should return slugs for all categories", () => {
    const slugs = getAllCategorySlugs();
    assert.strictEqual(slugs.length, categories.length);

    // Check structure
    assert.ok(slugs.every(s => typeof s.slug === 'string'));
  });

  it("should correctly slugify category names", () => {
    const slugs = getAllCategorySlugs();

    // Find specific expected slug for "Games & Comics"
    // "Games & Comics" -> "games-comics"
    const gamesCategory = slugs.find(s => s.slug === "games-comics");
    assert.ok(gamesCategory, "Should contain 'games-comics' slug");

    // Verify transformation logic consistency for all
    categories.forEach((cat, index) => {
      const expectedSlug = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      assert.strictEqual(slugs[index].slug, expectedSlug);
    });
  });
});
