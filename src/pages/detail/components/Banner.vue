<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/f76a842c-a042-4a63-a286-1bc25e442f8b.jpg_r_640x420x90_7fd88c4b.jpg"/>
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class='iconfont banner-icon'>&#xe692;</span>39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show='showGallary'
      @close="handleGallaryClose"
      >
      </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['https://img1.qunarzz.com/p/tts6/1701/94/01330ef2603f1a02.jpg', 'http://pic1.win4000.com/pic/a/5e/6aa8d12857.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        font-size: .24rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
