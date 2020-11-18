<template>
  <div>
    <a type="primary" class="tanchu" @click="dialogFormVisible = true">{{title}}</a>
    <el-dialog
      :title=title
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      class="ff"
    >
      <p style="margin-bottom:10px">操作备注:</p>
      <el-input type="textarea" :rows="3.5" v-model="textarea"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "删除订单",
    },
  },
};
</script>
<style scoped>
>>> .el-dialog {
  position: relative;
  margin: 0 auto 50px;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 400px;
  text-align: left;
}
</style>