<template>
  <div class='contetns'>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
    <div class='cont'>
      <div class='cont-img'>
        <img class='cont-img-content' src="https://s.qunarzz.com/homenode/images/touchheader/piao.png"/>
      </div>
      <p class="cont-desc">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .contetns
    height: 0
    overflow: hidden
    padding-bottom: 50%
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
</style>
