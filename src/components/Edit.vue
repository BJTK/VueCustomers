<template>
  <div id="add" class="container">
    <el-form
      status-icon
      ref="ruleForm"
      class="demo-ruleForm"
      style="width:600px;background:#e4e4e4;padding:20px;
      text-align:center;"
    >
      <h1 style=" color:black;">请修改用户信息:</h1>
      <el-form-item label="姓名">
        <el-input type="text" v-model="customers.name" placeholder="name"></el-input>
      </el-form-item>

      <el-form-item label="编号">
        <el-input type="text" v-model="customers.id" placeholder="id"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input type="text" v-model="customers.age" placeholder="age"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input type="email" v-model=" customers.email" placeholder="email"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input type="text" v-model=" customers.phone" placeholder="phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="UpdateSubmitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      customers: {}
    };
  },
  methods: {
    fetchData(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then((response)=> {
          console.log(response);
          this.customers = response.data;
        });
    },
    UpdateSubmitForm() {
      if (
        !this.customers.name ||
        !this.customers.age ||
        !this.customers.email
      ) {
        console.log("不能为空");
      } else {
        let updateCustomers = {
          name: this.customers.name,
          age: this.customers.age,
          email: this.customers.email,
          phone: this.customers.phone
        };
        this.$http.put(
            "http://localhost:3000/users/" + this.$route.params.id,
            updateCustomers
          )
          .then((response)=> {
            this.$router.push({
              path: "/",
              query: { alert: "用户信息更新成功!" }
            });
          });
      }
    }
  },
  created() {
    this.fetchData(this.$route.params.id);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>