import { axiosClient } from "../../utils/axiosConfig";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStoageManager";

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
    if (accessToken) {
      setItem(KEY_ACCESS_TOKEN, accessToken);
    }

    return response.result;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  register,
  login,
};
