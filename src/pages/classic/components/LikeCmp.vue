<template>
  <div class='container' @click='onLikeComp'>
    <img v-show="likeData" src="../../../assets/images/like/like.png"/>
    <img v-show="!likeData" src="../../../assets/images/like/like@dis.png"/>
    <span>{{countData}}</span>
  </div>
</template>

<script>
  export default {
    name: 'LikeCmp',
    props: {
      like: Boolean,
      count: Number
    },
    data() {
      return {
        likeData: false,
        countData: 0
      }
    },
    watch: {
      like(val) {
        this.likeData = val
      },
      count(val) {
        this.countData = val
      },
    },
    methods: {
      onLikeComp() {
        this.likeData = !this.likeData;
        this.countData = this.likeData ? this.countData + 1 : this.countData - 1
        this.$emit('onLikeComp', this.likeData)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    display: flex;
    flex-direction: row;
    padding: 10 * 0.01rem;
  }

  .container img {
    height: 28 * 0.01rem;
    width: 32 * 0.01rem;
  }

  /* position 浮动; line-height去掉间距*/
  .container span {
    font-size: 24 * 0.01rem;
    position: relative;
    line-height: 24 * 0.01rem;
    left: 6 * 0.01rem;
    bottom: 10 * 0.01rem;
  }
</style>
