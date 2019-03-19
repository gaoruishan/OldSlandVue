import Vue from 'vue'
import Router from 'vue-router'
import BookDetail from '@/pages/book/BookDetail'
import Main from '@/pages/Main'
import Plus from '@/pages/demo/Plus'

Vue.use(Router);

export default new Router({
  routes: [
    //  默认直接进入路由
    {path: '/', name: 'Main', component: Main},
    {path: '/book/detail/:id', name: 'BookDetail', component: BookDetail},
    {path: '/demo', name: 'Plus', component: Plus}
  ],
  // 页面切换时滚到顶部
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
