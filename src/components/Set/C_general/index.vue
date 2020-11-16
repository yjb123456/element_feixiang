  <template>
  <div>
    <Header title="通用设置"></Header>
    <div class="box-boder-pub" style="height:474px">
      <div>
        <p>
          待付款订单取消时间：拍下未付款订单
          <el-input v-model="input" placeholder="60" class="aa"></el-input>分钟内未付款，自动取消订单
        </p>
        <p>
          累计消费满
          <el-input v-model="input2" placeholder="100.00 " class="aa" style="width:110px"></el-input>元，升一级；最高
          <el-input v-model="input3" placeholder="11" class="aa"></el-input>级
        </p>
        <p>
          每
          <el-input v-model="input4" placeholder="100" class="aa"></el-input>积分可抵扣
          <el-input v-model="input5" placeholder="10" class="aa"></el-input>元
        </p>
      </div>
      <div class="cc">
        <el-button :plain="true" @click="open2" class="cheng"><i class="el-icon-document-copy"></i>  保存</el-button>
      </div>
    </div>
  </div>
</template>
  <script>
import Header from "../../compoents/Header/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      input: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    };
  },
  methods: {
    open2() {
      this.$message({
        message: "保存成功",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
.aa {
  width: 44px;
  height: 37px;
  margin: 0 10px;
}
.box-boder-pub p {
  margin: 20px;
  font-family: '思源黑体';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #333333;
    text-align: left;
}
.aa >>> .el-input__inner {
  padding: 0;
  text-align: center;
  color: #000;
}
.cheng {
  background-color: rgba(145, 55, 243, 1);
  color: #fff;
}
.cc{
    position:absolute;
    top: 80%;
    left: 45%;
}
</style>