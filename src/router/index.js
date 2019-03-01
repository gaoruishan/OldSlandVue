import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/components/home/Home'
import MainShop from '@/components/shop/Shop'
import MainSearch from '@/components/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'MainHome',
      component: MainHome
    },
    {
      path: '/shop',
      name: 'MainShop',
      component: MainShop
    },
    {
      path: '/search',
      name: 'MainSearch',
      component: MainSearch
    }
  ]
})
