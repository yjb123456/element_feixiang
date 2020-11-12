<template>
  <div>
    <Header title="课程管理"></Header>
    <div class="box-boder-pub">
      <div class="title">
        <i class="el-icon-menu"></i>
        <span style="margin-left:10px">筛选</span>
      </div>
      <SearchTow></SearchTow>
    </div>
  </div>
</template>
<script>
import Header from "../compoents/Header/Header";
import SearchTow from "../compoents/search/SearchTow";
export default {
  components: {
    Header,
    SearchTow
  }
};
</script>