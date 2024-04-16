import { axiosClient } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  try {
    const response = await axiosClient.get(
      `product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
        data?.tag ? `tags=${data?.tag}&&` : ""
      }${data?.category ? `category=${data?.category}&&` : ""}${
        data?.color ? `color=${data?.color}&&` : ""
      }${data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""}${
        data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""
      }${data?.sort ? `sort=${data?.sort}&&` : ""}`
    );

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

const rating = async (ratingData) => {
  try {
    const response = await axiosClient.put("product/rating", ratingData);
    return response.result;
  } catch (error) {
    throw error;
  }
};

export const productService = {
  getProducts,
  getSingleProduct,
  addToWishlist,
  rating,
};
