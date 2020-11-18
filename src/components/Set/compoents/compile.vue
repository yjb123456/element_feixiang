<template>
  <div>
    <div class="aa">
      <edit></edit>
    </div>
    <div class="box-boder-pub" style="height:689px">
      <div>
        <div>
          <el-input v-model="input" placeholder="请填写员工信息  " class="input"></el-input>
        </div>
        <p>账号信息:</p>
        <div class="xq">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="员工姓名：">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="工号:">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input v-model="formLabelAlign.type" placeholder="请输入6位以上密码,数字或英文"></el-input>
            </el-form-item>

            <el-form-item label="状态" style="text-align: left;">
              <el-switch v-model="value" active-color="#4C59F8" inactive-color="#ff4949" class="vv"></el-switch>
            </el-form-item>
            <el-form-item label="角色:">
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号码:">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="cc">
        <el-button :plain="true" @click="open2" class="cheng">
          <i class="el-icon-document-copy"></i> 保存
        </el-button>
        <el-button class="cheng" @click="quxiao">
          <i class="el-icon-document-copy"></i> 取消
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import edit from "../../compoents/edit/edittop";
export default {
  components: {
    edit,
  },
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      options: [
        {
          value: "选项1",
          label: "管理员",
        },
        {
          value: "选项2",
          label: "客服",
        },
      ],
      value: true,
      value2: "请选择",
      isclick: 0,
    };
  },
  methods: {
    open2() {
      if (this.isclick == 0) {
        this.isclick = 1;
        this.$message({
          message: "加入回收站成功！",
          type: "success",
          offset: "100",
          customClass: "myClass",
        });
        window.setTimeout(() => {
          this.isclick = 0;
        }, 3000);
      }
    },
    quxiao() {
       this.$router.go(-1)
    },
  },
};
</script>
<style scoped>
>>> .el-switch__core {
  width: 60px !important;
}

.aa::after {
  display: block;
  clear: both;
  content: "";
}
.aa {
  margin-bottom: 20px;
}
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
p {
  font-family: "思源黑體 Bold", "思源黑體";
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  margin: 15px;
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
.bb > div {
  border-width: 0px;
  width: 785px;
  height: 370px;
  overflow: scroll;
  overflow-x: hidden;
  line-height: 40px;
  float: right;
}
</style>