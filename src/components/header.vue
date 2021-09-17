<template>
  <el-container class="top_title">
    <div class="title">
      <img src="../assets/logo.png" alt="" />
      <h3>后台管理系统</h3>
    </div>
    <div class="top_right">
      <el-dropdown trigger="click">
        <div class="head_img">
          <img src="../assets/01.jpg" alt="" />
          <div class="userName">admin</div>
          <span
            class="icon iconfont icon-zhankai icon-yangshi_icon_tongyong_expand"
          ></span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="dropItems">
            <div>个人中心</div>
            <span class="icon iconfont iconfont2 icon-gerenzhongxin"></span>
          </el-dropdown-item>
          <el-dropdown-item class="dropItems">
            <span>设置</span>
            <span class="icon iconfont iconfont2 icon-shezhi1"></span>
          </el-dropdown-item>
          <el-dropdown-item class="dropItems" @click.native="LoginOut">
            <span>退出</span>
            <span
              class="icon iconfont iconfont2 icon-shinshoptuichudenglu"
            ></span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  created() {},
  methods: {
    LoginOut() {
      this.$store.dispatch("UserLogout");
      if (!this.$store.state.token) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.el-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #BAF3FA; */
  background-image: linear-gradient(to right, #544a7d, #ffd452);
}
.top_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

</style>