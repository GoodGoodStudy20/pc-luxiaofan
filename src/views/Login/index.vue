<template>
  <div class="login-warp">
    <div class="login">
      <div class="login-form">
        <ul class="login-type">
          <li>
            <a href="">扫描登录</a>
          </li>
          <li>
            <a href="">账户登录</a>
          </li>
        </ul>

        <div class="login-content">
          <div class="login-phone">
            <i></i>
            <input type="text" placeholder="手机号" />
          </div>
          <div class="login-password">
            <i></i>
            <input type="text" placeholder="请输入密码" />
          </div>
        </div>

        <div class="login-automatic">
          <label> <input type="checkbox" />自动登录 </label>
          <a href="">忘记密码？</a>
        </div>
        <button>登录</button>
        <div>
          <a href="">立即注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
.login-warp {
  width: 100%;
  background-color: #e93854;
}
.login {
  background: url("./images/loginbg.png") no-repeat;
  width: 1200px;
  height: 487px;
  margin: 0 auto;
}
.login-form {
  width: 420px;
  height: 406px;
  border: 1px solid pink ;
}
</style>
