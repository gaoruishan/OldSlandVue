<template>
  <div>
    <div class="container">
      <!--header布局样式和border-bottom边线-->
      <mt-header class="g-header border-bottom" title="我的书单">
        <router-link to="/" slot="left">
          <mt-button icon="back"/>
        </router-link>
      </mt-header>
      <!--为了撑出一个header高度-->
      <mt-header style="background-color: transparent"/>
      <div class="g-height20"></div>
      <div v-for="(item,idx) of bookList" :key="idx">
        <book-item-cmp :book-model="item" />
      </div>
    </div>
  </div>
</template>

<script>
  import BookItemCmp from './components/BookItemCmp'
  import Http from '../../http'

  export default {
    name: "MyBook",
    props: {},
    components: {BookItemCmp},
    data() {
      return {
        bookList: []
      }
    },
    methods: {
    },
    mounted() {
      Http.getLikeBookList((res) => {
        this.bookList = res
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    width:100%
    height: 100%
    position absolute
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eee;
  }


</style>
