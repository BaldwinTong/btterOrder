<template>
  <el-container class="home_container">
    <el-header><sellheader></sellheader></el-header>
    <el-container>
      <el-aside class="aside"><sellaside></sellaside> </el-aside>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import sellheader from "../components/header.vue";
import sellaside from "../components/aside.vue";
export default {
  data() {
    return {
      showLoginOut: false,
    };
  },
  created() {
    let token = localStorage.getItem("token");
    console.log(token);
  },
  components: {
    sellheader,
    sellaside,
  },
  methods: {},
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
</style>