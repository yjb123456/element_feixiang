<template>
  <div>
    <div class="aa">
      <edit title="用户详情"></edit>
    </div>
    <div class="box-boder-pub">
      <h4>基本信息:</h4>
      <div class="title-none">
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div>
          <p>用户ID：0012639</p>
          <p>会员手机：18854138769</p>
          <p>上次购买时间：2019-01-25 10:55</p>
        </div>
        <div>
          <p>微信昵称：爱吃阿司匹林的喵</p>
          <p>注册时间：2019-01-25 10:55</p>
          <p>
            会员等级：4
            <el-tooltip
              class="item"
              effect="dark"
              content="订单金额每超过1000自动升-级,最高9级,新会员默认为1级会员"
              placement="right-end"
            >
              <a>
                <img src="../../assets/C_Carousel_img/6.png" alt />
              </a>
            </el-tooltip>
          </p>
        </div>
        <div>
          <span>用户备注：</span>
          <el-input type="textarea" :rows="3.5" placeholder="孩子8岁" v-model="textarea"></el-input>
        </div>
      </div>
      <h4>统计信息:</h4>
      <div class="title-none2">
        <el-table
          :data="tableData"
          height="auto"
          border
          style="width: 100%;margin:20px 0"
          header-cell-style="background-color: #9137f3;color:#fff; text-align: center;border:none"
          cell-style="text-align:center;font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
          font-weight: 700;
          font-style: normal;
          font-size: 14px;
          color: #999999;"
        >
          <el-table-column prop="val1" label="消息金额"></el-table-column>
          <el-table-column prop="val2" label="邀请好友"></el-table-column>
          <el-table-column prop="val3" label="优惠券数量"></el-table-column>
          <el-table-column prop="val4" label="积分"></el-table-column>
          <el-table-column prop="val5" label="参加活动次数"></el-table-column>
          <el-table-column prop="val6" label="课程订单数量"></el-table-column>
          <el-table-column prop="date" label="上次登录时间"></el-table-column>
        </el-table>
      </div>
      <h4>课程购买记录:</h4>
      <div class="title-none2">
        <el-table
          :data="tableData2"
          height="auto"
          border
          style="width: 100%;margin:20px 0"
          header-cell-style="background-color: #9137f3;color:#fff; text-align: center;border:none"
          cell-style="text-align:center;font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
          font-weight: 700;
          font-style: normal;
          font-size: 14px;
          color: #999999;"
        >
          <el-table-column prop="val1" label="订单编号"></el-table-column>
          <el-table-column prop="val2" label="课程名称"></el-table-column>
          <el-table-column prop="val3" label="课程编号"></el-table-column>
          <el-table-column prop="val4" label="订单金额(元)"></el-table-column>
          <el-table-column prop="val5" label="订单状态"></el-table-column>
          <el-table-column prop="date" label="提交时间"></el-table-column>
          <el-table-column label="操作" width="180px">
            <el-link type="primary" style="margin-right:10px" @click="open">查看订单</el-link>
            <el-link type="primary" @click="dialogFormVisible = true">取消订单</el-link>
          </el-table-column>
        </el-table>
        <el-dialog title="取消订单" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
           <p style="margin-bottom:10px">操作备注:</p>
          <el-input type="textarea" :rows="3.5"  v-model="textarea"></el-input>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <h4>活动参加记录:</h4>
      <div class="title-none2">
        <el-table
          :data="tableData3"
          height="auto"
          border
          style="width: 100%;margin:20px 0"
          header-cell-style="background-color: #9137f3;color:#fff; text-align: center;border:none"
          cell-style="text-align:center;font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
          font-weight: 700;
          font-style: normal;
          font-size: 14px;
          color: #999999;"
        >
          <el-table-column prop="val1" label="活动名称"></el-table-column>
          <el-table-column prop="val2" label="订单编号"></el-table-column>
          <el-table-column prop="val3" label="孩子姓名"></el-table-column>
          <el-table-column prop="val4" label="联系电话" width="120px"></el-table-column>
          <el-table-column prop="val5" label="年龄"></el-table-column>
          <el-table-column prop="val6" label="报名费"></el-table-column>
          <el-table-column prop="val7" label="订单状态"></el-table-column>
          <el-table-column prop="date" label="支付时间"></el-table-column>
          <el-table-column prop="val8" label="支付方式"></el-table-column>
          <el-table-column label="操作 ">
            <template slot-scope="scope">
              <el-popconfirm
                @show="editRow(scope.$index, tableData)"
                trigger="click"
                placement="left"
                visible-arrow="false"
                title="这是一段内容确定删除吗？"
                @onConfirm="delData"
              >
                <el-button slot="reference" class="but-css">取消报名</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import edit from "../compoents/edit/edittop";
export default {
  components: {
    edit,
  },
  data() {
    return {
      tableData: [
        {
          date: "2019-01-25 10:55",
          val1: "2500",
          val2: "5",
          val3: "5",
          val4: "250",
          val5: "5",
          val6: "5",
        },
      ],
      tableData2: [
        {
          date: "2019-01-25 10:55",
          val1: "20152500",
          val2: "幼儿英语入门课程",
          val3: "2500256",
          val4: "2500.00",
          val5: "待支付",
        },{
          date: "2019-01-25 10:55",
          val1: "20152500",
          val2: "幼儿英语入门课程",
          val3: "2500256",
          val4: "2500.00",
          val5: "待支付",
        }
      ],
      tableData3: [
        {
          date: "2019-01-25 10:55",
          val1: "【小小渔民体验营】",
          val2: "20190203669696",
          val3: "林近信",
          val4: "18854138769",
          val5: "12",
          val6: "36.00",
          val7: "已支付",
          val8: "微信支付",
        },
      ],
      dialogFormVisible: false,
    };
  },
  methods: {
    open(){
      this.$router.push({
        path: "/Details"
      })
    }
  },
};
</script>
<style scoped>
>>>.el-dialog {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 400px;
}
.box-boder-pub {
  padding: 20px;
  margin-top: 20px;
}
.aa::after {
  display: block;
  clear: both;
  content: "";
}
.title-none {
  display: flex;
  font-family: "思源黑体 Bold", "思源黑体 Regular", "思源黑体";
  font-weight: 700;
  font-style: normal;
  color: #999999;
  font-size: 14px;
}
.title-none > div {
  flex: 2;
}
.title-none > div p {
  margin: 10px;
}
.title-none > div:nth-of-type(1) {
  flex: 0.5;
  text-align: right;
  padding-right: 10px;
  padding-top: 25px;
}
img {
  vertical-align: middle;
}
.but-css {
  border: 0;
  font-size: 12px;
  color: #9137f3;
  width: 24px;
  height: 16px;
  padding: 0;
  margin-right: 20px;
  display: inline;
}
</style>