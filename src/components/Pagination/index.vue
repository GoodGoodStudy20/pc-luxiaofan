<template>
  <div class="pagination-components">
    <button
      :disabled="myCurrentPage <= 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button :class="{ active: myCurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
    >
      {{ startEnd.start + item - 1 }}
    </button>
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <button
      :class="{ active: myCurrentPage === totalPages }"
      v-show="totalPages > 1"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="myCurrentPage >= totalPages"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>
    <button>总数:{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default:0,
    },
    //每页的数据
    pageSize: {
      type: Number,
      default: 10,
    },
    pagerCount: {
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      //因为props里面的属性不可更改，是只读的所有设置myCurrentPage
      myCurrentPage: this.currentPage,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      const { myCurrentPage, pagerCount, totalPages } = this;
      let start, end;
      //中间start到end的数，不包含开头和结尾。pagerCount默认为7，此设置为5。
      const count = pagerCount - 2;
      //中间值向下取整。值为2
      //myCurrentPage为当前点击的按钮。
      const halfCount = Math.floor(count / 2);
      //如果点击的页面值位于靠近总页面时，start固定不变为totalPages-count
      if (myCurrentPage >= totalPages - halfCount) {
        start = totalPages - count;
      } else {
        //正常中间时start就为当前点击的页面-中间值
        start = myCurrentPage - halfCount;
      }
      //start最小为2
      if (start <= 1) {
        start = 2;
      }
      //end值为起始值+5-1
      end = start + count - 1;
      //如果end值靠近总页面，end值固定为总页面-1,就是页面显示的按钮数小于count，中间按钮数
      if (end >= totalPages) {
        end = totalPages - 1;
      }
      return {
        start,
        end,
      };
    },
    //需要遍历的按钮数量。
    mapBtnCount() {
      const { start, end } = this.startEnd;
      const count = end - start + 1;
      return count >= 1 ? count : 0;
    },
  },
  methods: {
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination-components {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>
