<template>
  <div>
    <div @click='onLikeBook' class="contain">
      <div class='item-head'>
        <span v-if="movie" class='item-type'>电影</span>
        <span v-if="music" class='item-type'>音乐</span>
        <span v-if="essay" class='item-type'>句子</span>
        <like-cmp :like="book.like_status==1" :count="book.fav_nums"/>
      </div>
      <div v-show="movie||essay">
        <img class='item-img' :src='book.image'/>
        <span class='item-text'>{{book.content}}</span>
      </div>
      <div v-show="music" class="item-music">
        <img class='item-img2' :src='book.image'/>
        <div class='item-img-cricle'/>
        <span class='item-text2'>{{book.content}}</span>
      </div>

    </div>
  </div>

</template>

<script>
  import LikeCmp from '../../classic/components/LikeCmp'

  export default {
    name: "MyLikeCmp",
    props: {
      book: Object,
      music: Boolean,
      movie: Boolean,
      essay: Boolean
    },
    components: {LikeCmp},
    data() {
      return {}
    },
    methods: {
      onLikeBook() {
        this.$router.push('/my/mylikedetail/' + this.book.id);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .contain {
    width: 280 * 0.01rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0 .3rem 0 #999;
    justify-content center;
    margin-bottom: 30 * 0.01rem;
  }

  .item-head {
    display: flex;
    flex-direction: row;
    justify-content space-between
    padding: 20 * 0.01rem;
  }

  .item-type {
    width: 80 * 0.01rem;
    height: 40 * 0.01rem;
    border-radius: 2 * 0.01rem;
    background-color: #eee;
    text-align: center;
    line-height 40 * 0.01rem;
    font-size: 26 * 0.01rem;
  }

  .item-img {
    width: 100%;
    height: 200 * 0.01rem;
  }

  .item-music {
    width: 100%;
    display flex
    flex-direction column
    justify-content center
    align-items center
  }

  .item-img2 {
    width: 200 * 0.01rem;
    height: 200 * 0.01rem;
    overflow: hidden;
    border-radius: 100 * 0.01rem;
    margin: 0 auto;
  }

  .item-img-cricle {
    position: relative;
    width: 64 * 0.01rem;
    height: 64 * 0.01rem;
    overflow: hidden;
    // 居中使用margin-top 移动
    margin-top -1.32rem
    border-radius: 32 * 0.01rem;
    background-color: white;
  }

  .item-text {
    position: relative;
    margin: 20 * 0.01rem 10 * 0.01rem;
    font-size: 26 * 0.01rem;
    color: #999;
    letter-spacing: 3 * 0.01rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .item-text2 {
    margin: 1rem 10 * 0.01rem 10 * 0.01rem 20 * 0.01rem;
    font-size: 26 * 0.01rem;
    color: #999;
    letter-spacing: 3 * 0.01rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

</style>
