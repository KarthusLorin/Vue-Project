import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 异步组件实现按需加载
      component: () => import('@/pages/home/Home')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      // 动态路由:id代表着参数
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/detail')
    }
  ],
  // 跳转页面重置滚动条
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
