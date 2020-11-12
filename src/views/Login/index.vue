<template>
  <div id="login">
    <div class="centet-box">
      <div>
        <img src="../../assets/login_img/1.png" alt />
      </div>
      <div>
        <h3>登录</h3>
        <p>非翔教育后台管理系统</p>
        <div class="text-center">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="pass">
              <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" class="wid">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#login {
  background: url("../../assets/login_img/bg.png");
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
.centet-box {
  width: 700px;
  height: 406px;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
}
.centet-box > div {
  flex: 1;
}
.centet-box > div:nth-of-type(1) {
  align-self: center;
  text-align: center;
}
.centet-box > div:nth-of-type(2) {
  text-align: center;
  padding: 50px 0;
}
.centet-box > div h3 {
  font-family: "思源黑体 Bold", "思源黑体";
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  color: #9933ff;
}
.centet-box > div p {
  font-family: "思源黑体 Bold", "思源黑体";
  font-weight: 700;
  font-style: normal;
  color: #9933ff;
  font-size: 14px;
}
.text-center{
    width: 90%;
    margin-top: 30px;
    float: left;
    margin-left: -30px;
}
.wid{
    width: 100%;
}
</style>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.ruleForm.pass) {
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>