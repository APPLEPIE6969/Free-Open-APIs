import { test, describe, it } from "node:test";
import assert from "node:assert";
import { getApiBySlug, getCategoryBySlug } from "./utils.ts";
import type { Category, API } from "./apis.ts";

const mockData: Category[] = [
  {
    name: "Games & Comics",
    icon: "games",
    description: "Games",
    apis: [
      {
        name: "Age of Empires II",
        description: "AoE II",
        url: "http://example.com",
        tags: ["No Auth"],
        status: "Online",
      } as API,
      {
        name: "C++ API",
        description: "Special Char",
        url: "http://example.com",
        tags: ["No Auth"],
        status: "Online",
      } as API,
      {
        name: "  Space  Cadet  ",
        description: "Trimming needed",
        url: "http://example.com",
        tags: ["No Auth"],
        status: "Online",
      } as API,
    ],
  },
  {
    name: " Weird &  Wacky ",
    icon: "weird",
    description: "Weird category",
    apis: [],
  },
];

describe("getApiBySlug", () => {
  it("should return null for a non-existent slug", () => {
    const result = getApiBySlug("non-existent-api-slug-12345", mockData);
    assert.strictEqual(result, null);
  });

  it("should return the correct API and category for a valid slug", () => {
    const slug = "age-of-empires-ii";
    const result = getApiBySlug(slug, mockData);

    assert.notStrictEqual(result, null, "Result should not be null");
    assert.strictEqual(result?.api.name, "Age of Empires II");
    assert.strictEqual(result?.category.name, "Games & Comics");
  });

  it("should handle special characters correctly (C++ -> c)", () => {
    // Logic: lowercased, non-alphanumeric replaced by -, leading/trailing - trimmed
    // "C++ API" -> "c-api" ? Let's verify logic:
    // "C++ API".toLowerCase() -> "c++ api"
    // replace(/[^a-z0-9]+/g, "-") -> "c-api"
    const slug = "c-api";
    const result = getApiBySlug(slug, mockData);
    assert.notStrictEqual(result, null, "Should find 'C++ API' via slug 'c-api'");
    assert.strictEqual(result?.api.name, "C++ API");
  });

  it("should handle extra spacing (Space Cadet)", () => {
    // "  Space  Cadet  " -> "space-cadet"
    const slug = "space-cadet";
    const result = getApiBySlug(slug, mockData);
    assert.notStrictEqual(result, null, "Should find '  Space  Cadet  ' via slug 'space-cadet'");
    assert.strictEqual(result?.api.name, "  Space  Cadet  ");
  });
});

describe("getCategoryBySlug", () => {
  it("should return undefined for non-existent category", () => {
    const result = getCategoryBySlug("ghost-category", mockData);
    assert.strictEqual(result, undefined);
  });

  it("should find a standard category", () => {
    // "Games & Comics" -> "games-comics"
    const slug = "games-comics";
    const result = getCategoryBySlug(slug, mockData);
    assert.notStrictEqual(result, undefined);
    assert.strictEqual(result?.name, "Games & Comics");
  });

  it("should handle weird category names", () => {
    // " Weird &  Wacky " -> "weird-wacky"
    // logic: " Weird &  Wacky ".toLowerCase() -> " weird &  wacky "
    // replace -> "-weird-wacky-" ? Wait, logic is: replace(/[^a-z0-9]+/g, "-")
    // Let's trace:
    // " weird &  wacky " -> "-weird-wacky-"
    // The current logic in getCategoryBySlug DOES NOT trim leading/trailing dashes like getApiBySlug does!
    // "category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")"
    // So " Weird &  Wacky " -> "-weird-wacky-"

    // NOTE: This highlights an inconsistency/bug if clean URLs are desired, but I will test CURRENT behavior.
    const slug = "-weird-wacky-";
    const result = getCategoryBySlug(slug, mockData);
    assert.notStrictEqual(result, undefined, "Should match exactly as the current logic produces");
    assert.strictEqual(result?.name, " Weird &  Wacky ");
  });
});
