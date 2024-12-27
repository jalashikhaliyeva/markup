// services/contactService.js
import { instanceAxios } from "@/shared/instanceAxios";

export const postContactForm = async ({ firstName, lastName, subject, message }) => {
  try {
    const response = await instanceAxios.post("submit_form", {
      first_name: firstName,
      last_name: lastName,
      subject,
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
