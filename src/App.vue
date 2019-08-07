<template>
  <fade-animation>
    <div class="app-container">
      <!--缓存,exclude:去除指定页面-->
      <keep-alive :exclude="excludePage">
        <!--当前路由地址所对应的内容-->
        <router-view/>
      </keep-alive>
    </div>
  </fade-animation>
</template>

<script>
  import FadeAnimation from "./common/anim/FadeAnimation";
  import Plus from './lib/plus'
  export default {
    name: 'App',
    components: {FadeAnimation},
    data() {
      return {
        // 不缓存页面
        excludePage: ['BookDetail','MainMy','My']
      }
    },
    created() {
      console.log("app-created")
    },
    mounted() {
      console.log("app-mounted")
      /*1,调用$mui,等ready后再初始化*/
      this.$mui.ready(() => {
        this.$mui.init({});
        // 系统
        if (this.$mui.os.ios) {
          this.$mui.toast('ios系统')
        }
        if (this.$mui.os.android) {
          this.$mui.toast('android系统')
        }
        console.log('%s%o', '是5+ App:', this.$mui.os.plus);
        // 返回是否在 5+ App(包括流应用)运行
        this.$store.state.test = this.$mui.os.plus;
      });

      let store = this.$store;
      /*
      * 2,调用plus,等plusready后才能直接使用:demo.xx.xxx()
      * 引入HTML5+API 等同于this.$mui.plusReady()
      */
      this.$mui.plusReady(() => {
        console.log('app-plusready');
        // 获取位置
        Plus.getBaiDuLocation((p) => {
          store.commit('setLatitude', p.coords.latitude)
          store.commit('setLongitude', p.coords.longitude)
          store.commit('setAddresses', p.addresses)
        });
        Plus.addKeyBackListener();
      });
    }
  }
</script>

<style lang="stylus" scoped>

  .app-container {
    background-color white
  }

</style>
