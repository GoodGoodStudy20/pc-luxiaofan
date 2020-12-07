<template>
  <div class="register">
    <div class="register-top">
      <h3>注册新用户</h3>
      <p>我有账号，去<a href="">登录</a></p>
    </div>
    <div class="register-container">
      <div class="register-phone">
        <input type="text" placeholder="请输入你的手机号" />
      </div>
      <div class="register-Verification">
        <input type="text" placeholder="请输入验证码" />
      </div>
      <div class="register-password">
        <input type="text" placeholder="请输入你的登录密码" />
      </div>
      <div class="register-passwordVerify">
        <input type="text" placeholder="请输入确认密码" />
      </div>
    </div>
    <div class="register-agreement">
      <input type="checkbox" />
      <p>同意协议并注册尚品汇用户协议</p>
    </div>
    <button>完成</button>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
</style>
