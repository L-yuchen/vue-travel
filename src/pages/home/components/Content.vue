<template>
  <div class='contetns'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page, index) of pages' :key='index'>
        <div class='cont' v-for='item of page' :key='item.id'>
          <div class='cont-img'>
            <img class='cont-img-content' :src="item.imgUrl"/>
          </div>
          <p class="cont-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .contetns >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .contetns
    margin-top: .1rem
    .cont
      height: 0
      position: relative
      overflow: hidden
      float: left
      width: 25%
      padding-bottom: 25%
      .cont-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .cont-img-content
          display: block
          margin: 0 auto
          height: 100%
      .cont-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        color: #333
        text-align: center
        ellipsis()
</style>
