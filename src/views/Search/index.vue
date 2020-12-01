<template>
  <div>
    <SortNav />
    <div class="search-outer">
      <div class="search-main">
        <ul class="search-top">
          <li>
            <a href="jiavascript:;">全部结果 ></a>
          </li>
        </ul>
        <div class="search-container">
          <div class="search-brand">
            <div class="search-brand-left">
              <p>品牌</p>
            </div>
            <div class="search-brand-main">
              <ul class="search-brand-logo">
                <li>
                  <a href=""><img src="" />华为</a>
                </li>
                <li>
                  <a href=""><img src="" />小米</a>
                </li>
                <li>
                  <a href=""><img src="" />oppo</a>
                </li>
                <li>
                  <a href=""><img src="" />oppo</a>
                </li>
                <li>
                  <a href=""><img src="" />oppo</a>
                </li>
                <li>
                  <a href=""><img src="" />oppo</a>
                </li>
                <li>
                  <a href=""><img src="" />oppo</a>
                </li>
                <li>
                  <a href=""><img src="" />oppo</a>
                </li>
                <li>
                  <a href=""><img src="" />oppo</a>
                </li>
                <li>
                  <a href=""><img src="" />pink</a>
                </li>
                <li>
                  <a href=""><img src="" />pink</a>
                </li>
                <li>
                  <a href=""><img src="" />pink</a>
                </li>
              </ul>
              <div class="search-brand-right">
                <div class="more"><a href="">更多V</a></div>
                <div class="more"><a href="">+多选</a></div>
              </div>
            </div>
          </div>
          <div class="search-type">
            <div class="search-type-left">
              <p>分类</p>
            </div>

            <ul class="search-type-list">
              <li>
                <a href="">手机</a>
              </li>
              <li>
                <a href="">平板</a>
              </li>
            </ul>
          </div>
          <div class="search-name">
            <div class="search-name-left">
              <p>品牌名称</p>
            </div>
            <ul class="search-name-list">
              <li>
                <a href="">华为</a>
              </li>
              <li>
                <a href="">小米</a>
              </li>
            </ul>
          </div>
          <div class="search-size">
            <div class="search-size-left">
              <p>屏幕尺寸</p>
            </div>
            <ul class="search-size-list">
              <li>
                <a href="">5.0英寸</a>
              </li>
            </ul>
          </div>
          <div class="search-options">
            <div class="search-options-left">
              <p>高级选项</p>
            </div>
              <ul class="search-options-list">
                <li>
                  <a href="">运行内存</a>
                </li>
                <li>
                  <a href="">机身内存</a>
                </li>
                <li>
                  <a href="">颜色</a>
                </li>
              </ul>
          </div>
          <ul class="search-sort-type">
            <li><a href="">综合</a></li>
            <li><a href="">销量</a></li>
            <li><a href="">新品</a></li>
            <li><a href="">评价</a></li>
            <li><a href="">价格</a></li>
          </ul>
          <ul class="search-list">
            <li>
              <a href=""><img src="./images/mobile01.png" /></a>
            </li>
            <li>
              <a href=""><img src="./images/mobile02.png" /></a>
            </li>
            <li>
              <a href=""><img src="./images/mobile03.png" /></a>
            </li>
            <li>
              <a href=""><img src="./images/mobile04.png" /></a>
            </li>
            <li>
              <a href=""><img src="./images/mobile05.png" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortNav from "../../components/SortNav";
export default {
  name: "Search",
  components: {
    SortNav,
  },
};
</script>

<style lang="less" scoped>
.search-main {
  width: 1200px;
  margin: 0 auto;
}
.search-top {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  display: flex;
}
.search-brand {
  display: flex;
  font-size: 14px;
  border-bottom: 1px solid pink;
  border-top: 1px solid pink;
  .search-brand-left {
    background-color: #ccc;
  }
  p {
    width: 110px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: auto 0;
    box-sizing: border-box;
  }
}
.search-brand-main {
  width: 1090px;
  height: 110px;
  display: flex;

}
.search-brand-logo {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  box-sizing: border-box;
  li {
    width: 110px;
    height: 50px;
    border: 1px solid pink;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
  }
}
.search-brand-right {
  width: 200px;

  padding-left: 50px;
  display: flex;
  .more {
    margin: 5px;
    width: 50px;
    height: 20px;
    line-height: 20px;
    border: 1px solid pink;
    font-size: 12px;
    text-align: center;
  }
}
.search-type {
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid pink;
  .search-type-left {
    background-color: #ccc;
  }
  p {
    width: 110px;
    padding-left: 10px;
    margin: auto 0;
    box-sizing: border-box;
  }
}
.search-type-list {
  display: flex;
  li {
    width: 100px;
    text-align: center;
    line-height: 50px;
  }
}
.search-name {
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid pink;
  .search-name-left {
    background-color: #ccc;
  }
  p {
    width: 110px;
    padding-left: 10px;
    margin: auto 0;
    box-sizing: border-box;
  }
}
.search-name-list {
  display: flex;
  li {
    width: 100px;
    text-align: center;
    line-height: 50px;
  }
}
.search-size {
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid pink;
  .search-size-left {
    background-color: #ccc;
  }
  p {
    width: 110px;
    padding-left: 10px;
    margin: auto 0;
    box-sizing: border-box;
  }
}
.search-size-list {
  display: flex;
  li {
    width: 100px;
    text-align: center;
    line-height: 50px;
  }
}
.search-options {
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid pink;
  .search-options-left {
    background-color: #ccc;
  }
  p {
    width: 110px;
    padding-left: 10px;
    margin: auto 0;
    box-sizing: border-box;
  }
}
.search-options-list {
  display: flex;
  li {
    width: 100px;
    text-align: center;
    line-height: 50px;
  }
}
.search-sort-type{
height: 40px;
line-height: 40px;
margin-top: 5px;
display: flex;
li{
width: 70px;
text-align: center;
font-size: 16px;
background-color: #ccc;
}
li:nth-child(1){
  background-color: red;

  font-weight: bold;

    a{
      color:#fff !important;
    }

}
}
</style>
