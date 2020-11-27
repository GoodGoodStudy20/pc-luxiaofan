<template>
  <footer class="footer">
    <div class="footer-login">
      <ul class="footer-list">
        <li>
          <a href="">关于我们</a>
        </li>
        <li>
          <a href="">联系我们</a>
        </li>
        <li>
          <a href="">联系客服</a>
        </li>
        <li>
          <a href="">商家入驻</a>
        </li>
        <li>
          <a href="">营销中心</a>
        </li>
        <li>
          <a href="">手机尚品汇</a>
        </li>
        <li>
          <a href="">销售联盟</a>
        </li>
        <li>
          <a href="">尚品汇社区</a>
        </li>
      </ul>
      <div class="footer-address">
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
      </div>
      <div class="footer-record">
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
}
.footer-login {
  width: 1200px;
  margin: 0 auto;
}
.footer-list {
  display: flex;
  justify-content: center;
  height: 54px;
  line-height: 54px;
  a {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
  }
}
.footer-address {
  height: 24px;
  line-height: 24px;
  text-align: center;
}
.footer-record {
  height: 24px;
  line-height: 24px;
  text-align: center;
}
</style>