<template>
  <!--pages/classic/index.wxml-->
  <div class='container'>
    <!-- 头部 -->
    <div class='header'>
      <!-- 日期时间组件 -->
      <date-time-cmp class='date-time' :index="classic.index"/>
      <div class='header-right'>
        <!--点赞组件-->
        <like-cmp @onLikeComp="onLikeComp" :like="classic.like_status==1"
                  :count="classic.fav_nums"/>
        <!--<image-button-cmp class="share-icon" open-type="share">-->
        <img class="share" src="../../assets/images/icon/share.png"/>
        <!--</image-button-cmp>-->
      </div>

    </div>
    <!-- 内容:电影组件,音乐组件,句子组件 -->
    <movie-cmp v-if="classic.type==100" class='movie' :image="classic.image"
               :content="classic.content"/>
    <music-cmp v-if="classic.type==200" class='movie' :src="classic.url" :title="classic.title"
               :image="classic.image" :content="classic.content"/>
    <essay-cmp v-if="classic.type==300" class='movie' :image="classic.image"
               :content="classic.content"/>
    <!-- 导航切换组件 -->
    <div class="navi">
      <navi-cmp @onLeft="onLeft" @onRight="onRight" :last="last" :first="first"
                :title="classic.title"/>
    </div>

  </div>
</template>

<script>
  /**
   获取最新一期
   content：期刊内容
   fav_nums: 点赞次数
   image: 图片
   index: 期号
   like_status: 是否点赞
   pubdate: 发布日期
   title: 期刊题目
   type: 期刊类型,这里的类型分为:100 电影 200 音乐 300 句子
   id: 期刊在数据中序号，供点赞使用

   {
    "content": "人生不能像做菜，把所有的料准备好才下锅",
    "fav_nums": 14,
    "id": 0,
    "image": "http://bl.7yue.pro/images/movie.8.png",
    "index": 7,
    "like_status": 1,
    "pubdate": "2018-06-22",
    "title": "李安<<饮食男女>>",
    "type": 100
  }
   */
  import axios from 'axios'
  import DateTimeCmp from './components/DateTimeCmp'
  import LikeCmp from './components/LikeCmp'
  import MovieCmp from './components/MovieCmp'
  import MusicCmp from './components/MusicCmp'
  import EssayCmp from './components/EssayCmp'
  import NaviCmp from './components/NaviCmp'

  // 导入测试数据
  import localData from '../../../static/classic-data'
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
       * 加载首页数据
       */
      getClassicData() {
        if (this.$store.state.test) {
          console.log('%s%o', '测试:', localData)
          this.resData = localData;
          this.classic = localData[this.index]
          return
        }
        axios.get('/api/classic-data.json')
          .then((res) => {
            console.log(res);
            if (res) {
              this.resData = res.data;
              this.classic = res.data[this.index]
            }
          });
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
      this.getClassicData();
    }
  }
</script>

<style lang="stylus" scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color white
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100 * 0.01rem;
    align-items: center;
    justify-content: space-between;
    border-top: 1 * 0.01rem solid #f5f5f5;
    border-bottom: 1 * 0.01rem solid #f5f5f5;
  }

  .date-time {
    margin-left: 30 * 0.01rem;
  }

  .movie {
    width: 100%;
  }

  .navi {
    width: 100%;
    position fixed
    bottom 2rem
    text-align center
    z-index 99
  }

  .share-icon {
    width: 80 * 0.01rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .share {
    padding: 10 * 0.01rem;
    width: 50 * 0.01rem;
    height: 50 * 0.01rem;
  }

  .header-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

</style>
