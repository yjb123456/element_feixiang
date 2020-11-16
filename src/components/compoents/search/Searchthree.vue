<template>
  <div id="box">
    <div>
      <div>
        <span>{{span}}:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        <span>输入搜索：</span>
        <el-input v-model="input" placeholder="请输入内容" class="input-wid"></el-input>
      </div>
    </div>
    <div>
      <div>
        <span>员工状态</span>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="启用"></el-checkbox>
          <el-checkbox label="停用"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div style=" margin-left: 80px;">
        <el-button type="primary" class="but-cor">
          <i class="el-icon-upload2"></i>筛选
        </el-button>
        <el-link :underline="false" style="color:#9137F3">清空筛选条件</el-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    input: {
      type: String,
      default: "请输入内容",
    },
    span: {
      type: String,
      default: "列表",
    },
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
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      checkList: ["选中且禁用", "复选框 A"],
    };
  },
};
</script>
<style scoped>
#box {
  margin: 10px 0;
}
#box > div > div {
  margin-right: 30px;
  display: flex;
  align-items: center;
}
#box > div {
  display: flex;
  margin: 20px 0;
  font-size: 14px;
}

#box > div span {
  width: 85px;
  text-align: left;
}
.but-cor {
  background-color: #9137F3;
}
.el-link.el-link--default {
  margin-left: 20px;
}
.input-wid {
  width: 217px;
}
</style>