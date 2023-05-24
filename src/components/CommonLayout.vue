<template>
  <!-- <div class="container">
    <CommonHeader />
    <router-view></router-view>
    <CommonFooter />
  </div> -->
  <div class="container">
    <el-container class="zuye">
      <el-header>
        <CommonHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <CommonFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from './CommonHeader.vue';
import CommonFooter from './CommonFooter.vue'
  export default {
    name: 'CommonLayout',
    components:{
      CommonHeader,
      CommonFooter
    }
  }
</script>

<style scoped lang="scss">
// footer{
//     margin-top: 80px;
//     padding: 15px 0;
//     background: #2d2d2d;
//     color: #bbb;
//     box-shadow: 0 -2px 4px 1px rgba(0, 0, 0, 0.5);
// }

.container{
  height: 753.60px;
}
.zuye{
  height: 100%;
}
</style>