import { Category, categories } from "./apis";

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
