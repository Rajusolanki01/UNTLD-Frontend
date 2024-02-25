import axios from "axios";

let baseURL = "http://localhost:8000/api/";

export const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});
