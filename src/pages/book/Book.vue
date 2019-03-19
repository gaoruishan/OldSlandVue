<template>
  <div>
    <div v-if="!searching" class='container'>
      <div class="book-header">
        <div @click='onSearch' class='search-layout'>
          <img class='icon-search' src="../../assets/images/icon/search.png"/>
          <span class='txt-search'>搜索书籍</span>
        </div>
      </div>
      <div class='book-container'>
        <div class='book-img'>
          <img src="../../assets/images/book/quality.png"/>
        </div>
        <!-- 书单列表 -->
        <div v-for="item in bookList" :key="item.id">
          <book-cmp class="book-cmp" :bookModel="item"/>
        </div>
      </div>
      <!--  最后一页 -->
      <span class='ending' v-if="ending">已达最后一页</span>
    </div>
    <!-- 搜索 -->
    <!--<search-cmp bind:cancel="onSearchCancel" v-if=" searching "/>-->
    <!-- 加载框 -->
    <!--<loading-cmp class="loading-center" v-if=" loading "/>-->
    <!--<loading-cmp class="loading" v-if=" loadMore "/>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import BookCmp from './components/BookCmp'
  import localData from '../../../static/book-data';
  export default {
    name: 'MainBook',
    props: {},
    components: {
      BookCmp
    },
    data() {
      return {
        bookList: [],
        searching: false,
        loading: true,
        loadMore: false,
        total: 0,
        ending: false
      }
    },
    methods: {
      onSearch() {
        this.searching = !this.searching
      },
      getBookList() {
        if (this.$store.state.test) {
          console.log('%s%o', '测试:', localData);
          this.bookList = localData.books;
          return;
        }
        axios.get('/api/book-data.json').then((res) => {
          console.log(res);
          this.bookList = res.data.books
        });
      }
    },
    activated() {
      console.log("book-activated")
    },
    mounted() {
      this.getBookList();
    }
  }
</script>

<style lang="stylus" scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items center
  }

  .book-header {
    width: 100%;
    margin 0 auto
    height: 100 * 0.01rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    position: fixed;
    align-items center
    z-index: 99;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
  }

  .search-layout {
    height: 65 * 0.01rem;
    text-align: center;
    width: 80%;
    background-color: #f8f8f8;
    border-radius: 33 * 0.01rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .icon-search {
    width: 36 * 0.01rem;
    height: 36 * 0.01rem;
  }

  .txt-search {
    font-size: 26 * 0.01rem;
    color: #999;
    letter-spacing: 3 * 0.01rem;
    margin-left: 10 * 0.01rem;
  }

  .book-container {
    margin-top: 100 * 0.01rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content center
  }

  .book-img {
    text-align: center;
    width: 100%;
    margin: 10 * 0.01rem 0;
  }

  .book-img image {
    width: 110 * 0.01rem;
    height: 45 * 0.01rem;
  }

  .book-cmp {

  }

  .ending {
    width: 100%;
    font-size: 26 * 0.01rem;
    letter-spacing: 3 * 0.01rem;
    color: #999;
    text-align: center;
  }

</style>
