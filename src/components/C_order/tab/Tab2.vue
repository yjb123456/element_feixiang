<template>
  <div>
    <div class="table-box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        :cell-style="{fontSize:'12px'}"
        header-cell-style="background-color: #9137f3;color:#fff; text-align: center;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="dingdan" label="订单编号" align="center" width="130"></el-table-column>
        <el-table-column prop="name" label="用户微信昵称" align="center"></el-table-column>
        <el-table-column prop="phone" label="用户手机号码" align="center" width="100"></el-table-column>
        <el-table-column prop="kcmc" label="课程名称" align="center" width="135"></el-table-column>
        <el-table-column prop="kcid" label="课程编号" align="center"></el-table-column>
        <el-table-column prop="moeny" label="订单金额（元）" align="center"></el-table-column>
        <el-table-column prop="ddzt" label="订单状态" align="center"></el-table-column>
        <el-table-column prop="date" label="提交时间" align="center" width="150"></el-table-column>
        <el-table-column label="操作" width="160" prop="caozuo">
          <div class="flex">
            <a class="tanchu" style="margin-right:10px" @click="open">查看订单</a>
            <Dle title="删除订单"></Dle>
          </div>
        </el-table-column>
      </el-table>
    </div>
    <div class="fenye">
      <div>
        <a @click="toggleSelection()">取消选择</a>
      </div>
      <div>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import jiaru from "../tab/jiaru";
import Dle from "../../compoents/del/Dle";
export default {
  components: {
    jiaru,
    Dle,
  },
  data() {
    return {
      tableData: [
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
        {
          dingdan: "2019030102369669",
          name: "Cassy",
          phone: "18541263699",
          kcmc: "幼儿英语入门课程",
          kcid: "201920236",
          moeny: "2399.00",
          ddzt: "待付款",
          date: "2019-01-25 10:55",
        },
      ],
      multipleSelection: [],
      isclick: 0,
      flog: true,
      dialogFormVisible: false,
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
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
    open(){
      this.$router.push({path: "/Details",})
    }
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
}
</style>