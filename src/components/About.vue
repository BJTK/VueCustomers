<template>

 
  <div id="about" class="container">
      <h1>本项目利用了vue.cli3+elementUI结合JsonServer自行服务</h1>
        <h2>主要实现了vue后台项目增，删，改，查功能，适合前端小白学习demo</h2>
       <h3>希望能提供给大家更好的服务，更有用的知识！</h3>
      
       <p>如果大家有更好的学习代码，可以@我，微信：13474878641；</p>
   <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in image" :key="item">
            
              <img :src="item" alt="" class="img">
              
          </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>


export default {
  name: 'about',
   data() {
     return {
         image:[
            "../../static/images/01.jpg",
            "../../static/images/02.jpg",
            "../../static/images/03.jpg",
            "../../static/images/05.jpg",
            "../../static/images/04.jpg"
         ]
     }
   },
   
  
}
</script>

<style scoped>

.img{
  width:100%;
}
.container{
    
    width:900px;
    height:500px;
    margin:200px auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>

