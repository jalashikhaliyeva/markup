import { instanceAxios } from "@/shared/instanceAxios";

export const getForums = async (lang) => {
  try {
    const response = await instanceAxios.get("forums", {
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
