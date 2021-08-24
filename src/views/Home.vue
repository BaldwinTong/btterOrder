<template>
  <el-container class="home_container">
    <el-header>
      <div class="title">
        <img src="../assets/logo.png" alt="" />
        <h3>后台管理系统</h3>
      </div>
      <div class="top_right">
        <el-dropdown>
          <div class="head_img">
            <img src="../assets/01.jpg" alt="" />
            <span>admin</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="dropItems">
              <span>设置</span>
              <span class="icon iconfont iconfont2 icon-shezhi"></span>
            </el-dropdown-item>
            <el-dropdown-item class="dropItems">
              <span>退出</span>
              <span class="icon iconfont iconfont icon-tuichu"></span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="180px"> </el-aside>
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
  background-color: #BAF3FA;
  /* background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e); */
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
.dropItems {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.iconfont2 {
  font-size: 22px;
}
.el-aside {
  background-color: pink;
}
.el-main {
  background-color: #fff;
}
</style>