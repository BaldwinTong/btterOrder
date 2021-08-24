<template>
  <div class="login">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <div class="content_box">
      <h3 class="title">登录</h3>
      <el-form
        class="formBox"
        :model="LoginForm"
        :rules="rules"
        ref="LoginForm"
      >
        <el-form-item class="formItem" prop="userName">
          <el-input placeholder="请输入账号" v-model="LoginForm.userName">
            <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="formItem" prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="LoginForm.password" @keyup.native.enter="enterKey"
          >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        class="btn"
        round
        @click="submitForm('LoginForm')"
        >登录</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      LoginForm: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    enterKey(){
      this.$router.push("/home");
    }
  },
};
</script>

<style>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpg") center center no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
.content_box {
  width: 460px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: #fff;
  margin-bottom: 10px;
}
.formItem {
  width: 260px;
}
.btn {
  width: 260px;
}
.el-textarea__inner,
.el-input__inner {
  background: transparent !important;
  color: #fff;
}
</style>