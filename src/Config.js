import axios from "axios";
import WebStorage from "./shared/LocalStorage";

const env = {
  production: "https://",
  development: "https://ikarely-api.herokuapp.com/api/v1/auth/",
  local: "http://localhost:8080/",
};

const user_token = WebStorage.get("user_token");
const serverUrl = env.development;

const api = axios.create({
  baseURL: serverUrl,
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
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
