import { axiosClient } from "../../utils/axiosConfig";

const createContactEnquiry = async (contactData) => {
  try {
    const response = await axiosClient.post("enquiry", contactData);
    return response.result;
  } catch (error) {
    throw error;
  }
};

export const contactService = {
  createContactEnquiry,
};
