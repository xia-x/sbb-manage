<template>
  <div class="logo">
   <h1 class="text">f</h1>
   <el-button type="primary" @click="counterstore.increment">count++</el-button>    
   <HelloWorld></HelloWorld>
  </div>

</template>

<script setup lang="ts">
     import HelloWorld from './components/HelloWorld.vue';
     import {useCounterStore} from "./store/counter"
     
     const counterstore = useCounterStore();

</script>

<style scoped lang="scss">
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
} */
//  $color1:red;
//  .text{
//   color: $primaryColor;
//  }
.logo {
    width: 100%;
    // height: $layout-logo-height;
    background-color: $primaryColor;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
