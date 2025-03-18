
<template>
    <!-- <div></div>
    <el-page-header :icon="Expand">
      <template #content>
        <span class="text-large font-600 mr-3"> Title </span>
      </template>
      <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="./page-header.html">route 1</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>route 2</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      
    </el-page-header> -->
  </template>

<script setup lang="ts">
  import {RouteLocationMatched,useRoute} from 'vue-router'

  const currentRoute = useRoute() 
  const breadcrumbs = ref<Array<RouteLocationMatched>>([]);
  console.log('breadcrumbs=',breadcrumbs);
  let matched = currentRoute.matched.filter((item) => item.meta && item.meta.title);
  console.log('matched=',matched);
  
</script>


<style lang="scss" scoped>

   
</style>
