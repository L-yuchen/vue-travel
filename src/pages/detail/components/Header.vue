<template>
  <div>
    <router-link tag="div" to='/' class="header-abs" v-show="showAbs">
      <div class='iconfont header-abs-back'>&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to='/'>
        <div class='iconfont header-fixed-back'>&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 在全局对象绑定事件 可能会出现问题或BUG
    window.addEventListener('scroll', this.handleScroll)
  },
  // 页面即将被隐藏或被替换新的页面的时候,这个组件deactivated会被触发
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    .header-fixed-back
      position: absolute
      width: .64rem
      text-align: center
      font-size: .4rem
      left: 0
      top: 0
      color: #fff
</style>
