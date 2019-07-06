<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
        <div class="item-img-wrapper">
          <img class='item-img' :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/24a5e677b553828ba955c68b6c781799.jpg_r_640x290x70_b8c713cc.jpg',
        title: '北京-大阪 6天跟团游',
        desc: '本州6日东京1天自由活动打卡镰仓江之岛'
      }, {
        id: '0002',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5ee7ce589bc4ac7a95948cd0b2f3af96.jpg_r_640x290x70_3d91f6dd.jpg',
        title: '北京-大阪 6天跟团游',
        desc: '本州6日东京1天自由活动打卡镰仓江之岛'
      }, {
        id: '0003',
        imgUrl: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/2358c86f198bef791f42dccbf2940757.jpg_r_640x290x70_1f0ec69e.jpg',
        title: '北京-四川成都 6天跟团游',
        desc: '吃火锅 看川剧 随抖音走成都！成都-峨眉山-乐山-都江堰-熊猫乐园古镇6日游'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
