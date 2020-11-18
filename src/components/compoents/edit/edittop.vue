<template>
  <div id="aa">
    <h1>{{title}}</h1>
    <div class="but-box">
         <el-button @click="go" class="aa"><i class="el-icon-right"></i>&nbsp;返回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "新建/编辑员工"
    }
  },
  methods:{
    go(){
       this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
#aa::after{
  display: block;
  content: "";
  clear: both;
}
h1 {
  font-family: "思源黑体 Bold", "思源黑体 Regular", "思源黑体";
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #9137f3;
  float: left;
}
.but-box{
  float: right;
  margin-right: 40px;
}
.aa{
  border-width: 0px;
    width: 80px;
    height: 34px;
    background: inherit;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(145, 55, 243, 1);
    border-radius: 4px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    color: #9137F3;
}
</style>