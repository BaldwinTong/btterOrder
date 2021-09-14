<template>
  <el-container class="home_container">
    <el-header><sellheader @loginOut="LoginOut"></sellheader></el-header>
    <el-container>
      <el-aside class="aside" width="200px"></el-aside>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sellheader from "../components/header.vue";
export default {
  data() {
    return {
      showLoginOut:false
    };
  },
  created() {
    let token = localStorage.getItem('token');
    console.log(token);

  },
  components: {
    sellheader,
  },
  methods: {
    loginOut(e){
      console.log(e);
    }
  },
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

.el-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #BAF3FA; */
  background-image: linear-gradient(to right, #544a7d, #ffd452);
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.title img {
  width: 40px;
  height: 40px;
}
.top_right {
  display: flex;
  align-items: center;
}
.head_img {
  color: #fff;
  display: flex;
  align-items: center;
}
.head_img img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.userName {
  font-size: 16px;
  font-weight: 600;
  color: #240b36;
  margin-right: 6px;
}
.icon-zhankai {
  color: #000000;
}
.dropItems {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.iconfont2 {
  font-size: 22px;
}
.aside {
  background-image: linear-gradient(to top, #0f0c29, #302b63);
}
.el-main {
  background-color: #fff;
}
</style>