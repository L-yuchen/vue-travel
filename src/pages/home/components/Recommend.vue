<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
          <img class='item-img' :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
        title: '北京-大阪 6天跟团游',
        desc: '本州6日东京1天自由活动打卡镰仓江之岛'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/9c4697d2-aa47-4618-8400-8bf4840753c7.jpg_r_480x320x90_358e2fe0.jpg',
        title: '北京-大阪 6天跟团游',
        desc: '本州6日东京1天自由活动打卡镰仓江之岛'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '北京-四川成都 6天跟团游',
        desc: '吃火锅 看川剧 随抖音走成都！成都-峨眉山-乐山-都江堰-熊猫乐园古镇6日游'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/p/p22/1809/99/d2c37b3777d68102.jpg_256x160_3ffeabed.jpg',
        title: '北京-上海 6天跟团游',
        desc: '奢享华东♥住乌镇周庄+全程高端酒店♥'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_256x160_3b3b3190.jpg',
        title: '长隆野生动物世界',
        desc: '熊猫三胞胎，与您共享欢乐时光'
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-btn
        line-height: .44rem
        margin-top: .16rem
        margin-top: .2rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
</style>
