<template>
  <div class="app-container">
    <!--内容-->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="tabBars[0]">
        <main-home></main-home>
      </mt-tab-container-item>
      <mt-tab-container-item :id="tabBars[1]">
        <main-shop></main-shop>
      </mt-tab-container-item>
      <mt-tab-container-item :id="tabBars[2]">
        <main-search></main-search>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--底部tabbar-->
    <mt-tabbar fixed="ture" v-model="selected">
      <mt-tab-item :id="tabBars[0]">
        <img slot="icon" v-show="selected===tabBars[0]"
             src="./assets/images/tab/classic@highlight.png">
        <img slot="icon" v-show="selected!==tabBars[0]" src="./assets/images/tab/classic.png">
        {{tabBars[0]}}
      </mt-tab-item>
      <mt-tab-item :id="tabBars[1]">
        <img slot="icon" v-show="selected===tabBars[1]" src="./assets/images/tab/book@highlight.png">
        <img slot="icon" v-show="selected!==tabBars[1]" src="./assets/images/tab/book.png">
        <!--按顺序排列:添加小红点-->
        <span slot="icon" v-show="showRed" class="redspot">11</span>
        {{tabBars[1]}}
      </mt-tab-item>

      <mt-tab-item :id="tabBars[2]">
        <img slot="icon" v-show="selected===tabBars[2]" src="./assets/images/tab/my@highlight.png">
        <img slot="icon" v-show="selected!==tabBars[2]" src="./assets/images/tab/my.png">
        {{tabBars[2]}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import MainHome from './components/home/Home'
  import MainShop from './components/shop/Shop'
  import MainSearch from './components/search/Search'

  export default {
    data() {
      return {
        tabBars: ['流行', '书单', '喜欢'],
        selected: '流行',
        showRed: false
      };
    },
    components: {
      MainHome,
      MainShop,
      MainSearch
    },
    created() {
    },
    methods: {},

  };
</script>


<style scoped>

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
    font-size: 13px;
  }
</style>
