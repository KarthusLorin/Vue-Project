// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 因为在移动端中，点击事件有300ms的延迟，影响用户体验，采用fastclick可以去除该延迟
import fastClick from 'fastclick'
// 初始化css
import './assets/styles/reset.css'
// 解决1px的问题
import './assets/styles/border.css'

Vue.config.productionTip = false
// 在body上绑定fastClick
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
