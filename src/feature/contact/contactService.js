import { axiosClient } from "../../utils/axiosConfig";

const createContactEnquiry = async (contactData) => {
  console.log("dd", contactData);
  try {
    const response = await axiosClient.post("enquiry", contactData);
    console.log(response);
    return response.result;
  } catch (error) {
    throw error;
  }
};

export const contactService = {
  createContactEnquiry,
};
