import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem } from "./localStoageManager";

let baseURL = "http://localhost:8000/api/";

export const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});
