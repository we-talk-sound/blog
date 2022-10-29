import Axios from 'axios';
import { accessToken } from 'redux/store';

const axios = Axios.create({
  withCredentials: true,
});

axios.interceptors.request.use(function (config) {

  config.headers = {
    'Content-Type': config.data instanceof FormData ? 'multipart/form-data' : 'application/json',
    'Authorization': accessToken() || "",
  };

  return config;
});

export default axios;
