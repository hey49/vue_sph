// routes info

//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail"

export default [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: true },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "/detail/:skuid",
      component: Detail,
      meta: { show: true },
    },
    //重定向
    {
      path: "/",
      redirect: "/home",
    },
  ]