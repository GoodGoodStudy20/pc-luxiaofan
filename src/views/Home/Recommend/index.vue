<template>
  <div class="recommend">
    <div class="recommend-container">
      <ul class="today-recommend">
        <li class="recommend-clock">
          <div class="recommend-timer">
            <a href="">
              <img src="./images/clock.png" />
            </a>
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner">
          <a href=""><img src="./images/today01.png" /></a>
        </li>
        <li class="banner">
          <a href=""><img src="./images/today02.png" /></a>
        </li>
        <li class="banner">
          <a href=""><img src="./images/today03.png" /></a>
        </li>
        <li class="banner">
          <a href=""><img src="./images/today04.png" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style lang="less" scoped>
.recommend-container {
  width: 1200px;
  margin: 0 auto;
}
.today-recommend {
  height: 165px;
  background-color: #eaeaea;
  margin: 10px 0;
  display: flex;
}
.recommend-clock {
  width: 16.67%;
  background-color: #5c5251;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.recommend-timer {
  padding: 30px 0;
  h3 {
    margin: 9px 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 30.06px;
    color: #fff;
  }
}
</style>
