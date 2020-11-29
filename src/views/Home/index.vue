<template>
  <div>
      <SortNav />
      <HomeContainer />
      <Recommend />
      <SellRank />
  </div>
</template>

<script>
import SortNav from "../../components/SortNav"
import HomeContainer from "./HomeContainer"
import Recommend from "./Recommend"
import SellRank from "./SellRank"
export default {
  name: 'Home',
  components:{
      SortNav,
      HomeContainer,
      Recommend,
      SellRank
  }
}
</script>

<style lang="less" scoped>

</style>
