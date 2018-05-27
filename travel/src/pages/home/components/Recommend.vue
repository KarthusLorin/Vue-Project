<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!--添加border-bottom即可解决一像素边框问题-->
      <!--直接在ul中添加a标签会有问题，所以需要将tag改为li-->
      <!--:to用于动态绑定路由地址-->
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      /* 解决未定义width的情况下，多余部分省略的问题 */
      min-width: 0
      .item-title
        line-height .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .2rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
