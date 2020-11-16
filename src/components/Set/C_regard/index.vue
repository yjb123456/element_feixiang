  <template>
  <div>
    <Header title="关于我们"></Header>
    <div class="box-boder-pub" style="height:689px">
      <div>
        <div>
          <el-input v-model="input" placeholder="请填写关于我们  " class="input"></el-input>
        </div>
        <div class="xq">
          <span style="font-size:13px">内容详情:</span>&nbsp;&nbsp;
          <div class="bb">
            <img src="../../../assets/C-hone/7.png" alt />
            <div >
              <h4 style="color:#3F74F1">关于我们</h4>
              <img src="../../../assets/C_Carousel_img/5.png" alt />
              <p>
                校区环境优雅，简约舒适，电教化一体式互动教学，师生融洽，学习气氛浓郁。
                校区以高度本地化教育为导向，争取做方圆三公里受孩子喜爱、被家长信任的教育培训机构。
                让孩子真正的做到爱上学习，收获成长。6个精品小班教学中心，19个VIP个性化学习中心，
              </p>
              <p>非翔教育一步一步走进北京家庭，读懂孩子们的期望。</p>
              <p>联系我们</p>
              <p style="text-align: center;">
                Tel:0531-59696636<br/>
                WeChat:feixiang0006963<br/>
                Address:北京市朝阳区京顺路111号<br/>
                世界购物中心
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cc">
        <el-button :plain="true" @click="open2" class="cheng">
          <i class="el-icon-document-copy"></i> 保存
        </el-button>
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
.cheng {
  background-color: rgba(145, 55, 243, 1);
  color: #fff;
}
.cc {
  position: absolute;
  top: 80%;
  left: 45%;
}
.input >>> .el-input__inner {
  border: 0;
  border-bottom: 1px solid #F2F2F2;
  border-radius: 0;
}
.xq {
  display: flex;
  padding: 20px 30px;
  text-align: center;
  margin-top: 10px;
}
.bb > img {
  width: 100%;
}
.xq div img:nth-of-type(2) {
  width: 300px;
  height: 158px;
}
.xq p {
  text-align: left;
  font-family: "思源黑体";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #333333;
  text-align: left;
}
.bb {
  width: 805px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(242, 242, 242, 1);
  border-radius: 6px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  position: relative;
}
.bb>div{
    border-width: 0px;
    width: 785px;
    height: 370px;
    overflow: scroll;
    overflow-x: hidden;
    line-height: 40px;
    float: right;
}
</style>