<template>
  <!--添加'占位'div,为了防止父组件样式'污染'-->
  <div>
    <!--header布局样式和border-bottom边线-->
    <mt-header class="g-header border-bottom" title="详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <!--为了撑出一个header高度-->
    <mt-header style="background-color: white"/>
    <!-- 头部 -->
    <div class='head'>
      <!-- 日期时间组件 -->
      <date-time-cmp class='date-time' :index="classic.index"/>
      <div class='header-right'>
        <!--点赞组件-->
        <like-cmp @onLikeComp="onLikeComp" :like="classic.like_status===1"
                  :count="classic.fav_nums"/>
        <img class="share" src="../../assets/images/icon/share.png"/>
      </div>
    </div>
    <!-- 内容:电影组件,音乐组件,句子组件 -->
    <movie-cmp v-if="classic.type===100" :image="classic.image"
               :content="classic.content"/>
    <music-cmp v-if="classic.type===200" :src="classic.url" :title="classic.title"
               :image="classic.image" :content="classic.content"/>
    <essay-cmp v-if="classic.type===300" :image="classic.image"
               :content="classic.content"/>
    <!-- 导航切换组件 -->
    <div class="g-row-center">
      <span class='item-title'>{{ classic.title}}</span>
    </div>

  </div>
</template>

<script>
  import Classic from '../classic/Classic'
  import Http from '../../Http'
  import DateTimeCmp from '../classic/components/DateTimeCmp'
  import LikeCmp from '../classic/components/LikeCmp'
  import MovieCmp from '../classic/components/MovieCmp'
  import MusicCmp from '../classic/components/MusicCmp'
  import EssayCmp from '../classic/components/EssayCmp'

  export default {
    name: "MyLikeDetail",
    props: {},
    components: {
      Classic,
      DateTimeCmp,
      LikeCmp,
      MovieCmp,
      MusicCmp,
      EssayCmp,
    },
    data() {
      return {
        id: 0,
        classic: {}
      }
    },
    methods: {
      onLikeComp(e) {
        console.log(e)
      }
    },
    activated() {
      this.id = parseInt(this.$route.params.id);
      Http.getClassicData((res) => {
        for (const re of res) {
          if (re.id === this.id) {
            this.classic = re;
            break;
          }
        }
      });
    },
    mounted() {

    }
  }
</script>

<style lang="stylus" scoped>

  .head {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100 * 0.01rem;
    align-items: center;
    justify-content: space-between;
    border-top: 1 * 0.01rem solid #f5f5f5;
  }

  .date-time {
    margin-left: 30 * 0.01rem;
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

  .item-title {
    position: relative;
    width: 560 * 0.01rem;
    margin-top 1.2rem
    height: 70 * 0.01rem;
    line-height 70 * 0.01rem
    text-align center
    background-color: #f7f7f7;
    border-radius: 3 * 0.01rem;
  }
</style>
