import { axiosClient } from "../../utils/axiosConfig";

const getProducts = async () => {
  try {
    const response = await axiosClient.get("product");

    return response.result;
  } catch (error) {
    throw error;
  }
};

const getSingleProduct = async (productId) => {
  try {
    const response = await axiosClient.get(`product/${productId}`);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const addToWishlist = async (productId) => {
  try {
    const response = await axiosClient.put("product/wishlist", { productId });

    return response.result;
  } catch (error) {
    throw error;
  }
};

export const productService = {
  getProducts,
  getSingleProduct,
  addToWishlist,
};
