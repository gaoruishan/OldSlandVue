<template>
  <div>
    <!--内容-->
    <mt-tab-container v-model="selected">
      <main-classic v-show="tabBars[0].name===selected"/>
      <main-book v-show="tabBars[1].name===selected"/>
      <main-my v-show="tabBars[2].name===selected"/>
    </mt-tab-container>
    <!--底部tabbar-->
    <mt-tabbar fixed :style="tabBarHeight" v-model="selected">
      <mt-tab-item :id="tabBars[0].name">
        <img slot="icon" :src="switchImg(selected,0)">
        {{tabBars[0].name}}
      </mt-tab-item>

      <mt-tab-item :id="tabBars[1].name">
        <img slot="icon" :src="switchImg(selected,1)">
        {{tabBars[1].name}}
        <!--按顺序排列:添加小红点-->
        <span slot="icon" v-show="showRed" class="redspot">11</span>
      </mt-tab-item>

      <mt-tab-item :id="tabBars[2].name">
        <img slot="icon" :src="switchImg(selected,2)">
        {{tabBars[2].name}}
      </mt-tab-item>
    </mt-tabbar>
    <!--空白块 修改底部tabbar遮挡问题-->
    <div :style="blockTabBar"></div>
  </div>
</template>

<script>
  import MainClassic from './classic/Classic'
  import MainBook from './book/Book'
  import MainMy from './my/My'

  export default {
    name: 'App',
    data() {
      return {
        tabBarHeight: this.$global.fixedHeight,
        blockTabBar: this.$global.blockTabBar,
        selected: this.$global.mainTabBar.selected,
        tabBars: this.$global.mainTabBar.tabBars,
        showRed: this.$global.mainTabBar.showRed,
      }
    },
    components: {
      MainClassic,
      MainBook,
      MainMy
    },
    activated() {
      console.log("main-activated")
    },
    mounted() {
      // 添加window 的resize事件监听
      window.onresize = () => {
        console.log('window.onresize')
      }
    },
    methods: {
      switchImg(selected, i) {
        return selected === this.tabBars[i].name ? this.tabBars[i].selectedImg : this.tabBars[i].unselectImg
      }
    }

  }
</script>

<style lang="stylus" scoped>

  /*tabbar默认字体颜色*/
  a {
    color: black;
  }

  /*tabbar默认背景*/
  .mint-tabbar {
    background-color: white;
  }

  /*tabbar选中字体和背景*/
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: white;
    color: #2ac845;
  }

  /*修改选中时padding7px问题*/
  .mint-tab-item {
    margin: 7px 0;
    padding: 0 0;
  }

  /*小红点*/
  .redspot {
    position: relative;
    left: 15px;
    top: -30px;
    width: 20px;
    height: 20px;
    background-color: red;
    color: white;
    border-radius: 10px;
    line-height 20px
    font-size: 13px;
  }
</style>
