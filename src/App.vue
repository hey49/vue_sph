<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
  // import
  import Header from "./components/header";
  import Footer from "./components/footer";
  export default {
    name: "App",
    components: {
      Header,
      Footer,
    },
    mounted() {
      // 通知vuex发请求，获取数据，存储于仓库中
      // 在根组件执行，只需执行一次获取数据
      this.$store.dispatch("home/getCategoryList");
    },
  };
</script>

<style></style>
