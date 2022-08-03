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

// 获取搜索数据，请求地址：/api/list POST 需要带参数
// 当前接口需给服务器传递一个默认参数（至少是一个空对象）
export const reqGetSearchInfo = (params) => {
  return requests({ url: "/list", method: "post", data: params});
}