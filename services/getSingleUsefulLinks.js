import { instanceAxios } from "@/shared/instanceAxios";

export const getSingleUsefulLinks = async (lang, slug) => {
  try {
    const response = await instanceAxios.get(`useful-link/${slug}`, {
      headers: {
        "Accept-Language": lang,
      },
    });
    return response.data; 
   
    
  } catch (error) {
    console.error(`Error fetching single service [${slug}]:`, error);
    throw error;
  }
};
