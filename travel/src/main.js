// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 因为在移动端中，点击事件有300ms的延迟，影响用户体验，采用fastclick可以去除该延迟
import fastClick from 'fastclick'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 初始化css
// styles是assets下styles文件夹的别名
import 'styles/reset.css'
// 解决1px的问题
import 'styles/border.css'
// iconfont
import 'styles/iconfont.css'
// 轮播图插件样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 在body上绑定fastClick
fastClick.attach(document.body)
// 使用轮播图
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
