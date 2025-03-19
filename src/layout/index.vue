<template>
    <div class="sm-wraps">
        <div class="sm-wraps__navbar">
            <appNavbar />
        </div>
        <div class="sm-wraps__rigth">
      
            <div class="sm-wraps__header">
                <appHeader />
            </div> 
        
            <div class="sm-wraps__main">
                <appMain />
            </div>
        </div>
    </div>
  </template>


  

<script setup lang="ts">
  import appHeader from '@/layout/commponets/AppHeader/index.vue'
  import appNavbar from '@/layout/commponets/AppNavbar/index.vue'
  import appMain from '@/layout/commponets/AppMain/index.vue'


</script>

<style  scoped lang="scss">
  .sm-wraps{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .sm-wraps__navbar{
    width: 300px;
    height: 100%;
    overflow-y: auto; /* 纵坐标滚动条 */
    background-color:$base-menu-background;           
       
  }  
  
  .sm-wraps__rigth{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    .sm-wraps__header{
        background-color: rgb(42, 41, 41);    
        width: 100%;
        height: 80px;
        color: #fff;
          
    }
    .sm-wraps__main{
        width: 100%;
        height: 100%;
        background-color: rgb(248, 247, 248);
    }
  }

</style>


