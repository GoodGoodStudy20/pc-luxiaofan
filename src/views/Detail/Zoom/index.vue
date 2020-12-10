<template>
  <div class="spec-preview">
    <!-- 中图 -->
    <img :src="imgUrl" />
    <!-- 和中图一样大小的div -->
    <div class="event" @mousemove.prevent="move($event)" ref="event"></div>
    <!-- 大图 -->
    <div class="big" >
      <img :src="bigImgUrl" :style="{top:topLgImg+'px',left:leftLgImg+'px'}"/>
    </div>
    <!-- 绿色的遮罩层 -->
    <div
      class="mask" ref="mask" :style="{top:top+'px',left:left+'px'}"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      left: 0, //marks左移位置
      top: 0, //marks下移位置
      leftLgImg: 0, //大图lgImg移动的位置
      topLgImg: 0, //大图lgImg移动的位置
    };
  },
  props: {
    imgUrl: String,
    bigImgUrl: String,
  },
  methods:{
    move(e){
      let marksWidth=this.$refs.mask.clientWidth/2
      let marksHeight=this.$refs.mask.clientHeight/2
      this.left=e.offsetX-marksWidth/2;
      this.top=e.offsetY-marksHeight/2;
      let width=this.$refs.mask.clientWidth
      let height=this.$refs.mask.clientHeight
      if(this.left<0){
                    this.left=0;
                }else if(this.left>width){
                    this.left=width;
                }
                if(this.top<0){
                    this.top=0;
                }else if(this.top>height){
                    this.top=height;
                }
                this.leftLgImg=-this.left*2;
                this.topLgImg=-this.top*2;
    }
  }
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>