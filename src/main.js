// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由
import router from './router'
// 导入Vuex
import store from './store'
// 导入 Mint-UI 中的组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 导入 MUI 的样式
import './assets/mui/css/mui.min.css'
// 导入扩展图标样式
import './assets/mui/css/icons-extra.css'
// 导入mui.js
import mui from './assets/mui/js/mui.min'
// 在组件中倒是可以通过this.$mui的方式调用
Vue.prototype.$mui = mui;
// 引入reset样式重置
import './lib/reset.css'
// 1像素边框问题
import './lib/border.css'
// 公共样式
import './lib/common.css'
// 全局变量
import config from './lib/config'
// this.$global的方式调用
Vue.prototype.$global = config;

Vue.use(MintUI);
Vue.config.productionTip = false;

//引入bus总线
import VueBus from 'vue-bus';
Vue.use(VueBus);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
