<template>
  <div>
    <Header title="课程管理"></Header>
    <div class="box-boder-pub">
      <div class="title">
        <i class="el-icon-menu"></i>
        <span style="margin-left:10px">筛选</span>
      </div>
      <SearchTow span="课程状态"></SearchTow>
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
          header-cell-style="background-color: #9137f3;color:#fff; text-align: center;"
          :cell-style="{fontSize:'13px'}"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="编号" align="center"></el-table-column>
          <el-table-column prop="kcmc" label="课程名称" align="center"  width="130px"></el-table-column>
          <el-table-column prop="address" label="列表图" align="center"> <img :src="tableData[0].address" /></el-table-column>
          <el-table-column prop="kcsj" label="课程上架" align="center"></el-table-column>
          <el-table-column prop="bmf" label="报名费（元）" align="center"></el-table-column>
          <el-table-column prop="xl" label="销量" align="center"></el-table-column>
          <el-table-column prop="heir" label="上传人" align="center"></el-table-column>
          <el-table-column prop="date" label="上传时间" align="center"  width="130px"></el-table-column>
          <el-table-column label="操作" align="center"  width="150px">
            <a class="tanchu2" >编辑</a>
            <a @click="open2" class="tanchu2" >加入回收站</a>
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
import Header from "../../compoents/Header/Header";
import SearchTow from "../../compoents/search/SearchTow";
export default {
  components: {
    Header,
    SearchTow
  },
  data() {
    return {
      tableData: [
        {
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
        },{
          date: "2019-01.25 10:55",
          name: "20182536",
          address: require("../../../assets/C_Carousel_img/2.png"),
          heir: " Daisy",
          kcmc: "幼儿英语入门课程",
          kcsj: "上架",
          bmf: "256.00",
          xl: "210"
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
</style>