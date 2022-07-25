// 对axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";
// import 进度条样式
import "nprogress/nprogress.css";
// method: start done

// 利用axios对象的方法create，创建axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候路径中出现api
  baseURL: "/mock",
  // 请求超时的时间
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    nProgress.done();
    return res.data;
  },
  (err) => Promise.reject(new Error("fail"))
);

// 对外暴露
export default requests;
