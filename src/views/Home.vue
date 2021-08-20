<template>
  <el-container class="home_container">
    <el-header>
        <div class="title">
            <img src="../assets/logo.png" alt="">
            <h3>后台管理系统</h3>
        </div>
        <el-button type="info" plain>退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="180px"> 

        
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
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

.el-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090A0C;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.title img{
  width: 40px;
  height: 40px;
}
.el-aside {
  background-color: pink;
}
.el-main {
  background-color: #fff;
}
</style>