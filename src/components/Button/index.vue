<template>
  <button @click="handleClick"><slot /></button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    handleClick(event) {
      if (this.isClick) return;
      this.isClick = true;
      this.$listeners.click(event).finally(() => (this.isClick = false));
    },
  },
};
</script>

<style lang="less" scoped>
</style>
