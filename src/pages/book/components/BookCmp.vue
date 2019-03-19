<template>
  <div @click='toDetail(bookModel.id)' class='container'>
    <img class='img' :src='bookModel.image'/>
    <div class='content'>
      <span class='title'>{{bookModel.title}}</span>
      <span class='text'>{{bookModel.author}}</span>
      <div class='foot'>
        <span class='text'>{{bookModel.fav_nums}}喜欢</span>
        <div class='point'/>
        <span class='text'>{{bookModel.comment}}短评</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BookCmp",
    props: {
      bookModel: Object
    },
    data() {
      return {}
    },
    methods: {
      toDetail(id) {
        this.$router.push('/book/detail/'+id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 .3rem 0 #999;
    margin 0 .3rem .3rem .3rem
  }

  .img {
    width: 250 * 0.01rem;
    height: 360 * 0.01rem;
    bottom: 5 * 0.01rem;
    border-top-right-radius: 5 * 0.01rem;
    border-top-left-radius: 5 * 0.01rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 250 * 0.01rem;
    background-color: white;
    position: absolute;
    bottom: 0 * 0.01rem;
    padding: 20 * 0.01rem;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 28 * 0.01rem;
  }

  .text {
    font-size: 20 * 0.01rem;
    color: #999;
    letter-spacing: 3 * 0.01rem;
  }

  .point {
    width: 5 * 0.01rem;
    height: 5 * 0.01rem;
    border-radius: 50%;
    background-color: gray;
    margin-left: 12 * 0.01rem;
    margin-right: 12 * 0.01rem;
  }

  .foot {
    margin-top: 20 * 0.01rem;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

</style>
