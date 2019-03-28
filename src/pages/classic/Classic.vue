<template>
  <!--pages/classic/index.wxml-->
    <div class='container'>
      <!-- 头部 -->
      <div class='classic-head'>
        <!-- 日期时间组件 -->
        <date-time-cmp :index="classic.index"/>
        <div class='header-right'>
          <!--点赞组件-->
          <like-cmp @onLikeComp="onLikeComp" :like="classic.like_status==1"
                    :count="classic.fav_nums"/>
          <img class="myshare" src="../../assets/images/icon/share.png"/>
        </div>
      </div>
      <!-- 内容:电影组件,音乐组件,句子组件 -->
      <movie-cmp v-if="classic.type==100" :image="classic.image"
                 :content="classic.content"/>
      <music-cmp v-if="classic.type==200"  :src="classic.url" :title="classic.title"
                 :image="classic.image" :content="classic.content"/>
      <essay-cmp v-if="classic.type==300"  :image="classic.image"
                 :content="classic.content"/>
      <!-- 导航切换组件 -->
      <div class="navi">
        <navi-cmp @onLeft="onLeft" @onRight="onRight" :last="last" :first="first"
                  :title="classic.title"/>
      </div>

    </div>
</template>

<script>

  import DateTimeCmp from './components/DateTimeCmp'
  import LikeCmp from './components/LikeCmp'
  import MovieCmp from './components/MovieCmp'
  import MusicCmp from './components/MusicCmp'
  import EssayCmp from './components/EssayCmp'
  import NaviCmp from './components/NaviCmp'

  import Http from '../../Http'

  export default {
    name: 'MainClassic',
    props: {},
    components: {
      DateTimeCmp,
      LikeCmp,
      MovieCmp,
      MusicCmp,
      EssayCmp,
      NaviCmp
    },
    data() {
      return {
        resData: [],
        classic: {},
        last: true,
        first: false,
        index: 0
      }
    },
    methods: {
      /**
       * 点赞,子组件传递的数据
       * @param e false  true
       */
      onLikeComp(e) {
        console.log(e)
      },
      /**
       * 内部方法,以_开头
       */
      _updateIndex() {
        this.last = (this.index !== (this.resData.length - 1))
        this.first = (this.index !== 0)
      },
      /**
       * 导航向左(子组件传递)
       */
      onLeft() {
        if (this.index > 0) {
          this.index = this.index - 1;
          this.classic = this.resData[this.index]
        }
        this._updateIndex()
      },
      /**
       * 导航向右
       */
      onRight() {
        if (this.index < this.resData.length) {
          this.index = this.index + 1;
          this.classic = this.resData[this.index]
        }
        this._updateIndex()
      },

    },
    mounted() {
      Http.getClassicData((res) => {
        this.resData = res;
        this.classic = res[this.index]
      });
    }
  }
</script>

<style lang="stylus" scoped>

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color white
  }

  .classic-head {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100 * 0.01rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1 * 0.01rem solid #f5f5f5;
  }

  .navi {
    width: 100%;
    position fixed
    bottom 2rem
    text-align center
    z-index 99
  }

  .myshare {
    padding: 10 * 0.01rem;
    width: 60 * 0.01rem;
    height: 50 * 0.01rem;
  }

  .header-right {
    width: 150 * 0.01rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

</style>
