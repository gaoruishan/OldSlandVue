<template>
  <!--添加'占位'div,为了防止父组件样式'污染'-->
  <div>
    <div @click='toDetail(bookModel.id,bookModel.type)' class="container">
      <img class='item-image' :src='bookModel.image'/>
      <div class='item-content'>
        <span class='item-title'>{{bookModel.title}}</span>
        <span class='item-name'>{{bookModel.author}}</span>
      </div>
      <img class='item-like' src="../../../assets/images/like/like.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BookItemCmp",
    props: {
      bookModel:Object,
      like: Boolean,
    },
    data() {
      return {}
    },
    methods: {
      toDetail(id,type) {
        this.$router.push('/book/detail/' + id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 640*0.01rem;
    height: 140*0.01rem;
    padding: 20*0.01rem;
    background-color: white;
    border-radius: 10*0.01rem;
    margin-bottom 30*0.01rem
  }

  .item-image {
    height: 110*0.01rem;
    width: 80*0.01rem;
  }

  .item-content {
    margin-left: 30*0.01rem;
    display: flex;
    flex-grow 2
    flex-direction: column;
  }

  .item-name {
    margin-top: 15*0.01rem;
    font-size: 24*0.01rem;
    color: #999;
  }
  .item-like{
    display flex
    width 100%
    flex-direction row-reverse
    justify-content flex-end
    margin-left: 20*0.01rem;
    height: 28*0.01rem;
    width: 32*0.01rem;
  }
</style>
