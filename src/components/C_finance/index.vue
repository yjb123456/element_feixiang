  <template>
  <div>
    <Header title="财务管理"></Header>
    <div class="box-boder-pub">
      <div class="title">
        <storng>￥</storng>
        <span style="margin-left:10px">财务统计</span>
        <div class="ding">
          <div>
            订单总额:￥
            <span>322000.00</span>
          </div>
          <div>
            订单总数:￥
            <span>322</span>
          </div>
        </div>
      </div>
      <div></div>
      <div class="title">
        <i class="el-icon-menu"></i>
        <span style="margin-left:10px">筛选</span>
      </div>
      <div class="aa">
        <span>订单状态:</span>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="待支付"></el-checkbox>
          <el-checkbox label="已关闭"></el-checkbox>
          <el-checkbox label="学习中"></el-checkbox>
          <el-checkbox label="已完成"></el-checkbox>
        </el-checkbox-group>
      </div>
       <div class="aa">
        <span>订单分类:</span>
        <el-checkbox-group v-model="checkList2">
          <el-checkbox label="课程订单"></el-checkbox>
          <el-checkbox label="活动订单"></el-checkbox>
        </el-checkbox-group>
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
          :cell-style="{fontSize:'13px',height:'90px'}"
          header-cell-style="background-color: #9137f3;color:#fff; text-align: center;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="va1" label="订单编号" align="center"></el-table-column>
          <el-table-column prop="va2" label="订单分类" align="center"></el-table-column>
          <el-table-column prop="va3" label="标题" align="center"></el-table-column>
          <el-table-column prop="va4" label="订单金额" align="center"></el-table-column>
          <el-table-column prop="va5" label="订单状态" align="center"></el-table-column>
          <el-table-column prop="date" label="下单时间" align="center"></el-table-column>
        </el-table>
      </div>
      <div class="fenye">
        <div></div>
        <div>
          <el-pagination background layout="prev, pager, next" :total="1000">
            <i class="el-icon-document-copy"></i>
          </el-pagination>
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
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        },
        {
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        },{
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        },{
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        },{
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        },{
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        },{
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        },{
          va1: "2019030102369669",
          va2: "课程订单",
          va3: " 幼儿英语课程",
          va4: " ￥2366.00",
          va5: " ￥待支付    ",
          date: "2019-01-25 10:55"
        }
      ],
      multipleSelection: [],
      isclick: 0,
      checkList: ["选中且禁用", "复选框 A"],
      checkList2: ["选中且禁用", "复选框 A"],
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
.ding {
  margin: 20px 0;
}
.ding > div {
  float: left;
  color: #000;
  margin-left: 30px;
}
.ding > div:nth-of-type(1) {
  margin-right: 50px;
}
.ding > div span {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-size: 16px;
  color: #FF0000;
}
.aa {
  display: flex;
  margin:  30px  0;
}
.aa span {
  margin: 0 30px 0 30px;
  font-family: "思源黑体";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #333333;
  text-align: left;
}
</style>