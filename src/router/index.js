import Vue from 'vue'
import Router from 'vue-router'
import BookDetail from '@/pages/book/BookDetail'
import Main from '@/pages/Main'
import Course from '@/pages/my/Course'
import About from '@/pages/my/About'
import MyBook from '@/pages/my/MyBook'
import MyLikeDetail from '@/pages/my/MyLikeDetail'
// 测试
import Plus from '@/pages/demo/Plus'
import Scroller from '@/pages/demo/Scroller'

Vue.use(Router);

export default new Router({
  routes: [
    //  默认直接进入路由
    {path: '/', name: 'Main', component: Main},
    {path: '/book/detail/:id', name: 'BookDetail', component: BookDetail},
    {path: '/my/course', name: 'Course', component: Course},
    {path: '/my/about', name: 'About', component: About},
    {path: '/my/mybook', name: 'MyBook', component: MyBook},
    {path: '/my/mylikedetail/:id/:type', name: 'MyLikeDetail', component: MyLikeDetail},
    {path: '/demo', name: 'Plus', component: Plus},
    {path: '/demo/scroller', name: 'Scroller', component: Scroller}
  ],
  // 页面切换时滚到顶部
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
