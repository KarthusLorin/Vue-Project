import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      // 动态路由:id代表着参数
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 跳转页面重置滚动条
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
