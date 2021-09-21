import axios from "axios";
import WebStorage from "./shared/LocalStorage";

const user_token = WebStorage.get("user_token");
const serverUrl =
  process.env.NODE_ENV === "local"
    ? process.env.REACT_APP_API_LOCAL
    : process.env.REACT_APP_API_DEV;

const api = axios.create({
  baseURL: "http://localhost:5500/api/v1/auth",
  responseType: "json",
  headers: {
    common: {
      Authorization: `Bearer ${user_token}`,
    },
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(function (config) {
  var token = WebStorage.get("user_token");
  config.headers.Authorization = `${token}`;

  return config;
});

export default api;
