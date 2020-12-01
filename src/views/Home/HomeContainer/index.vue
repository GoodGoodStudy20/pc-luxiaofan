<template>
  <div class="main-container">
    <div class="main-container-center">
      <div class="block main-carousel">
        <!-- <el-carousel trigger="click" height="455px">
          <el-carousel-item
            ><img src="./images/banner1.jpg" />
          </el-carousel-item>
          <el-carousel-item
            ><img src="./images/banner2.jpg" />
          </el-carousel-item>
          <el-carousel-item
            ><img src="./images/banner3.jpg" />
          </el-carousel-item>
          <el-carousel-item
            ><img src="./images/banner4.jpg" />
          </el-carousel-item>
        </el-carousel> -->
        <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div
              class="swiper-slide"
              v-for="banner in banners"
              :key="banner.id"
            >
              <img :src="banner.imgUrl" />
            </div>

            ...
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="news">
        <h4>
          <em class="fl">尚品汇快报</em>
          <a class="fr tip">更多 ></a>
        </h4>
        <div class="clearix"></div>
        <ul class="news-list unstyled">
          <li>
            <span class="bold">[特惠]</span><a>备战开学季 全民半价购数码</a>
          </li>
          <li>
            <span class="bold">[公告]</span><a>备战开学季 全民半价购数码</a>
          </li>
          <li>
            <span class="bold">[特惠]</span><a>备战开学季 全民半价购数码</a>
          </li>
          <li>
            <span class="bold">[公告]</span><a>备战开学季 全民半价购数码</a>
          </li>
          <li>
            <span class="bold">[特惠]</span><a>备战开学季 全民半价购数码</a>
          </li>
        </ul>
      </div>
      <ul class="lifeservices">
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">话费</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">机票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">电影票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">游戏</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">彩票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">加油站</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">酒店</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">火车票</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">众筹</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">理财</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">礼品卡</span>
        </li>
        <li class="life-item">
          <i class="list-item"></i>
          <span class="service-intro">白条</span>
        </li>
      </ul>
      <div class="ads">
        <img src="./images/ad1.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "HomeContainer",
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    }),
  },
  methods: {
    ...mapActions(["getBanners"]),
  },
  async mounted() {
    await this.getBanners();

    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },
};
</script>

<style lang="less" scoped>
.main-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.main-container-center {
  height: 461px;
}
.main-carousel {
  box-sizing: border-box;
  width: 730px;
  height: 100%;
  margin-left: 213px;
  margin-top: 5px;
  overflow: hidden;
}
/* .el-carousel__item img {
  height: 461px;
  width: 730px;
} */

.right {
  float: left;
  width: 250px;
  margin-left: 5px;
  .news {
    border: 1px solid #e4e4e4;
    margin-top: 5px;

    h4 {
      border-bottom: 1px solid #e4e4e4;
      padding: 5px 10px;
      margin: 5px 5px 0;
      line-height: 22px;
      overflow: hidden;
      font-size: 14px;

      .fl {
        float: left;
      }

      .fr {
        float: right;
        font-size: 12px;
        font-weight: 400;
      }
    }

    .news-list {
      padding: 5px 15px;
      line-height: 26px;

      .bold {
        font-weight: 700;
      }
    }
  }

  .lifeservices {
    border-right: 1px solid #e4e4e4;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

    .life-item {
      border-left: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      margin-right: -1px;
      height: 64px;
      text-align: center;
      position: relative;
      cursor: pointer;
      width: 25%;

      .list-item {
        background-image: url("./images/icons.png");
        width: 61px;
        height: 40px;
        display: block;
      }

      .service-intro {
        line-height: 22px;
        width: 60px;
        display: block;
      }

      &:nth-child(1) {
        .list-item {
          background-position: 0px -5px;
        }
      }

      &:nth-child(2) {
        .list-item {
          background-position: -62px -5px;
        }
      }

      &:nth-child(3) {
        .list-item {
          background-position: -126px -5px;
        }
      }

      &:nth-child(4) {
        .list-item {
          background-position: -190px -5px;
        }
      }

      &:nth-child(5) {
        .list-item {
          background-position: 0px -76px;
        }
      }

      &:nth-child(6) {
        .list-item {
          background-position: -62px -76px;
        }
      }

      &:nth-child(7) {
        .list-item {
          background-position: -126px -76px;
        }
      }

      &:nth-child(8) {
        .list-item {
          background-position: -190px -76px;
        }
      }

      &:nth-child(9) {
        .list-item {
          background-position: 0px -146px;
        }
      }

      &:nth-child(10) {
        .list-item {
          background-position: -62px -146px;
        }
      }

      &:nth-child(11) {
        .list-item {
          background-position: -126px -146px;
        }
      }

      &:nth-child(12) {
        .list-item {
          background-position: -190px -146px;
        }
      }
    }
  }

  .ads {
    margin-top: 5px;

    img {
      opacity: 0.8;
      transition: all 400ms;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
