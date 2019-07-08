<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <dir class="content"></dir>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 30rem
</style>
