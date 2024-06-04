import axios from "axios";
import { BACKEND_URL } from "./constant";

export const setAuthHeaders = (token, extra) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ...extra,
    },
  };
};
export const api = axios.create({
  // baseURL: "https://medecinalbackend.onrender.com/api",
  baseURL: BACKEND_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
