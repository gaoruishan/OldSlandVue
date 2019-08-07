<template>
  <div>
    <div v-if="!searching" class='container'>
      <!--头部-->
      <div class="book-header g-fixed">
        <div @click='onSearch' class='search-layout'>
          <img class='icon-search' src="../../assets/images/icon/search.png"/>
          <span class='txt-search'>搜索书籍</span>
        </div>
      </div>
      <div class="book-header"/>
      <!--书单内容-->
      <mt-loadmore :auto-fill="false" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                ref="loadmore">
        <div class='book-container'>
          <div class='book-img'>
            <img src="../../assets/images/book/quality.png"/>
          </div>
          <!-- 书单列表 -->
          <div v-for="item in bookList" :key="item.id">
            <book-cmp :bookModel="item"/>
          </div>
          <div style="width: 3.1rem" v-show="(bookList.length%2)===1" />
        </div>
      </mt-loadmore>
      <!--  最后一页 -->
      <span class='ending' v-if="ending">已达最后一页</span>
    </div>
    <!-- 搜索 -->
    <search-cmp @onCancel="onSearch"  v-if="searching"/>
    <!-- 加载框 -->
    <!--<mt-spinner class="g-loading-center" v-if="loading" type="snake"/>-->
  </div>


</template>

<script>
  import BookCmp from './components/BookCmp'
  import SearchCmp from './components/SearchCmp'
  import Http from '../../http'
  import { Indicator } from 'mint-ui';
  export default {
    name: 'MainBook',
    props: {},
    components: {
      BookCmp,SearchCmp
    },
    data() {
      return {
        bookList: [],
        searching: false,
        loading: true,
        loadMore: false,
        total: 0,
        ending: false,
        allLoaded:false
      }
    },
    methods: {
      onCancel() {
        console.log("onCancel")
      },
      onSearch() {
        this.searching = !this.searching
      },
      /**
       * 下拉刷新
       */
      loadTop() {
        Http.getBookList((res) => {
          this.bookList = res.books;
          this.$refs.loadmore.onTopLoaded();
        });
      },
      /**
       * 上拉加载
       */
      loadBottom() {
        setTimeout(() => {
          // this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
        Http.getBookList((res) => {
          this.bookList = this.bookList.concat(res.books);
          // this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        });
      }
    },
    activated() {
      console.log("book-activated")
    },
    mounted() {
      Indicator.open();
      Http.getBookList((res) => {
        this.bookList = res.books;
        this.loading = false;
        Indicator.close();
      });
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
    align-items center
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

  .ending {
    width: 100%;
    font-size: 26 * 0.01rem;
    letter-spacing: 3 * 0.01rem;
    color: #999;
    text-align: center;
  }

</style>
