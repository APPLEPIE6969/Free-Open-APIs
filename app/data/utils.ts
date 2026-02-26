import { type Category, categories, type API } from "./apis";

export const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};

// Initialize the lookup map once
const apiSlugMap = new Map<string, { api: API; category: Category }>();

// Populate the map
for (const category of categories) {
  for (const api of category.apis) {
    const slug = generateSlug(api.name);
    // Preserve "first match wins" behavior to match original implementation
    if (!apiSlugMap.has(slug)) {
      apiSlugMap.set(slug, { api, category });
    }
  }
}

export const getApiBySlug = (slug: string) => {
  return apiSlugMap.get(slug) || null;
};

export const getAllApiSlugs = () => {
  return categories.flatMap((category) =>
    category.apis.map((api) => ({
      slug: generateSlug(api.name),
    }))
  );
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find((category) => {
    const catSlug = generateSlug(category.name);
    return catSlug === slug;
  });
};

export const getAllCategorySlugs = () => {
  return categories.map((category) => ({
    slug: generateSlug(category.name),
  }));
};
