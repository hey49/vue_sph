// 统一管理api
import requests from "./request";
import mockRequests from "./mockRequest";

// 请求地址：/api/product/getBaseCategoryList GET 无参数
export const reqCategoryList = () => {
  return requests({ url: "/product/getBaseCategoryList", method: "get" });
};

// 获取mock banner数据
export const reqBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });

// 获取mock floor 数据
export const reqFloorList = () => mockRequests({url: "/floor", method: "get"})