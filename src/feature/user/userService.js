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

const logout = async (userData) => {
  try {
    const response = await axiosClient.get("user/logout", userData);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (userData) => {
  console.log(userData.password);
  try {
    const response = await axiosClient.put(
      `user/reset-password/${userData.token}`,
      { password: userData.password }
    );
    return response.result;
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async (userData) => {
  try {
    const response = await axiosClient.post(
      "user/forgot-password-token",
      userData
    );
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

const getSingleUser = async (id) => {
  try {
    const response = await axiosClient.get(`user/${id}`);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const updateprofile = async (userData) => {
  try {
    const response = await axiosClient.put("user/edit-user", userData);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const deleteprofile = async (id) => {
  try {
    const response = await axiosClient.delete(`user/delete/${id}`);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const addToCart = async (cartData) => {
  try {
    const response = await axiosClient.post("user/add-to-cart", cartData);
    return response.result;
  } catch (error) {
    throw error;
  }
};

const getCart = async () => {
  try {
    const response = await axiosClient.get("user/usercart");
    return response.result;
  } catch (error) {
    throw error;
  }
};

const removeCartProduct = async (cartItemId) => {
  try {
    const response = await axiosClient.delete(
      `user/remove-product-cart/${cartItemId}`
    );
    return response.result;
  } catch (error) {
    throw error;
  }
};

const updateQuantityCartProduct = async (cartDetail) => {
  try {
    const response = await axiosClient.put(
      `user/update-product-cart/${cartDetail.cartItem}/${cartDetail.quantity}`
    );
    return response.result;
  } catch (error) {
    throw error;
  }
};

const createOrder = async (orderDetail) => {
  try {
    const response = await axiosClient.post(
      "user/cart/create-order",
      orderDetail
    );
    return response.result;
  } catch (error) {
    throw error;
  }
};

const myOrders = async () => {
  try {
    const response = await axiosClient.get("user/cart/getmyOrders");
    return response.result;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  register,
  login,
  forgotPassword,
  resetPassword,
  getUserWishlist,
  updateprofile,
  deleteprofile,
  getSingleUser,
  addToCart,
  getCart,
  removeCartProduct,
  updateQuantityCartProduct,
  createOrder,
  myOrders,
  logout,
};
