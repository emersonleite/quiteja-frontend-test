import User from "./user";
import { AxiosInstance } from "axios";
import axios from "axios";

const apiAxios = axios.create({});

function repositories($api: AxiosInstance) {
  $api.defaults.baseURL = process.env.VUE_APP_BASE_URL;

  $api.interceptors.request.use(
    async (config) => {
      config.headers["app-id"] = process.env.VUE_APP_ID;

      return config;
    },
    (error) => Promise.reject(error)
  );

  return {
    company: User($api),
  };
}

export default repositories(apiAxios);
