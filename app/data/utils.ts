import { Category, categories } from "./apis";

export const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};

export const getApiBySlug = (slug: string) => {
  for (const category of categories) {
    const api = category.apis.find((api) => {
      const apiSlug = generateSlug(api.name);
      return apiSlug === slug;
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
    const catSlug = generateSlug(category.name);
    return catSlug === slug;
  });
};

export const getAllCategorySlugs = () => {
  return categories.map((category) => ({
    slug: generateSlug(category.name),
  }));
};
