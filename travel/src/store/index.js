import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

/*
  state存放公用数据
  action写异步方法
  mutation写同步对数据的改变
  getter类似于computed，即根据state计算出数据
  module用于对复杂的vuex进行拆分
 */
export default new Vuex.Store({
  state,
  mutations
})
