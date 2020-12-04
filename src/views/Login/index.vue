<template>
  <div class="login-warp">
    <div class="login">
      <div class="login-form-outer">
        <div class="login-form">
          <ul class="login-type">
            <li>扫描登录</li>
            <li class="active">账户登录</li>
          </ul>
          <div class="login-news">
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
            <button @click="login">登录</button>
            <div>
              <a href="">立即注册</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "../../api/users";
export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "111111")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login-warp {
  width: 100%;
  min-width: 1200px;
  background-color: #e93854;
}
.login {
  background: url("./images/loginbg.png") no-repeat;
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  position: relative;
}
.login-form-outer {
  width: 420px;
  height: 406px;
  background-color: #fff;
  position: absolute;
  top: 40px;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
  // border: 1px solid pink;
}
.login-form {
  height: 366px;
  border: 1px solid pink;
}
.login-type {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  display: flex;
  li {
    width: 240px;
    &.active {
      color: #e93854;
      border-bottom: 1px solid pink;
      border-left: 1px solid pink;
    }
  }
  li:hover {
    color: rgb(79, 76, 212) !important;
  }
}
.login-news {
  margin: 20px;
  height: 276px;
  // border: 1px solid pink;
}
.login-phone {
  display: flex;
  border: 1px solid pink;
  border-radius: 3px;
  i {
    width: 37px;
    height: 32px;
    border-right: 1px solid pink;
    background-image: url(./images/icons.png);
    background-position: -10px -201px;
  }
input{
  width: 100%;
  outline: none;
  border: none;
}
}
</style>
