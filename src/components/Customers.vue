<template>
 <div >
  <Alert style="margin:10px;padding:0;"
    v-if="alert"
   :message="alert"
   
   >
  
   </Alert>
     
  <div id="customers" style=" transform: translateX(-50%); width:1000px;
  margin-left:50%;background:#e4e4e4;padding:10px 20px 20px 20px;" >
     
         <input type="text" class="form-control"
          placeholder="搜搜匹配"
          v-model="filterInput"
          >
     
     <h1 class="page-header">用户管理系统</h1>
     <!-- <keep-alive> -->
        <el-table
       :data="filterBy(tableData,filterInput)"
     
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

        <router-link  :to="'/CustomersDetails/'+scope.row.id">
            <el-button size="mini" type="success">详情</el-button> 
         </router-link>
        
      </template>
    </el-table-column>
  </el-table>
  <!-- </keep-alive> -->
  </div>
   </div> 
</template>

<script>

import Alert from './Alert'
export default {
  name: 'customers',
     data() {
       return {
      tableData: [],
      alert:"",
     filterInput:""
       }
     },
     methods: {
      filterBy(customers,value){
         return customers.filter(function(customer){
           return customer.name.match(value)
         })
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      fetchCustomers(){
        this.$http.get("http://localhost:3000/users")
            .then((response)=>{
              //  console.log(response)
                 this.tableData=response.data
            })
      }
     },

     created() {
       if(this.$route.query.alert){
              this.alert = this.$route.query.alert
       }
         this.fetchCustomers()
     },
     updated() {
         this.fetchCustomers() 
     },
     components:{
       Alert
     },
   
}

</script>

<style scoped>
    .form-control{
      width: 500px;
      height:40px;
    }
</style>