import { Category, categories } from "./apis";

export const getApiBySlug = (slug: string) => {
  for (const category of categories) {
    const api = category.apis.find((api) => {
      const apiSlug = api.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      return apiSlug === slug;
    });
    if (api) return { api, category };
  }
  return null;
};

export const getAllApiSlugs = () => {
  return categories.flatMap((category) =>
    category.apis.map((api) => ({
      slug: api.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
    }))
  );
};
