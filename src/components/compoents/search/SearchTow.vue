<template>
  <div id="box">
    <div>
      <span>课程状态:</span>
      <el-input v-model="input" placeholder="请输入内容" class="textarea"></el-input>
    </div>
    <div>
      <span>上传时间:</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
    </div>
    <div>
       <el-button type="primary" class="but-cor"><i class="el-icon-upload2"></i>筛选</el-button>
        <el-link :underline="false">清空筛选条件</el-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    input: {
      type: String,
      default: "请输入内容"
    }
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  }
};
</script>
<style scoped>
#box {
  height: 60px;
  display: flex;
  margin: 10px 0; 
}
#box > div {
  line-height: 60px;
  flex: 1;
  margin-left: 30px;
}
#box>div:nth-of-type(3){
  text-align: center;
}
#box > div span {
  display: inline-block;
  margin-right: 20px;
  font-family: "思源黑体";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #333333;
}
.textarea >>> .el-input__inner {
  width: 185px;
  height: 37px;
}
.el-input {
  display: inline;
}
.el-date-editor{
  width: 240px;
}
.but-cor{
  background-color: #9137F3;
}
.el-link.el-link--default{
  margin-left: 20px;
}
.but-cor{
    width: 98px;
    height: 36px;
  }
</style>