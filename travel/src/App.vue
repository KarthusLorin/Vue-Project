<template>
  <div id="app">
    <!--
      直接无脑使用keep-alive会有问题
      因为每次回到首页需要重新请求
      此时，需要在首页组件中keep-alive的生命周期钩子activated中重新请求
    -->
    <keep-alive>
      <!--显示当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
