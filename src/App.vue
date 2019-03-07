<template>
  <div class="app-container">
    <!--缓存,exclude:去除指定页面-->
    <keep-alive :exclude="excludePage">
      <!--当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        excludePage: ['Detail']
      }
    },
    created() {
      this.$mui.ready(() => {
        this.$mui.init({});
        // console.log('%s%o', 'log:', plus.webview.currentWebview().getURL())
        // this.$mui('.mui-card')[0].addEventListener('tap',function () {
        //   console.log('dianji')
        // })
        if (this.$mui.os.ios) {
          this.$mui.toast('ios系统')
        }
        if (this.$mui.os.android) {
          this.$mui.toast('android系统')
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>

  .app-container {
    background-color white
  }

</style>
