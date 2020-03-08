// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource'
import About from './components/About.vue';
import Add from './components/Add.vue';
import Customers from './components/Customers.vue';
import CustomersDetails from "./components/CustomerDetail.vue"
import Edit from './components/Edit.vue'
import ElementUI from 'element-ui';
import axios from "axios"
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.use(ElementUI);
Vue.prototype.$http = axios;
/* eslint-disable no-new */


//使用路由的设置
const router = new VueRouter({
     mode:"history",
    //  base:_dirname,
     routes:[
        {path:"/",component:Customers},
        {path:"/about",component:About},
        {path:"/add",component:Add},
        {path:"/CustomersDetails/:id",component:CustomersDetails},
        {path:"/Edit/:id",component:Edit},
     ]


})
   
new Vue({
  router,
  template: `
  <div id="app">
      <el-menu  class="el-menu-demo" mode="horizontal" ></el-menu>
      <div class="line"></div>
    <el-menu
      
        class="el-menu-demo"
        mode="horizontal"
        style="height:80px; text-align:center;display:flex;justify-content: space-around;font-size:30px;"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item  style="margin-top:8px;font-size:35px">用户管理系统</el-menu-item>
        <el-menu-item  style="margin-top:8px;">
               <router-link to="/">主页</router-link>
        </el-menu-item>
        <el-menu-item  style="margin-top:8px;">
            <router-link to="/about">关于我们</router-link>
        </el-menu-item>
        <el-menu-item style="margin-top:8px;margin-left:800px;">
        <router-link to="/add">  添加用户</router-link>
      
        </el-menu-item>
      
    </el-menu>
    

     <router-view></router-view>
  </div>
  `
}).$mount("#app")
