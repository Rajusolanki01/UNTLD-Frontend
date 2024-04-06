import { axiosClient } from "../../utils/axiosConfig";
import {
  KEY_ACCESS_TOKEN,
  KEY_USER_ID,
  setItem,
} from "../../utils/localStoageManager";

const register = async (userData) => {
  try {
    const response = await axiosClient.post("user/register", userData);
    console.log(response);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const login = async (userData) => {
  try {
    const response = await axiosClient.post("user/login", userData);
    const accessToken = response?.result?.accessToken;
    const userId = response?.result?._id;
    if (accessToken) {
      setItem(KEY_ACCESS_TOKEN, accessToken);
    }
    if (userId) {
      setItem(KEY_USER_ID, userId);
    }

    return response.result;
  } catch (error) {
    throw error;
  }
};

const getUserWishlist = async () => {
  try {
    const response = await axiosClient.get("user/wishlist");
    return response.result;
  } catch (error) {
    throw error;
  }
};

const getSingleUser = async (userId) => {
  try {
    const response = await axiosClient.get(`user/${userId}`);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const addToCart = async (cartData) => {
  try {
    const response = await axiosClient.get("user/add-to-cart", cartData);
    return response.result;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  getSingleUser,
  addToCart,
};
