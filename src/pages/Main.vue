<template>
  <div class="app-container">
    <!--内容-->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="tabBars[0].name">
        <main-classic></main-classic>
      </mt-tab-container-item>
      <mt-tab-container-item :id="tabBars[1].name">
        <main-book></main-book>
      </mt-tab-container-item>
      <mt-tab-container-item :id="tabBars[2].name">
        <main-my></main-my>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--底部tabbar-->
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item :id="tabBars[0].name">
        <img slot="icon"
             :src="selected===tabBars[0].name?tabBars[0].selectedImg:tabBars[0].unselectImg">
        {{tabBars[0].name}}
      </mt-tab-item>

      <mt-tab-item :id="tabBars[1].name">
        <img slot="icon"
             :src="selected===tabBars[1].name?tabBars[1].selectedImg:tabBars[1].unselectImg">
        {{tabBars[1].name}}
        <!--按顺序排列:添加小红点-->
        <span slot="icon" v-show="showRed" class="redspot">11</span>
      </mt-tab-item>

      <mt-tab-item :id="tabBars[2].name">
        <img slot="icon"
             :src="selected===tabBars[2].name?tabBars[2].selectedImg:tabBars[2].unselectImg">
        {{tabBars[2].name}}
      </mt-tab-item>
    </mt-tabbar>
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
        selected: '流行',
        tabBars: [
          {
            name: '流行',
            selectedImg: './static/tab/classic@highlight.png',
            unselectImg: './static/tab/classic.png',
          },
          {
            name: '书单',
            selectedImg: './static/tab/book@highlight.png',
            unselectImg: './static/tab/book.png',
          },
          {
            name: '喜欢',
            selectedImg: './static/tab/my@highlight.png',
            unselectImg: './static/tab/my.png',
          },
        ],
        showRed: false
      }
    },
    components: {
      MainClassic,
      MainBook,
      MainMy
    },
    created() {
    },
    methods: {}

  }
</script>

<style lang="stylus" scoped>

  .app-container {
    background-color white
  }

  /*修改底部tabbar遮挡问题*/
  .mint-tab-container {
    margin-bottom: 55px;
  }

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
