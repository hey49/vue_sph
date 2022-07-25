import Vue from "vue";
import App from "./App.vue";
//引入路由
import router from "@/router";
// 全局组件
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

// 引入仓库
import store from "@/store";

// 引入mock数据
import "@/mock/mockServe";

//引入swiper样式，样式直接引入
import "swiper/css/swiper.css";

new Vue({
  render: (h) => h(App),
  //注册路由
  router,
  // 注册仓库
  store,
}).$mount("#app");
