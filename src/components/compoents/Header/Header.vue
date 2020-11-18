<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "首页"
    }
  }
};
</script>
<style scoped>
h1 {
  font-family: "思源黑体 Bold", "思源黑体 Regular", "思源黑体";
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #9137f3;
}
</style>