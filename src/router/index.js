import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Buy from '@/pages/buy'
import Goods from '@/pages/goods'
import Switch from '@/pages/switchSchool'
import Apply from '@/pages/apply'
import Test from '@/pages/test'
import Login from '@/pages/login'
import ReleaseGoods from '@/pages/release_goods'
import ReleaseBuy from '@/pages/release_buy'


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
      path:'/release_goods',
      name:'ReleaseGoods',
      component:ReleaseGoods
    },
    {
      // 发布求购
      path:'/release_buy',
      name:'ReleaseBuy',
      component:ReleaseBuy
    },
    {
      path:'/test',
      name:'Test',
      component:Test
    }
  ]
})
