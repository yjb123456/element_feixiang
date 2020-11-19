  <template>
  <div>
    <Header title="订单管理"></Header>
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
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部订单" name="first"><Tab1></Tab1></el-tab-pane>
        <el-tab-pane label="待付款" name="second"><Tab2></Tab2></el-tab-pane>
        <el-tab-pane label="学习中" name="third"><Tab3></Tab3></el-tab-pane>
        <el-tab-pane label="已完成" name="fourth"><Tab4></Tab4></el-tab-pane>
        <el-tab-pane label="已关闭" name="aaa"><Tab5></Tab5></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
  <script>
import Header from "../compoents/Header/Header";
import Search from "../compoents/search/Search";
import Tab1 from "./tab/Tab1";
import Tab2 from "./tab/Tab2";
import Tab3 from "./tab/Tab3";
import Tab4 from "./tab/Tab4";
import Tab5 from "./tab/Tab5";
export default {
  components: {
    Header,
    Search,
    Tab1,
    Tab2,
    Tab3,
    Tab4,
    Tab5,
  },
  data() {
    return {
      tableData: [
        {
          date: "201-01-25 10:55",
          name: "Jason",
          address: require("../../assets/C_Carousel_img/4.png"),
          heir: " Daisy",
          zw: "英语外教"
        }
      ],
      multipleSelection: [],
      isclick: 0,
      activeName:'first'
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
          customClass: "myClass"
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
.table-box img {
  width: 50px;
  height: 50px;
}
.el-tabs{
  margin-top: 20px;
}
</style>