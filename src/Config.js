import axios from "axios";
import WebStorage from "./shared/LocalStorage";

// const env = {
//   production: "https://app.ikarely.com/api/v1",
//   development: "https://ikarely-api.herokuapp.com/api/v1/",
//   local: "http://localhost:8080/",
// };

const user_token = WebStorage.get("user_token");
const serverUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV
    : process.env.REACT_APP_API;

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
  config.headers.Authorization = `${token}`;

  return config;
});

export default api;
