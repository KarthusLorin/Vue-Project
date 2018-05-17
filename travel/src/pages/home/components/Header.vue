<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  // 在CSS中引入webpack中的简写，需要在简写前加一个~，告诉她这是个简写
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      float: left
      width: .64rem
      .back-icon
        text-align center
        font-size: .4rem
    .header-input
      flex: 1
      height .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      float: right
      width: 1.24rem
      text-align: center
      arrow-icon
        margin-left -.04rem
        font-size: .24rem
</style>
