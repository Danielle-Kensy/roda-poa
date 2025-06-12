import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const apiKey = process.env.VUE_APP_API_KEY;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (apiKey) {
    config.headers["x-api-key"] = apiKey;
  }
  return config;
});

export default api;
