import Vue from "vue";
import App from "./App.vue";
//引入路由
import router from "@/router";
// 全局组件
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);
import Pagination from "@/components/Pagination"
Vue.component(Pagination.name, Pagination)

// 引入仓库
import store from "@/store";

// 引入mock数据
import "@/mock/mockServe";

//引入swiper样式，样式直接引入
import "swiper/css/swiper.css";

new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //注册路由
  router,
  // 注册仓库
  store,
}).$mount("#app");
