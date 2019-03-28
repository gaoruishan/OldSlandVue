<template>
  <div class="container">
    <div class='head'>
      <img class='head-bg' src='../../assets/images/my/my@bg.png'/>
      <div class='head-avatar'>
        <!--进入demo练习-->
        <router-link class="avatar" to="/demo">
          <img class="avatar" src="../../assets../../assets/images/my/my.png"/>
        </router-link>
        <span v-if="userInfo">{{userInfo.nickName}}</span>
      </div>
      <img @click='onStudy' class='course' src='../../assets/images/my/study.png'/>

      <div class='head-info'>
        <div @click='onAbout' class='about'>
          <img class='head-about' src='../../assets/images/my/about.png'/>
          <span>关于我们</span>
        </div>
        <div @click='onMyBook' class='about'>
          <span class='head-about'>{{12}}</span>
          <span>我的书单</span>
        </div>
      </div>

    </div>
    <img class='like-icon' src='../../assets/images/my/like.png'/>
    <div class='book-list'>
      <div v-for="(item,i) of likeBookList" :key="i">
        <like-book-cmp :book="item" :movie="item.type==100" :music="item.type==200"
                       :essay="item.type==300"/>
      </div>
    </div>
  </div>

</template>

<script>
  import LikeBookCmp from './components/MyLikeCmp'
  import Http from '../../Http'

  export default {
    name: 'MainMy',
    props: {},
    components: {LikeBookCmp},
    data() {
      return {
        about: "",
        userInfo: {},
        likeBookList: []
      }
    },
    methods: {
      onStudy() {
        this.$router.push('/my/course');
      },
      onAbout() {
        this.$router.push('/my/about');
      },
      onMyBook() {
        this.$router.push('/my/mybook');
      },
    },
    mounted() {
      Http.getClassicData((res) => {
        console.log('%s%o', 'my:', res);
        this.likeBookList = res;
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .head-bg {
    width: 100%;
    height: 560 * 0.01rem;
  }

  .head-avatar {
    position: absolute;
    top: 250 * 0.01rem;
    display: flex;
    flex-direction: column;
    width 100%;
    align-items: center;
  }

  .avatar {
    width: 110 * 0.01rem;
    height: 110 * 0.01rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .about {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .head-about {
    margin-bottom: 15 * 0.01rem;
    width: 45 * 0.01rem;
    height: 45 * 0.01rem;
  }

  .head-info {
    position: absolute;
    top: 420 * 0.01rem;
    display: flex;
    width: 100%;
    flex-direction: row;
  }

  .course {
    position: absolute;
    right: 30 * 0.01rem;
    top: 50 * 0.01rem;
    width: 90 * 0.01rem;
    height: 90 * 0.01rem;
  }

  .like-icon {
    position: relative;
    height: 42 * 0.01rem;
    margin: 10 * 0.01rem auto;
    width: 97 * 0.01rem;
  }

  .book-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
