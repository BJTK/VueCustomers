<template>
  <div id="about" class="container">
       <div id="customers" style=" transform: translateX(-50%); width:1000px;
  margin-left:50%;
  background:#e4e4e4;padding:10px 20px 20px 20px;" >
          <router-link to="/" >
             <el-page-header ></el-page-header>
          </router-link>
     <h1 class="page-header">用户信息详情</h1>
     <!-- <keep-alive> -->
        <el-table
       :data="tableDatas"
     
    >
    <el-table-column
      label="编号"
      width="200"
       
       >
      <template slot-scope="scope" >
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px; ">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      width="200"
      
   >
      <template slot-scope="scope" >
        <el-popover trigger="hover" placement="top" >
          <p>姓名: {{ scope.row.name }}</p>
          <p>年龄: {{ scope.row.age }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" style="font-size:20px;">{{ scope.row.phone }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="邮箱"
      width="300"
      
   >
      <template slot-scope="scope" >
        <el-popover trigger="hover" placement="top" >
          <p>姓名: {{ scope.row.name }}</p>
          <p>年龄: {{ scope.row.age }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium"  style="font-size:20px;">{{ scope.row.email }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">

        <router-link  :to="'/edit/'+scope.row.id">
            <el-button size="mini" type="warning">编辑</el-button> 
         </router-link>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- </keep-alive> -->
  </div>

  
  </div>
</template>

<script>


export default {
  name: 'customersdetails',
  
  
 
  data() {
      return {
         tableDatas:[]
        
      }
  },
  methods: {
          qq(id){
               this.$http.get("http://localhost:3000/users/"+id)
                .then((response)=>{
                  this.tableDatas.push(response.data) 
               
            })
      },
               handleDelete(index, row) {
                   this.$http.delete("http://localhost:3000/users/"+row.id)
                .then((response)=>{
                  this.$router.push({path:"/",query:{alert:"删除用户"+row.name+"成功!"}})
                 
                })
      }
      
  },
    created() {
    
        this.qq(this.$route.params.id)

    },

  
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