import { type Category, categories } from "./apis.ts";

export const slugify = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const getApiBySlug = (slug: string) => {
  for (const category of categories) {
    const api = category.apis.find((api) => {
      const apiSlug = slugify(api.name);
      return apiSlug === slug;
    });
    if (api) return { api, category };
  }
  return null;
};

export const getAllApiSlugs = () => {
  return categories.flatMap((category) =>
    category.apis.map((api) => ({
      slug: slugify(api.name),
    }))
  );
};
