import { instanceAxios } from "@/shared/instanceAxios";

/**
 * Fetches data for a single service by slug.
 *
 * @param {string} lang - The locale (e.g., 'az', 'en', 'ru').
 * @param {string} slug - The slug of the single service.
 * @returns {Promise<Object>} The single service data.
 */
export const getSingleProject = async (lang, slug) => {
  try {
    // Example endpoint: new.markup.az/api/service/{slug}
    const response = await instanceAxios.get(`project/${slug}`, {
      headers: {
        "Accept-Language": lang,
      },
    });
    return response.data; // e.g. { item: { ... } }
  } catch (error) {
    console.error(`Error fetching single service [${slug}]:`, error);
    throw error;
  }
};
