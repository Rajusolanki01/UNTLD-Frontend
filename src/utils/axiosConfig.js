// import axios from "axios";
// import {
//   KEY_ACCESS_TOKEN,
//   getItem,
// } from "./localStoageManager";
// import { toast } from "sonner";

// let baseURL = process.env.REACT_APP_SERVER_BASE_URL;

// export const axiosClient = axios.create({
//   baseURL,
//   withCredentials: true,
// });

// axiosClient.interceptors.request.use(
//   (config) => {
//     const accessToken = getItem(KEY_ACCESS_TOKEN);
//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     const { data } = response;
//     if (data.status === "ok") {
//       const statusCode = data.statusCode;
//       if (statusCode === 201) {
//         toast.success(data.result);
//       }
//       return data;
//     }
//     const error = data.message;

//     if (data.statusCode === 201) {
//       toast.success(data.result);
//     }

//     toast.error(error);
//   },
//   async (error) => {
//     return Promise.reject("Network Error: " + error);
//   }
// );

import axios from "axios";
import {
  KEY_ACCESS_TOKEN,
  getItem,
  removeItem,
  setItem,
} from "./localStoageManager";
import { toast } from "sonner";

let baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.status === "ok") {
      const statusCode = data.statusCode;
      if (statusCode === 201) {
        toast.success(data.result);
      }
      return data;
    }

    const originalRequest = response.config;
    const statusCode = data.statusCode;
    const error = data.message;

    if (data.statusCode === 201) {
      toast.success(data.result);
    }

    toast.error(error);

    if (statusCode === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}user/refresh-token`, {
          withCredentials: true,
        })
        .then((refreshResponse) => {
          if (
            refreshResponse.data.status === "ok" &&
            refreshResponse.data.result
          ) {
            const newAccessToken = refreshResponse.data.result;
            setItem(KEY_ACCESS_TOKEN, newAccessToken);

            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return axiosClient(originalRequest);
          } else {
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace("/login");
            return Promise.reject(error);
          }
        })
        .catch((refreshError) => {
          toast.error("Error refreshing token:", refreshError);
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  },
  async (error) => {
    if (error.response && error.response.status === 404) {
      toast.error("Server not found. Please try again later.");
    } else {
      toast.error(error);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
