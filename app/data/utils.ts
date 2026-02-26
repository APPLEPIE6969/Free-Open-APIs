import { categories } from "./apis";

export const getApiBySlug = (slug: string) => {
  for (const category of categories) {
    const api = category.apis.find((api) => api.slug === slug);
    if (api) return { api, category };
  }
  return null;
};

export const getAllApiSlugs = () => {
  return categories.flatMap((category) =>
    category.apis.map((api) => ({
      slug: api.slug,
    }))
  );
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find((category) => category.slug === slug);
};

export const getAllCategorySlugs = () => {
  return categories.map((category) => ({
    slug: category.slug,
  }));
};
