<template>
  <div>
    <Header title="首页"></Header>
    <div class="box-boder">
        <div class="title">
            <span>经营概况</span><i class="el-icon-s-fold" style="margin-left:10px"></i>
        </div>
      <div style="display: flex; margin-top: 30px; height: 100px;justify-content: center;">
        <transition name="el-fade-in-linear">
          <div class="transition-box">
              <img src="../../assets/C-hone/5.png" alt="">
              <p>今日参加活动人数</p>
              <span>18</span>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div class="transition-box">
              <img src="../../assets/C-hone/6.png" alt="">
              <p>今日活动收入</p>
              <span>￥2330.00</span>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div class="transition-box">
              <img src="../../assets/C-hone/5.png" alt="">
              <p>今日课程订单数</p>
              <span>18</span>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div class="transition-box">
              <img src="../../assets/C-hone/6.png" alt="">
              <p>今日课程订单收入</p>
              <span>￥2330.00</span>
          </div>
        </transition>
      </div>
    </div>
     <div class="box-boder">
        <div class="title">
            <span>经营概况</span><i class="el-icon-s-fold" style="margin-left:10px"></i>
        </div>
        <ul class="jj-ul">
            <li><img src="../../assets/C-hone/1.png" alt=""><div><p>12</p><p>待付款订单</p></div></li>
            <li><img src="../../assets/C-hone/2.png" alt=""><div><p>12</p><p>待付款订单</p></div></li>
            <li><img src="../../assets/C-hone/3.png" alt=""><div><p>12</p><p>待付款订单</p></div></li>
        </ul>
    </div>
     <div class="box-boder" style="height:480px">
        <div class="title">
            <span>收入趋势</span><i class="el-icon-s-fold" style="margin-left:10px"></i>
        </div>
        <div><img src="../../assets/C-hone/4.png" alt=""></div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/compoents/Header/Header";
export default {
  components: {
    Header
  }
};
</script>
<style scoped>
.transition-box>p{
    position: absolute;
    right: 10px;
    top: 20px;
    font-family: '思源黑体';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    width: 112px;
    text-align: left;
}
.transition-box>img{
    position: absolute;
    left: 15px;
    top: 25px;
}
.transition-box>span{
    position: absolute;
    right: -20px;
    top: 45px;
    font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
    font-weight: 700;
    font-style: normal;
    font-size: 26px;
    color: #FFFFFF;
    display: inline-block;
    width: 140px;
}
.transition-box:nth-of-type(2)>span,.transition-box:nth-of-type(4)>span{
    font-size: 20px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
  position: relative;
}
.transition-box:nth-of-type(1) {
  background: linear-gradient(
    325deg,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 0, 255, 1) 0%,
    rgba(153, 153, 255, 1) 100%,
    rgba(153, 153, 255, 1) 100%
  );
}
.transition-box:nth-of-type(2) {
  background: linear-gradient(
    325deg,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 102, 153, 1) 0%,
    rgba(255, 204, 153, 1) 100%,
    rgba(255, 204, 153, 1) 100%
  );
}
.transition-box:nth-of-type(3) {
  background: linear-gradient(
    225deg,
    rgba(255, 204, 102, 1) 0%,
    rgba(255, 204, 102, 1) 0%,
    rgba(248, 216, 0, 1) 100%,
    rgba(248, 216, 0, 1) 100%
  );
}
.transition-box:nth-of-type(4) {
  background: linear-gradient(
    225deg,
    rgba(144, 247, 236, 1) 0%,
    rgba(144, 247, 236, 1) 0%,
    rgba(50, 204, 188, 1) 100%,
    rgba(50, 204, 188, 1) 100%
  );
}
.transition-box{
    margin: 0 30px;
}
.box-boder{
    border-width: 0px;
    width: 1100px;
    height: 215px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 1);
    border-radius: 5px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin: 10px 0;
}
.box-boder .title{
    font-family: '思源黑体';
    font-weight: 400;
    font-style: normal;
    color: #666666;
    font-size: 14px;
    margin-left: 20px;
    margin-top: 20px;
}
.jj-ul{
    padding: 30px 50px;
}
.jj-ul li{
    float: left;
    border-right: 1px solid #E4E4E4;
    width: 220px;
    margin-right: 30px;
}
.jj-ul div{
    text-align: center;
    display: inline-block;
    width: 100px;
}
.jj-ul li:last-child{
    border: 0;
}
.jj-ul div p{
    text-align: center;
    width: 100%;
}
.jj-ul div,img{
    vertical-align: middle;
}
.jj-ul div p:nth-of-type(1){
    font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
}
.jj-ul div p:nth-of-type(2){
    color: #666666;
    font-family: '思源黑体';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
}

</style>