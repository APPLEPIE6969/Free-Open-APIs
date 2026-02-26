import { test, describe, it } from "node:test";
import assert from "node:assert";
import { getApiBySlug } from "./utils.ts";

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
