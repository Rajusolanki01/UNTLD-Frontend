import { axiosClient } from "../../utils/axiosConfig";

const getblogs = async () => {
  try {
    const response = await axiosClient.get("blog");
    return response.result;
  } catch (error) {
    throw error;
  }
};

const getablog = async (id) => {
  try {
    const response = await axiosClient.get(`blog/${id}`);
    return response.result;
  } catch (error) {
    throw error;
  }
};

export const blogService = {
  getblogs,
  getablog,
};
