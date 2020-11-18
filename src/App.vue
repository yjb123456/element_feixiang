<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  position: fixed;
  height: 100%;
}
li {
  list-style: none;
}
.box-boder-pub {
  border-width: 0px;
  width: 1100px;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
  border-radius: 5px;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin: 10px 0;
  padding: 5px 20px;
  position: relative;
 overflow: hidden;
}
.box-boder-pub .title {
  font-family: "思源黑体";
  font-weight: 400;
  font-style: normal;
  color: #999999;
  font-size: 14px;
  margin-top: 20px;
  display: inline-block;
}
a:hover{
  cursor: pointer;
}
.el-icon-circle-plus {
  margin-right: 5px;
  width: 17px;
  font-size: 16px;
  height: 16px;
}
.el-icon-delete-solid {
  margin-right: 5px;
  width: 17px;
  font-size: 16px;
  height: 16px;
}
.fenye > div:nth-of-type(2) {
  float: right;
  margin-right: 20px;
  margin-bottom: 20px;
}
.fenye > div:nth-of-type(1) {
  float: left;
  margin-left: 20px;
  font-size: 14px;
  color: #B5B5B5;
}
.fenye::after {
  display: block;
  clear: both;
  content: "";
}
.table-box {
  margin: 30px 0;
  font-size: 12px;
}
.table-box img {
  width: 97px;
  height: 54px;
}
.tanchu {
  font-size: 12px;
  margin: 0 10px;
  color: #9137F3;
}
.tanchu2 {
  color: #9137F3;
  margin-left:10px ;
}
.box-boder-pub .title-r {
  float: right;
  margin-right: 25px;
  margin-top: 10px;
}
.flex{
  display: flex;
  flex-wrap:wrap;
 
}
</style>



