<template>
  <div id="home">
    <el-container style="height: 100%; border: 1px solid #eee">
      <div width="226px">
        <div class="u128">
          <span>
            <img src="../../assets/hone_img/1.png" alt="#" />
          </span>
          <span>非翔教育</span>
        </div>
        <el-aside width="226px" style="background-color: #fff">
          <el-menu :default-openeds="['1', '3']" class="span-r">
              <el-menu-item index="1" @click="open_c_home">
                <i class="el-icon-s-home cor"></i>
                <span >首页</span>
              </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-order cor"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                 <el-menu-item @click="open_c_Carousel">轮播图管理</el-menu-item>
                 <el-menu-item @click="open_c_course">课程管理</el-menu-item>
                 <el-menu-item>教育头条</el-menu-item>
                 <el-menu-item>活动列表</el-menu-item>
                 <el-menu-item>明星教师</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="1">
              <i class="el-icon-document cor"></i>
              <span>订单管理</span>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-user-solid cor"></i>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-service cor"></i>
              <span>用户管理</span>
            </el-menu-item>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-s-tools cor"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">通用设置</el-menu-item>
                <el-menu-item index="2-2">关于我们</el-menu-item>
                <el-menu-item index="2-3">员工管理</el-menu-item>
                <el-menu-item index="2-4">角色管理</el-menu-item>
                <el-menu-item index="2-5">操作日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
      </div>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;" class="header-right">
          <el-badge is-dot class="item">
            <i class="el-icon-message-solid" style="font-size: 22px"></i>
          </el-badge>
          <el-avatar style="width:32px;height:32px">
            <img src="../../assets/hone_img/2.png" />
          </el-avatar>
          <strong style="font-size:14px;margin-left:10px">Daisy</strong>
        </el-header>

        <el-main>
          <div class="main-body">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#home {
  width: 100%;
  height: 100%;
  position: fixed;
}
.el-header {
  background-color: #9137f3;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.u128 {
  text-align: center;
  width: 100%;
  height: 70px;
  line-height: 70px;
}
.u128 > span:nth-of-type(1) {
  display: inline-block;
  width: 36px;
  height: 36px;
  background: linear-gradient(
    270deg,
    rgba(204, 153, 255, 1) 0%,
    rgba(204, 153, 255, 1) 0%,
    rgba(145, 55, 243, 1) 100%,
    rgba(145, 55, 243, 1) 100%
  );
  border-radius: 5px;
  text-align: center;
  line-height: 36px;
  margin-right: 20px;
}
.u128 > span:nth-of-type(2) {
  font-family: "思源黑体 Bold", "思源黑体";
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #9137f3;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.cor:before {
  color: #a457f7;
}
.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.el-badge__content.is-fixed {
  top: 19px;
  right: 11px !important;
}
.el-badge__content.is-dot {
  height: 10px;
  width: 10px;
}
.el-badge__content {
  background-color: #ff0000;
  border: 0;
}
.el-main {
   background-color: #F6F6F6
}
.el-menu {
  border-right: 0;
}
.el-menu-item.is-active {
  color: #000;
}
.el-menu-item {
  padding: 0 35px !important;
}
.el-submenu__title {
  padding: 0 35px !important;
}
.span-r span {
  margin-left: 10px;
}
.el-submenu .el-menu-item {
    text-align: center;
}
.main-body {
  margin: 0px;
  background-color: rgba(242, 242, 242, 0.298039215686275);
  background-image: none;
  position: relative;
  left: -0px;
  width: 1140px;
  margin: 0 auto;
  text-align: left;
  height: 100%;
}
</style>

<script>
export default {
  data() {
    // const item = {
    //   date: "2016-05-02",
    //   name: "王小虎",
    //   address: "上海市普陀区金沙江路 1518 弄"
    // };
    return {
      // tableData: Array(20).fill(item)
      title_nav: [
        { title: "首页" },
        {
          title: "文章管理",
          val: ["轮播图管理", "课程管理", "教育头条", "活动列表", "明星教师"]
        },
        {
          title: "订单管理"
        },
        {
          title: "用户管理"
        },
        {
          title: "财务管理"
        },
        {
          title: "系统服务"
        },
        {
          title: "设置",
          val: ["通用设置", "关于我们", "员工管理", "角色管理", "操作日志"]
        }
      ]
    };
  },
  methods:{
    open_c_home(){
       this.$router.push({ name: "c_home"})
    },
    open_c_Carousel(){
       this.$router.push({ name: "c_Carousel"})
    },
    open_c_course(){
       this.$router.push({ name: "c_course"})
    }
  }
};
</script>