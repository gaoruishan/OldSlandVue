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

  export default {
    name: 'App',
    components: {FadeAnimation},
    data() {
      return {
        // 不缓存页面
        excludePage: ['BookDetail']
      }
    },
    mounted() {
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
      });
      let store = this.$store;

      /*2,调用plus,等plusready后才能直接使用:demo.xx.xxx()*/
      function plusready() {
        console.log('app-plusready');
        // 位置
        plus.geolocation.getCurrentPosition((p) => {
          store.commit('setLatitude', p.coords.latitude)
          store.commit('setLongitude', p.coords.longitude)
          store.commit('setAddresses', p.addresses)
          this.$mui.toast(p.addresses)
        }, function (e) {
          console.log(e.message);
        }, {provider: "baidu"});
      }

      /*引入HTML5+API*/
      if (window.plus) {
        plusready();
      } else {
        document.addEventListener('plusready', plusready, false);
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .app-container {
    background-color white
  }

</style>
