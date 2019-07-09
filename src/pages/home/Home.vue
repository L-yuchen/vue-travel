<template>
  <div>
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-content :list='iconList'></home-content>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeContent from './components/Content'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeContent,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '', // 临时缓存的变量
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfosucc)
    },
    getHomeInfosucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  created () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 当使用keep-alive组件时,会触发一个activated的生命钩子函数,这样就可修改内存里面的内容
  activated () {
    if (this.lastCity !== this.city) {
      // 当这次城市和上一次保存的城市不相等的时候,重新赋值给lastCity,并重新请求一个ajax
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style></style>
