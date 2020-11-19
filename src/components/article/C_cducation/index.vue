  <template>
  <div>
    <Header title="教育头条"></Header>
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
        <el-button plain @click="open">
          <i class="el-icon-circle-plus"></i>新增文章
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
          :cell-style="{fontSize:'13px'}"
          header-cell-style="background-color: #9137f3;color:#fff; text-align: center;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="title" label="标题" align="center"  width="200"></el-table-column>
          <el-table-column prop="tableData.address" label="缩略图" align="center">
            <img :src="tableData[0].address" />
          </el-table-column>
          <el-table-column prop="ms" label="描述" align="center" width="200"></el-table-column>
          <el-table-column prop="heir" label="上传人" align="center"></el-table-column>
          <el-table-column prop="date" label="上传时间" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <a  class="tanchu" @click="open">编辑</a>
            <a @click="open2" class="tanchu">加入回收站</a>
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
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
        },
        {
          date: "201-01-25 10:55",
          address: require("../../../assets/C_Carousel_img/1.png"),
          heir: " Daisy",
          title:"30所京城中小学这样过“世界读书日”",
          ms:"正值4月23日世界读书日，图书日设立目的是推动更多的人去阅读和写作，希望所有人都能尊......"
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
    },open(){
      this.$router.push({path: "/Insert3"})
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