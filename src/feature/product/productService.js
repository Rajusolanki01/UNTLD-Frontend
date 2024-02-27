import { axiosClient } from "../../utils/axiosConfig";

const getProducts = async () => {
  try {
    const response = await axiosClient.get("product");

    return response.result;
  } catch (error) {
    throw error;
  }
};

export const productService = {
  getProducts,
};
