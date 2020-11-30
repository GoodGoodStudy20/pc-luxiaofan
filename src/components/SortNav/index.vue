<template>
  <div class="home-main">
    <div class="home-main-list" @mouseenter="isShow=true" @mouseleave="isShow=false">
      <h2 class="all-goods-list">全部商品分类</h2>
      <div class="home-main-nav">
        <a href="">服装城</a>
        <a href="">美妆馆</a>
        <a href="">尚品汇超市</a>
        <a href="">全球购</a>
        <a href="">闪购</a>
        <a href="">团购</a>
        <a href="">有趣</a>
        <a href="">秒杀</a>
      </div>
      <div class="home-sort" v-show="isHomeShow || isShow">
        <div class="all-sort-list2" @click="goSearch">
          <div
            class="home-allgoods"
            v-for="categoryFirst in categoryList"
            :key="categoryFirst.categoryId"
          >
            <h3>
              <!-- 一级分类列表 -->
              <a
                :data-categoryName="categoryFirst.categoryName"
                :data-categoryId="categoryFirst.categoryId"
                :data-categoryType="1"
                >{{ categoryFirst.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix" >
              <div class="subitem">
                <dl
                  class="fore"
                  v-for="categorySecond in categoryFirst.categoryChild"
                  :key="categorySecond.categoryId"
                >
                  <dt>
                    <!-- 二级列表 -->
                    <a
                      :data-categoryName="categorySecond.categoryName"
                      :data-categoryId="categorySecond.categoryId"
                      :data-categoryType="2"
                      >{{ categorySecond.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <!-- 三级列表 -->
                    <em
                      v-for="categoryThird in categorySecond.categoryChild"
                      :key="categoryThird.categoryId"
                    >
                      <a
                        :data-categoryName="categoryThird.categoryName"
                        :data-categoryId="categoryThird.categoryId"
                        :data-categoryType="3"
                        >{{ categoryThird.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SortNav",
  data() {
    return {
      isHomeShow:this.$route.path==="/",
      isShow:false
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    goSearch(e) {
      this.isShow=false
      const { categoryname, categorytype, categoryid } = e.target.dataset;
      console.log(this.$router);
      console.log(e.target.dataset);
      this.$router.push({
        name: "search",
        query: {
          categoryName: categoryname,
          [`category${categorytype}Id`]: categoryid,
        },
      });
    },
  },
  mounted() {
    // console.log(this);
    this.getCategoryList();

    // const result = reqgetBaseCategoryList();
    // this.category = result.slice(0, 15);
  },
};
</script>

<style lang="less" scoped>
.home-main {
  min-width: 1200px;
  border-bottom: 2px solid #e1251b;
}
.home-main-list {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.all-goods-list {
  width: 210px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #e1251b;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.home-main-nav a {
  height: 45px;
  line-height: 45px;
  margin: 0 22px;
  font-size: 16px;
  color: #333;
}
.home-sort {
  position: absolute;
  left: 0;
  top: 47px;
  width: 210px;
  height: 461px;
  background-color: #fafafa;
  z-index: 10;
}
.home-allgoods h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: #ccc;
  }
}
.item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  height: 200px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
  dl {
    border-top: 1px solid #eee;
    padding: 6px 0;
    overflow: hidden;
    zoom: 1;
    &.fore {
      border-top: 0;
    }
  }
  dt {
    float: left;
    width: 54px;
    line-height: 22px;
    text-align: right;
    padding: 3px 6px 0 0;
    font-weight: 700;
  }
  dd {
    float: left;
    width: 415px;
    padding: 3px 0 0;
    overflow: hidden;
  }
  em {
    float: left;
    height: 14px;
    line-height: 14px;
    padding: 0 8px;
    margin-top: 5px;
    border-left: 1px solid #ccc;
  }
}
.all-sort-list2 .home-allgoods {
  &:hover {
    .item-list {
      display: block;
    }
  }
}
</style>
