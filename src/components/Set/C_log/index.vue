  <template>
  <div>
    <Header title="操作日志"></Header>
    <div class="box-boder-pub">
      <div class="title">
        <i class="el-icon-menu"></i>
        <span style="margin-left:10px">筛选</span>
      </div>
      <Search></Search>
    </div>
    <div class="box-boder-pub">
      <div class="title">
        <i class="el-icon-menu"></i>
        <span style="margin-left:10px">文章列表</span>
      </div>
      <div class="table-box">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :cell-style="{fontSize:'13px'}"
          header-cell-style="color:#000; text-align: center;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="name" label="操作人" align="center"></el-table-column>
          <el-table-column prop="address" label="操作模块" align="center"></el-table-column>
          <el-table-column prop="date" label="操作时间" align="center"></el-table-column>
          <el-table-column prop="heir" label="操作内容" align="center"></el-table-column>
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
  </div>
</template>
  <script>
import Header from "../../compoents/Header/Header";
import Search from "../../compoents/search/Search";
export default {
  components: {
    Header,
    Search
  },
  data() {
    return {
      tableData: [
        {
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        },{
          date: "2019-01-25 10:55",
          name: "admin",
          address: "订单管理    ",
          heir: " 确认订单"
        }
      ],
      multipleSelection: [],
      isclick: 0
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
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
          customClass: 'myClass'
        });
        window.setTimeout(() => {
          this.isclick = 0;
        }, 3000);
      }
    }
  }
};
</script>
<style scoped>
.el-button {
  border-color: rgba(145, 55, 243, 1);
  font-size: 12px;
  color: #9137f3;
   width: 107px;
  height: 32px;
  padding: 0;
  margin-top: 5px;
}
</style>