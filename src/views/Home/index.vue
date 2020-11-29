<template>
  <div>
      <SortNav />
      <HomeContainer />
  </div>
</template>

<script>
import SortNav from "../../components/SortNav"
import HomeContainer from "./HomeContainer"
export default {
  name: 'Home',
  components:{
      SortNav,
      HomeContainer
  }
}
</script>

<style lang="less" scoped>

</style>
