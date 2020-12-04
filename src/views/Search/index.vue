<template>
  <div>
    <SortNav />
    <div class="search-outer">
      <div class="search-main">
        <div class="search-top-outer">
          <ul class="search-top">
            <li>
              <a href="#">全部结果 ></a>
            </li>
          </ul>
          <ul class="search-tag">
            <li class="close-x" v-show="options.keyword">
              <a @click="delKeyword">{{ options.keyword }}<i>x</i></a>
            </li>
            <li class="close-x" v-show="options.categoryName">
              <a @click="delCategoryName">{{ options.categoryName }}<i>x</i></a>
            </li>
            <li class="close-x" v-show="options.trademark">
              <a @click="delTrademark"
                >品牌:{{ options.trademark.split(":")[1] }}<i>x</i></a
              >
            </li>
            <li
              class="close-x"
              v-for="(prop, index) in options.props"
              :key="prop"
              @click="delProp(index)"
            >
              <a>{{ prop.split(":")[2] }}:{{ prop.split(":")[1] }}<i>x</i></a>
            </li>
          </ul>
        </div>
        <div class="search-container">
          <SearchList :addTrademark="addTrademark" @addprops="addprops" />
          <ul class="search-sort-type">
            <li
              :class="{ active: options.order.indexOf('1') > -1 }"
              @click="setOrder('1')"
            >
              <a>
                综合<i
                  :class="{
                    iconfont: true,
                    'icon-jiangxu': isAllDown,
                    'icon-ascending': !isAllDown,
                  }"
                ></i>
              </a>
            </li>
            <li><a href="">销量</a></li>
            <li><a href="">新品</a></li>
            <li><a href="">评价</a></li>
            <li
              :class="{ active: options.order.indexOf('2') > -1 }"
              @click="setOrder('2')"
            >
              <a
                >价格
                <span class="icon-i">
                  <i
                    :class="{
                      iconfont: true,
                      'icon-shengxu2': true,
                      deactive: options.order.indexOf('2') > -1 && isPriceDown,
                    }"
                  ></i
                  ><i
                    :class="{
                      iconfont: true,
                      'icon-inverted-order': true,
                      deactive: options.order.indexOf('2') > -1 && !isPriceDown,
                    }"
                  ></i></span
              ></a>
            </li>
          </ul>
        </div>

        <ul class="search-list">
          <li v-for="goods in goodsList" :key="goods.id">
            <a href=""><img :src="goods.defaultImg" /></a>
            <div class="search-list-main">
              <p>
                ￥<i>{{ goods.price }}</i>
              </p>
              <div class="search-list-main-introduce">
                <a href="#"
                  >vivo iQOO U1x 6GB+64GB 晨霜白 5000mAh大电池 骁龙662处理器
                  AI全场</a
                >
              </div>
              <p class="search-evaluate"><strong>9999+</strong>评价</p>
              <div class="search-add-btn">
                <button>加入购物车</button>
              </div>
            </div>
          </li>
        </ul>
        <div class="search-pages">
          <Pagination
            :total="total"
            :page-size="5"
            :pager-count="7"
            :current-page="options.pageNo"
          />
          <!-- <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="options.pageNo"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="5"
              :pager-count="7"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortNav from "../../components/SortNav";
