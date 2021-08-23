/**
 * axios 数据拦截
 */
import axios from "axios";
import { LS } from "@/utils/storage.js";
import { Toast, Notify } from "vant";

// 创建 axios 实例
const service = axios.create({
  baseURL: "/",
  timeout: 60000,
});

const err = (error) => {
  if (!error.response) {
    return Promise.reject(error);
  }

  if (error.response) {
    let status = error.response.status;
    if (status === 403) {
      Notify({
        message: "暂无权限访问，请联系系统管理员！",
      });
      return Promise.reject(403);
    }

    if (status === 401) {
      // 账号长时间未登录或在别处登录，请重新登录
      Notify({
        message: "账号长时间未登录或在别处登录，请重新登录！",
      });
      setTimeout(() => {
        // router.push({ path: "/login" }).catch((err) => {
        console.error(err);
        // });
      }, 1000);
      return Promise.reject(401);
    }

    return Promise.reject(error);
  }
};

service.interceptors.request.use(function (config) {
  const TOKEN = LS.get("accessToken");
  config.headers.common["accessToken"] = TOKEN;

  return config;
}, err);

// response interceptor
service.interceptors.response.use((response) => {
  if (response.data.code != 0) {
    Toast.fail(response.data.message);
  }
  return response.data.data;
}, err);

export default service;
