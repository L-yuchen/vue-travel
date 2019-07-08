import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)
// 路由配置
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  // 每次做路由切换 都让先进入的页面X/Y轴初始位置为0,即每个切换页面都会回到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
