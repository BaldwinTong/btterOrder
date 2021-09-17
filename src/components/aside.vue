<template>
  <el-container class="aside_box">
    <el-menu
      default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#333744" router
    >
      <div @click="Stretch" class="Stretch">||||</div>
      <el-menu-item :index="item.name" v-for="item in routes"  :key="item.id">
        <i :class="item.icon"></i>
        <span slot="title">{{item.navTitle}}</span>
      </el-menu-item>
    </el-menu>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      routes:[{
          id:1,
          icon:'el-icon-s-home',
          name:'/home',
          navTitle:'首页',
      },{
          id:2,
          icon:'el-icon-user-solid',
          name:'/user',
          navTitle:'人员',
      }]
    };
  },
  methods: {
    Stretch() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.Stretch {
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  background-color: #333744;
  letter-spacing: 0.3em;
  cursor: pointer;
  font-size: 10px;
}
.el-menu-item {
  text-align: center;
  padding-left: 0 !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  background-image: linear-gradient(to top, #0f0c29, #302b63);
}
</style>