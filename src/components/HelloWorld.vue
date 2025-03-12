<!-- src/components/HelloWorld.vue -->
<template>
  <el-card class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]">
    <template>z</template>
    <el-form>
      <el-form-item label="count">{{counterStore.count}}</el-form-item>
      <el-form-item label="double">{{counterStore.double}}</el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import {useCounterStore} from '@/store/counter'

const counterStore = useCounterStore();
</script> 
