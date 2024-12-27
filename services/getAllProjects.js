import { instanceAxios } from "@/shared/instanceAxios";

export const getAllProjects = async (lang) => {
  try {
    const response = await instanceAxios.get("all-projects", {
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
