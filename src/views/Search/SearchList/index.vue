<template>
  <div class="search-component">
    <div class="search-brand">
      <div class="search-brand-left">
        <p>品牌</p>
      </div>
      <div class="search-brand-main">
        <ul class="search-brand-logo">
          <!-- 品牌 -->
          <li
            v-for="trademark in trademarkList"
            :key="trademark.tmId"
            @click="addTrademark(`${trademark.tmId}:${trademark.tmName}`)"
          >
            <a><img src="" />{{ trademark.tmName }}</a>
          </li>
        </ul>
        <div class="search-brand-right">
          <div class="more"><a href="">更多V</a></div>
          <div class="more"><a href="">+多选</a></div>
        </div>
      </div>
    </div>
    <div class="search-type" v-for="attrs in attrsList" :key="attrs.attrId">
      <div class="search-type-left">
        <p>{{ attrs.attrName }}</p>
      </div>
      <ul class="search-type-list">
        <!-- 品牌属性 -->
        <li
          v-for="(attrValue, index) in attrs.attrValueList"
          :key="index"
          @click="
            $emit(
              'addprops',
              `${attrs.attrId}:${attrValue}:${attrs.attrName}`
            )
          "
        >
          <a>{{ attrValue }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchList",
  props: {
    addTrademark: Function,
    addAttrsList: Function,
  },
  computed: {
    ...mapGetters(["trademarkList", "attrsList"]),
  },
};
</script>

<style lang="less" scoped>
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
    margin: auto 20px 0;
    text-align: center;
    line-height: 50px;
  }
}
</style>
