<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 页面遍历 -->
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 分页器，小圆点按钮功能 -->
    <div class="swiper-pagination"></div>
    <!-- 左右点击功能 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList() {
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initSwiper();
      });
    },
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        // 设置是否循环
        loop: true,
        // 设置分页器功能
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        //设置自动播放轮播图
        autoplay: {
          delay: 1000, //轮播间隙时间
          disableOnInteraction: false, //点击下一页后，仍然使用自动播放
        },
        // 设置左右点击按钮切换
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  mounted() {
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>
