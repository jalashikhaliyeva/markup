import { instanceAxios } from "@/shared/instanceAxios";

export const getUsefulLinks = async (lang) => {
  try {
    const response = await instanceAxios.get("useful-links", {
      headers: {
        "Accept-Language": lang,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching landing info:", error);
    throw error;
  }
};
