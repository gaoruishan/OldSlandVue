import Vue from 'vue'
import Router from 'vue-router'
import ClassicDetail from '@/pages/detail/ClassicDetail'
import Main from '@/pages/Main'

Vue.use(Router);

export default new Router({
  routes: [
    //  默认直接进入路由
    {path: '/', name: 'Main', component: Main},
    {path: '/detail', name: 'ClassicDetail', component: ClassicDetail}
  ],
  // 页面切换时滚到顶部
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
