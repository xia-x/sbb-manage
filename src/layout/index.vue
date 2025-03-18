<template>
    <div>
        <!-- 头部区域 -->
        <div class="header">
            <appHeader />
        </div>
        <!-- 左侧导航 -->
        <div class="navbar">
            <appNavbar />
        </div>
        <!-- 右侧区域 -->
        <div class="main">
            <appMain />
        </div>
    </div>
  </template>

<script setup lang="ts">
  import appHeader from '../components/AppHeader.vue'
  import appNavbar from '../components/AppNavber.vue'
  import appMain from '../components/AppMain.vue'


</script>

<style  scoped>
/* 头部 */
.header {
    position: absolute;
    line-height: 50px;
    padding: 0px;
    top: 0px;
    left: 0px;
    right: 0px；;
    background-color: rgb(11, 11, 11);
    width: 100%;
    color: #fff;
    
}
/* 左侧导航 */
.navbar {
    position: absolute;
    width: 230px;
    top: 50px; /* 把上边header的部分让出来 */
    left: 0px;
    bottom: 0px;
    overflow-y: auto; /* 纵坐标滚动条 */
    background-color: rgb(42, 41, 41);
}
/* 右侧主体区域 */
.main {
    position: absolute;
    top: 50px;
    left: 230px; /* 把左边navbar的部分让出来 */
    right: 0px;
    bottom: 0px;
    overflow-y: auto;
    background-color: rgb(248, 247, 248);
}
</style>


