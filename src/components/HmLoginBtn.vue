<template>
  <div @click="clickFn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
div {
  background-color: rgb(216, 30, 6);
  color: #fff;
  margin: 20px 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  border-radius: 50px;
}
</style>