import Pagination from "../../components/Pagination";
import SearchList from "./SearchList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      //初始化所有数据，在接口文档可以找到数据类型
      options: {
        category1Id: "", // 一级分类id
        category2Id: "", // 二级分类id
        category3Id: "", // 三级分类id
        categoryName: "", // 分类名称
        keyword: "", // 搜索内容（搜索关键字）
        order: "1:desc", // 排序方式：1：综合排序  2：价格排序   asc 升序  desc 降序
        pageNo: 1, // 分页的页码（第几页）
        pageSize: 5, // 分页的每页商品数量
        props: [], // 商品属性
        trademark: "", // 品牌
      },
      isAllDown: true,
      isPriceDown: false,
    };
  },
  watch: {
    //监视$route的变化，监视搜索的params,query地址的变化，更新数据
    $route() {
      this.updateProductList();
    },
  },
  computed: {
    /* ...mapState({
  productList:(state)=>state.search.productList
}) */
    ...mapGetters(["trademarkList", "attrsList", "goodsList", "total"]),
  },
  methods: {
    ...mapActions(["getProductList"]),
    //更新商品列表
    updateProductList(pageNo = 1) {
      const { searchText: keyword } = this.$route.params; //获取params参数关键字
      const {
        //获取query上的参数
        categoryName,
        category1Id,
        category2Id,
        category3Id,
      } = this.$route.query;

      const options = {
        ...this.options, //展开所有初始化数据
        keyword, //可以覆盖掉原有初始化数据。
        categoryName,
        category1Id,
        category2Id,
        category3Id,
        pageNo,
      };
      //更新数据到this.options上,这样数据才可以在组件上找到
      this.options = options;
      //发送请求数据时传入数据
      this.getProductList(options);
    },
    delKeyword() {
      this.$bus.$emit("clearKeyword");
      this.options.keyword = "";
      this.$router.replace({
        name: "search",
        query: this.$route.query,
      });
    },
    delCategoryName() {
      this.options.categoryName = "";
      this.$router.replace({
        name: "search",
        params: this.$route.params,
      });
    },
    //添加品牌数据
    addTrademark(trademark) {
      this.options.trademark = trademark;
      this.updateProductList();
    },
    //点击x按钮删除
    delTrademark() {
      this.options.trademark = "";
      this.updateProductList();
    },
    addprops(prop) {
      this.options.props.push(prop);
      this.updateProductList();
    },
    delProp(index) {
      this.options.props.splice(index, 1);
      this.updateProductList();
    },
    setOrder(order) {
      let [orderNum, orderType] = this.options.order.split(":");
      if (orderNum === order) {
        if (order === "1") {
          this.isAllDown = !this.isAllDown;
        } else {
          this.isPriceDown = !this.isPriceDown;
        }
        orderType = orderType === "desc" ? "asc" : "desc";
      } else {
        if (order === "1") {
          orderType = this.isAllDown ? "desc" : "asc";
        } else {
          this.isPriceDown = false;
          orderType = "asc";
        }
      }
      this.options.order = `${order}:${orderType}`;
      this, this.updateProductList();
    },
    handleSizeChange(pageSize) {
      this.options.pageSize = pageSize;
      this.updateProductList();
    },
    handleCurrentChange(pageNo) {
      this.updateProductList(pageNo);
    },
  },
  mounted() {
    //挂载时需要发送请求数据
    this.updateProductList();
  },
  components: {
    SortNav,
    SearchList,
    Pagination,
  },
};
</script>

<style lang="less" scoped>
.search-main {
  width: 1200px;
  margin: 0 auto;
}
.search-top-outer {
  display: flex;
  align-items: center;
  .search-tag {
    display: flex;
  }
}
.search-top {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  margin-right: 20px;
}
.close-x {
  height: 20px;
  line-height: 20px;
  background-color: #ccc;
  margin: 10px;
  border-radius: 1px;
  i {
    margin: 0 10px;
  }
}
.search-sort-type {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  display: flex;
  background-color: #ccc;
  li {
    width: 80px;
    text-align: center;
    font-size: 16px;
    &.active {
      background: #e1251b;
      a {
        color: #fff;
      }
    }
  }
  li:nth-child(5) {
    .icon-i {
      position: relative;
      padding-left: 5px;
      i:nth-child(1) {
        position: absolute;
        top: -18px;
      }
      i:nth-child(2) {
        position: absolute;
        top: -3px;
      }
      i.deactive {
        opacity: 0.5;
      }
    }
  }
}
.search-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  overflow: hidden;
  li {
    width: 240px;
    height: 450px;
    padding: 5px;
    border: 1px solid red;
    text-align: center;
    box-sizing: border-box;
    img {
      width: 200px;
      height: 230px;
    }
  }
}
.search-list-main {
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  p:nth-child(1) {
    font-size: 14px;
    text-align: left;
    width: 100%;
    color: red;
  }
  .search-list-main-introduce {
    width: 200px;

    margin-top: 10px;
    a {
      line-height: 20px;
    }
  }
  .search-evaluate {
    width: 100%;
    text-align: left;
    margin: 10px 0;
    strong {
      color: red;
    }
  }
}
.search-add-btn {
  width: 100%;
  text-align: right;
  button {
    background-color: red;
    width: 80px;
    height: 30px;
    color: #fff;
    border: none;
  }
}
.search-pages {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 80px;
  // line-height: 80px;
  margin-top: 20px;
  // font-size: 14px;
  // button {
  //   width: 50px;
  //   height: 50px;
  //   border: 1px solid pink;
  //   margin: 5px;
  // }
}
// .search-pages-btn {
//   display: flex;
//   p {
//     height: 50px;
//     width: 50px;
//     line-height: 50px;
//     text-align: center;
//     font-size: 20px;
//   }
// }
// .search-pages-target {
//   display: flex;
//   padding-left: 20px;
//   align-items: center;
//   p:first-child {
//     margin-right: 10px;
//   }
//   input {
//     height: 50px;
//     width: 50px;
//     text-align: center;
//     outline: none;
//   }
//   button {
//     height: 50px;
//     width: 50px;
//     border-radius: 5px;
//   }
// }
</style>
