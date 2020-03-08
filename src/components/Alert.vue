<template>
 <div  class="container">
  <el-alert
        style="height:80px;text-align:center;
        line-height:80px; width:60%;"
        type="success"
        center
        show-icon>
        <div style="margin-bottom:5px;margin-left:5px;">{{message}}</div>
  </el-alert>
 </div>


</template>

<script>


export default {
  name: 'alert',
  props:["message"]
  
}
</script>

<style scoped>
 .container{
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top:200px;
 }


</style>