import { instanceAxios } from "@/shared/instanceAxios";

export const getAbout = async (lang) => {
  try {
    const response = await instanceAxios.get("about", {
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