import { type Category, categories } from "./apis";

export const generateSlug = (text: string) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};

export const generateSlug = (text: string) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};

export const searchApis = (query: string) => {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  return categories.flatMap(cat => cat.apis).filter(api =>
    api.name.toLowerCase().includes(lowerQuery) ||
    api.description.toLowerCase().includes(lowerQuery)
  );
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
 <<<<<<< fix-header-and-animations-8097553477721564416
    // Note: Category slugs might have slightly different rules if needed,
    // but generateSlug handles standard slugification.
    // The previous implementation for categories was:
    // category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    // generateSlug adds .replace(/^-+|-+$/g, "") which is safer.
 =======
 >>>>>>> open-api-hub-3091221042664467139
    const catSlug = generateSlug(category.name);
    return catSlug === slug;
  });
};

export const getAllCategorySlugs = () => {
  return categories.map((category) => ({
    slug: generateSlug(category.name),
  }));
};
