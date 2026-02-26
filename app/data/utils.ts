import type { Category } from "./apis.ts";
import { categories } from "./apis.ts";

export const generateSlug = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};

export const getApiBySlug = (slug: string) => {
  for (const category of categories) {
    const api = category.apis.find((api) => {
      return generateSlug(api.name) === slug;
    });
    if (api) return { api, category };
  }
  return null;
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
    return generateSlug(category.name) === slug;
  });
};

export const getAllCategorySlugs = () => {
  return categories.map((category) => ({
    slug: generateSlug(category.name),
  }));
};
