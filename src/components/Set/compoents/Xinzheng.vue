<template>
  <div>
    <div class="aa">
      <edit title="新建/编辑角色"></edit>
    </div>
    <div class="box-boder-pub">
      <div>
        <div>
          <el-input v-model="input" placeholder="请填写员工信息  " class="input"></el-input>
        </div>
        <p>角色信息:</p>
        <div class="xq">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="员工姓名：">
              <el-input v-model="formLabelAlign.name" style="width:185px;float:left"></el-input>
            </el-form-item>

            <el-form-item label="描述" style="text-align: left;">
              <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea" style="width:378px"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <p>权限信息:</p>
        <div class="xq">
          <div>
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
          </div>
          <div class="pp">
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox><br>
            </el-checkbox-group>
            <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
              <el-checkbox v-for="city2 in cities2" :label="city" :key="city2">{{city2}}</el-checkbox><br>
            </el-checkbox-group>
            <el-checkbox-group v-model="checkedCities3" @change="handleCheckedCitiesChange2">
              <el-checkbox v-for="city3 in cities3" :label="city" :key="city3">{{city3}}</el-checkbox><br>
            </el-checkbox-group>
            <el-checkbox-group v-model="checkedCities4" @change="handleCheckedCitiesChange2">
              <el-checkbox v-for="city4 in cities4" :label="city" :key="city4">{{city4}}</el-checkbox><br>
            </el-checkbox-group>
          </div>
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
const cityOptions = ["经营概况", "待办事项", "收入趋势"];
const cityOptions2 = ["查看", "新增", "编辑", "批量删除", "导出", "搜索"];
const cityOptions3 = ["查看", "新增", "编辑", "导出", "搜索"];
const cityOptions4 = ["查看", "新增", "编辑", "批量删除", "导出", "搜索"];
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
      checkAll: false,
      checkedCities: [],
      checkedCities2: [],
      cities: cityOptions,
      cities2: cityOptions2,
      cities3: cityOptions3,
      cities4: cityOptions4,
      isIndeterminate: true,
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
      this.$router.go(-1);
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    handleCheckedCitiesChange2(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities2.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities2.length;
    },
  },
};
</script>
<style scoped>
.pp{
    float: left;
    width: 500px;
}
.pp>div{
    float: left;
}
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
  top: 90%;
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