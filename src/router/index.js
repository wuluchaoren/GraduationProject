import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Buy from '@/pages/buy'
import Goods from '@/pages/goods'
import Switch from '@/pages/switchSchool'
import Apply from '@/pages/apply'
import Test from '@/pages/test'
import Login from '@/pages/login'
import Release from '@/pages/release'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      //首页
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      // 求购
      path:'/buy',
      name:'Buy',
      component: Buy
    },
    {
      // 二手商品
      path:'/goods',
      name:'Goods',
      component:Goods
    },
    {
      // 切换学校
      path:'/switch',
      name:'Switch',
      component:Switch
    },
    {
      // 开通学校
      path:'/apply',
      name:'Apply',
      component:Apply
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      // 发布商品
      path:'/release',
      name:'Release',
      component:Release
    },
    {
      path:'/test',
      name:'Test',
      component:Test
    }
  ]
})
