import Cookie from 'js-cookie';
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    config.headers['X-XSRF-TOKEN'] = Cookie.get('XSRF-TOKEN');
    return config
  });
