// service统一出口
import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';
export {};

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: config => {
      // 携带token的拦截
      const token = 'cff659ed8a80500b71ed568d715095fa';
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    requestInterceptorCatch: err => {
      return err;
    },
    responseInterceptor: res => {
      return res;
    },
    responseInterceptorCatch: err => {
      return err;
    },
  },
});

export default request;
