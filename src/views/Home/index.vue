<template>
  <div>
      <SortNav />
      <HomeContainer />
      <Recommend />
      <SellRank />
      <Lovely />
  </div>
</template>

<script>
import SortNav from "../../components/SortNav"
import HomeContainer from "./HomeContainer"
import Recommend from "./Recommend"
import SellRank from "./SellRank"
import Lovely from "./Lovely"
export default {
  name: 'Home',
  components:{
      SortNav,
      HomeContainer,
      Recommend,
      SellRank,
      Lovely
  }
}
</script>

<style lang="less" scoped>

</style>
