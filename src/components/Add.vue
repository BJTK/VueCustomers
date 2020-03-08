<template>
 <div style="margin:0;padding:0;">
           <Alert 
                style="margin:0;padding:0;"
                v-if="alert"
                :message="alert"
                >
  
            </Alert>
 
  <div id="add" class="container" style="margin:0;padding:0;">
      <!-- <Alert v-if="Alert" :message="alert"><Alert> -->
       
      <el-form  status-icon  ref="ruleForm"   class="demo-ruleForm" 
      style="width:600px;background:#e4e4e4;padding:20px;
      text-align:center;"
     >
          <h1  style=" color:black;">请添加用户信息:</h1>
            <el-form-item label="姓名"  >
                <el-input type="text" v-model="customers.name"  placeholder="name"></el-input>
            </el-form-item>
            
            <el-form-item label="编号" >
                <el-input type="text" v-model="customers.id"  placeholder="id"></el-input>
            </el-form-item>
            <el-form-item label="年龄" >
                <el-input type="text" v-model="customers.age"  placeholder="age"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" >
                <el-input type="email" v-model=" customers.email" placeholder="email"></el-input>
            </el-form-item>
            <el-form-item label="电话" >
                <el-input type="text" v-model=" customers.phone" placeholder="phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()" >提交</el-button>
            
            </el-form-item>
</el-form>
  </div>
  </div>
</template>

<script>
import Alert from '../components/Alert'

export default {
  name: 'add',
  data() {
      return {
         customers:[

         ],
         alert:""
          
      }
  },
  methods: {
  
        submitForm() {
            if(!this.customers.name || !this.customers.age || !this.customers.email){
                  this.alert="亲！信息不能为空"
            }else{
                let newCustomers={
                    name:this.customers.name,
                    age:this.customers.age,
                    email:this.customers.email,
                    phone:this.customers.phone
                }
                this.$http.post("http://localhost:3000/users",newCustomers)
                   .then((response)=>{
                       this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}})
                   })
                        this.customers=[];     
            }
      },
  },
      
        components:{
            Alert
        }
    

    
}
</script>

<style scoped>
 .container{
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top:100px;
 }


</style>