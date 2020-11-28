<template>
  <header class="header">
    <div class="top">
      <div class="container-list">
        <div class="login-list">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login" class="login-list-login">登录</router-link>
            <router-link to="/register" class="login-list-register"
              >免费注册</router-link
            >
          </p>
        </div>
        <div class="type-list">
          <a href="">我的订单</a>
          <a href="">我的购物车</a>
          <a href="">我的尚品汇</a>
          <a href="">尚品汇会员</a>
          <a href="">企业采购</a>
          <a href="">关注尚品汇</a>
          <a href="">合作招商</a>
          <a href="">商家后台</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-logo">
        <router-link to="/"><img src="./images/logo.png" /></router-link>
      </div>
      <div class="bottom-search">
        <form @submit.prevent="search">
          <input type="text" v-model="searchText" />
          <button>搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    //点击跳转到search路由
    search() {
      const { searchText } = this;
      // const params = searchText ? `/${searchText}` : "";
      // const location = "/search"+params;
      // this.$router.push(location);
      const location={
        name:"search",
      }
      if(searchText){
        location.params={
          searchText
        }
      }
      this.$router.push(location)
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  min-width: 1200px;
}
.top {
  background-color: #eaeaea;
}
.container-list {
  width: 1200px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.login-list {
  display: flex;
  span {
    padding-left: 10px;
  }
}
.login-list-login {
  border-right: 1px solid #ccc;
  padding-right: 5px;
}
.login-list-register {
  padding: 5px;
}
.type-list {
  a {
    padding-left: 10px;
    padding-right: 10px;
    height: 20px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
  }
  a:nth-of-type(8) {
    border: none;
  }
}
.bottom {
  width: 1200px;
  height: 67px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 56px;
  }
}
.bottom-search {
  input {
    width: 490px;
    height: 32px;
    border: 2px solid red;
    box-sizing: border-box;
    outline: none;
  }
  button {
    width: 68px;
    height: 32px;
    color: #fff;
    font-weight: bold;
    background-color: red;
    border: none;
    outline: none;
  }
}
</style>