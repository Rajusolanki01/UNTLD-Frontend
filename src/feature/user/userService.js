import { axiosClient } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStoageManager";

const register = async (userData) => {
  try {
    const response = await axiosClient.post("user/register", userData);
    console.log(response);
    if (response?.data?.status === "error") {
      toast.error("User is Already Registered");
    } else {
      toast.success("User Created Successfully");
    }
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.data?.message || error.message;
    toast.info(errorMessage);
    throw errorMessage;
  }
};

const login = async (userData) => {
  try {
    const response = await axiosClient.post("user/login", userData);
    const accessToken = response?.data?.accessToken;
    if (accessToken) {
      setItem(KEY_ACCESS_TOKEN, accessToken);
    }
    if (response?.data?.message) {
      toast.error(response?.data?.message);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  register,
  login,
};
