<template>
  <div>
    <el-menu
                :router='true'
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >

            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/chart">
                <i class="el-icon-s-custom"></i>
                <span slot="title">图表</span>
            </el-menu-item>
            <el-menu-item index="/profile">
                <i class="el-icon-s-custom"></i>
                <span slot="title">个人中心</span>
            </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>

</style>
