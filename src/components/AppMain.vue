<template>
    <div>
       <router-view></router-view>
    </div>
</template>


<script setup lang="ts"></script>

<style  scoped>
.el-breadcrumb {
    height: 10px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 5px 5px 2px 0 #888888;
    background-color: #ffffff;
    cursor: pointer;
}
.line {
    border-left: 3px solid rgb(81, 211, 161);
    padding-left: 10px;
}
</style>
