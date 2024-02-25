import { axiosClient } from "../../utils/axiosConfig";
import { toast } from "react-toastify";

const getProducts = async () => {
  try {
    const response = await axiosClient.get("product");
    if (response?.data?.message) {
      toast.error(response?.data?.message);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const productService = {
  getProducts,
};
