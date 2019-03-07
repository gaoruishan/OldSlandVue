<template>
  <div class='container'>
    <img class='img' :src="image" />
    <img class='img-tag' src="../../../assets/images/classic/movie@tag.png" />
    <span>{{content}}</span>
  </div>
</template>

<script>
    export default {
        name: "MovieCmp",
        props: {
          image: String,
          content: String
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>
  .container {
    display: flex;
    flex-direction: column;
    /* 交叉轴对齐 */
    align-items: center;
    /* 主轴对齐 *//* justify-content: center */
  }

  .img {
    width: 100%;
    height: 500*0.01rem;
  }

  .img-tag {
    width: 46*0.01rem;
    height: 142*0.01rem;
    position: relative;
    bottom: 71*0.01rem;
    right: 260*0.01rem;
  }

  .container span {
    display: block;
    font-size: 36*0.01rem;
    max-width: 550*0.01rem;
    letter-spacing: 3*0.01rem;
  }
</style>
