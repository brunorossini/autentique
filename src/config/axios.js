import axios from "axios";
import config from "./config";

const { apiUrl, tokenApi, cryptKey } = config;

const instance = axios.create({
  baseURL: apiUrl,
});

instance.interceptors.request.use((config) => {
  config.params = {
    tokenAPI: tokenApi,
    cryptKey,
  };

  return config;
});

export default instance;
