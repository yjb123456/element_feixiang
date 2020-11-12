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
</style>



