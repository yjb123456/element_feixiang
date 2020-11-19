<template>
  <div>
    <Edittop></Edittop>
    <div class="box-boder-pub">
      <div class="steps">
        <el-steps :active="2" simple align-center="true">
          <el-step title="提交订单" icon="none" class="aa"></el-step>
          <el-step title="支付订单" icon="none" class="bb"></el-step>
          <el-step title="学习课程" icon="none" class="cc"></el-step>
          <el-step title="课程结束" icon="none" class="dd"></el-step>
          <el-step title="完成评价" icon="none" class="ee"></el-step>
        </el-steps>
      </div>
      <div class="steps2">
        <img src="../../../assets/C_Carousel_img/8.png" />
        <span>订单状态：学习中</span>
        <el-button size="mini">
          <Dle title="取消订单"></Dle>
        </el-button>
        <el-button size="mini">
          <Dle title="结束订单"></Dle>
        </el-button>
         <el-button size="mini">
          <Dle title="添加备注"></Dle>
        </el-button>
      </div>
      <h4>基本信息:</h4>
      <div class="title-none">
        <div>
          <p>订单编号：2019030102369669</p>
          <p>下单时间：2019-03-01 02：36</p>
          <p>支付方式：微信支付</p>
        </div>
        <div>
          <p>订单状态：待付款</p>
          <p>付款时间：未付款</p>
          <p>赠送积分：24</p>
        </div>
      </div>
      <h4>买家信息:</h4>
      <div class="title-none">
        <div style="flex: 0.5">
          <p>用户微信：Cassy</p>
        </div>
        <div style="flex: 1">
          <p>用户手机：15696996666</p>
        </div>
        <div style="flex: 1">
          <p>用户地区：山东-济南</p>
        </div>
      </div>
      <h4>课程信息:</h4>
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
          <el-table-column prop="val1" label="课程ID"></el-table-column>
          <el-table-column prop="val2" label="课程名称"></el-table-column>
          <el-table-column prop="val3" label="列表图">
            <img :src="tableData[0].val3" />
          </el-table-column>
          <el-table-column prop="val4" label="课程上架"></el-table-column>
          <el-table-column prop="val5" label="报名费（元）"></el-table-column>
        </el-table>
      </div>
      <h4>订单信息:</h4>
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
          <el-table-column prop="val1" label="订单金额"></el-table-column>
          <el-table-column prop="val2" label="优惠券"></el-table-column>
          <el-table-column prop="val3" label="积分优惠"></el-table-column>
          <el-table-column prop="val4" label="实付金额"></el-table-column>
        </el-table>
      </div>
      <h4>订单操作记录:</h4>
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
          <el-table-column prop="val1" label="操作人"></el-table-column>
          <el-table-column prop="val2" label="操作时间"></el-table-column>
          <el-table-column prop="val3" label="操作内容"></el-table-column>
          <el-table-column prop="val4" label="备注" width="300px"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import Edittop from "../../compoents/edit/edittop";
import Dle from "../../compoents/del/Dle";
export default {
  components: {
    Edittop,
    Dle,
  },
  data() {
    return {
      tableData: [
        {
          val1: "20182536",
          val2: "幼儿英语入门课程",
          val3: require("../../../assets/C_Carousel_img/2.png"),
          val4: "上架",
          val5: "256.00",
        },
      ],
      tableData2: [
        {
          val1: "￥2566.00",
          val2: "-￥10.00",
          val3: "-￥10.00",
          val4: "￥2366.00",
        },
      ],
      tableData3: [
        {
          val1: "Daisy",
          val2: "2015-10-23 10:25",
          val3: "无",
          val4: "老客户订单",
        },
      ],
    };
  },
};
</script>
<style scoped>
.cc >>> .el-step__title.is-process{
  color: #fff ;
}
.el-step.is-simple:nth-of-type(3) {
  background-color:#9137F3;
}
.el-step__arrow::before:nth-of-type(1) {
  background: #fff;
}
.cc >>> .el-step__arrow::before {
  background: #fff;
}
.cc >>> .el-step__arrow::after {
  background: #fff;
}
.el-steps--simple {
  padding: 0;
}
.steps {
  display: block;
  width: 800px;
  height: 40px;
  line-height: 40px;
  margin: 10px 0;
}
.steps2 {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.steps2 img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.steps2 span {
  font-family: "思源黑体 Bold", "思源黑体 Regular", "思源黑体";
  font-weight: 700;
  font-style: normal;
  color: #00CC99;
  font-size: 14px;
  margin: 0 20px;
}
.el-button {
  border-color: rgba(145, 55, 243, 1);
  border-radius: 3px;
  color: #9137F3;
  font-size: 13px;
}
.title-none {
  display: flex;
  font-family: "思源黑体 Bold", "思源黑体 Regular", "思源黑体";
  font-weight: 700;
  font-style: normal;
  color: #999999;
  font-size: 14px;
  margin: 10px 0;
}
.title-none > div {
  float: left;
}
.title-none > div p {
  margin: 10px;
}
.title-none2 img {
  width: 100px;
  height: 60px;
}
</style>