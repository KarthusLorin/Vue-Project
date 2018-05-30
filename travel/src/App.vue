<template>
  <div id="app">
    <!--
      直接无脑使用keep-alive会有问题
      因为每次回到首页需要重新请求
      方法一：
      在首页组件中keep-alive的生命周期钩子activated中重新请求
      方法二：
      在keep-alive中的exclude属性中添加不keep-alive的组件
      exclude代表例外组件，值是组件的name
    -->
    <keep-alive exclude="Detail">
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
