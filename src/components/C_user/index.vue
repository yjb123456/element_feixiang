  <template>
  <div>
    <Header title="用户管理"></Header>
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
      <div class="title-r">
        <el-button plain>
          <i class="el-icon-circle-plus"></i>新增轮播图
        </el-button>
        <el-button plain>
          <i class="el-icon-delete-solid"></i>回收站
        </el-button>
      </div>
      <div class="table-box">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :cell-style="{fontSize:'12px'}"
          header-cell-style="background-color: #9127f3;color:#fff; text-align: center;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="userid" label="用户ID" align="center"></el-table-column>
          <el-table-column prop="name" label="微信昵称" align="center" width="150"></el-table-column>
          <el-table-column prop="phone" label="会员手机" align="center"></el-table-column>
          <el-table-column prop="date" label="注册时间" align="center" width="150"></el-table-column>
          <el-table-column prop="grade" label="会员等级" align="center"></el-table-column>
          <el-table-column prop="top_date" label="上次消费时间" align="center" width="150"></el-table-column>
          <el-table-column prop="value" label="禁用账户" align="center">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.value" active-color="#13ce66" inactive-color="#E4E4E4"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <a class="tanchu">编辑</a>
              <el-popconfirm
                @show="editRow(scope.$index, tableData)"
                trigger="click"
                placement="left"
                visible-arrow="false"
                title="这是一段内容确定删除吗？"
                @onConfirm="delData"
              >
                <el-button slot="reference" class="but-css">删除</el-button>
              </el-popconfirm>
            </template>
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
  </div>
</template>
  <script>
import Header from "../compoents/Header/Header";
import Search from "../compoents/search/Search";
export default {
  components: {
    Header,
    Search,
  },
  data() {
    return {
      tableData: [
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
        {
          date: "2019-01-25 10:55",
          name: "爱吃阿司匹林的喵",
          heir: " Daisy",
          userid: "20182036",
          phone: "18854138769",
          grade: "3",
          top_date: "2019-01-25 10:55",
        },
      ],
      multipleSelection: [],
      isclick: 0,
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
  },
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
.but-css {
  border: 0;
  font-size: 12px;
  color: #9137f3;
  width: 24px;
  height: 16px;
  padding: 0;
  margin-top: 5px;
  display: inline;
}
</style>