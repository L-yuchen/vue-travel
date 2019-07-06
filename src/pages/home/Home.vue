<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-content></home-content>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeContent from './components/Content'
import HomeRecommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeContent,
    HomeRecommend
  }
}
</script>
<style></style>
