<template>
  <div>
    <SortNav />
    <HomeContainer />
    <Recommend />
    <SellRank />
    <Lovely />
    <Floors v-for="floor in floors" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import SortNav from "../../components/SortNav";
import HomeContainer from "./HomeContainer";
import Recommend from "./Recommend";
import SellRank from "./SellRank";
import Lovely from "./Lovely";
import Floors from "./Floors";
import Brand from "./Brand";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",

  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  methods: {
    ...mapActions(["getFloors"]),
  },
  mounted() {
    this.getFloors();
  },
  components: {
    SortNav,
    HomeContainer,
    Recommend,
    SellRank,
    Lovely,
    Floors,
    Brand,
  },
};
</script>

<style lang="less" scoped>
</style>
