<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeContent from './components/Content'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeContent
  }
}
</script>
<style></style>
