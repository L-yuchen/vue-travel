<template>
  <div id="app">
    <!-- 路由内容被加载过一次后,就把路由内容放到内存里,等再次渲染这个页面的时候就从内存里调用 -->
    <keep-alive>
      <!-- 显示的是当前路由地址所对应的内容是 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
