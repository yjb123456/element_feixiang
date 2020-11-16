<template>
  <div>
    <Header title="员工管理"></Header>
    <div class="box-boder-pub">
      <div class="title">
        <i class="el-icon-menu"></i>
        <span style="margin-left:10px">筛选</span>
      </div>
      <Searchthree span="角色"></Searchthree>
    </div>
    <div class="box-boder-pub">
      <div class="title">
        <i class="el-icon-menu"></i>
        <span style="margin-left:10px">员工列表</span>
      </div>
      <div class="title-r">
        <el-button plain>
          <i class="el-icon-circle-plus"></i>新增员工
        </el-button>
      </div>
      <div class="table-box">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :cell-style="{fontSize:'12px',height:'90px'}"
          header-cell-style="background-color: #9127f3;color:#fff; text-align: center;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="va1" label="工号" align="center"></el-table-column>
          <el-table-column prop="va2" label="姓名" align="center" width="150"></el-table-column>
          <el-table-column prop="va3" label="会员手机" align="center"></el-table-column>
          <el-table-column prop="va4" label="角色" align="center" width="150"></el-table-column>
          <el-table-column prop="va5" label="添加时间" align="center"></el-table-column>
          <el-table-column prop="value" label="禁用账户" align="center">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.value" active-color="#13ce66" inactive-color="#E4E4E4"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="left" >
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
        <div><a @click="toggleSelection()">取消选择</a></div>
        <div>
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../components/compoents/Header/Header";
import Searchthree from "../../../components/compoents/search/Searchthree";
export default {
  components: {
    Header,
    Searchthree,
  },
  data() {
    return {
      tableData: [
        {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }, {
          va1: "20190301023",
          va2: "John",
          va3: "18854138769",
          va4: "管理员",
          va5: "2019-01-25 10:55",
        }
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
  float: right;
  margin-right: 10px;
}
</style>