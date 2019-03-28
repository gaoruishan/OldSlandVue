<template>
  <div>
    <div class='container'>
      <div class='search-bar border-bottom'>
        <div class='search-input'>
          <img class='icon-search' src="../../../assets/images/icon/search.png"/>
          <input class="g-font" :autofocus="clicking" placeholder='搜索图书名称' @change="onInputChange"
                 v-model='inputValue'/>
          <img class='icon-delete' @click='onDelete' src="../../../assets/images/book/delete.png"/>
        </div>
        <span @click='onCancel' class='search-cancel g-font'>取消</span>
      </div>

      <!-- 书单列表 -->
      <div v-if="showBook" class='book-list'>
        <div v-for="(item,id) of bookList" :key="id">
          <book-cmp :bookModel="item"/>
        </div>
      </div>
    </div>
    <!-- 历史记录 -->
    <div v-if="!showBook" class='history'>
      <div class='history-tag'>
        <div class='tag'/>
        <span>历史搜索</span>
      </div>
      <div class='history-list'>
        <div v-for="(item,i) of history" :key="i">
          <book-tag-cmp @bindText="bindText" :text="item"/>
        </div>
      </div>
    </div>
    <!-- 加载框 -->
    <mt-spinner class="g-loading-center" v-if="loading" color="#26a2ff"
                type="snake"/>
  </div>
</template>

<script>
  import BookTagCmp from './BookTagCmp'
  import BookCmp from './BookCmp'
  import Http from '../../../Http'
  import LocalStorage from '../../../LocalStorage'

  export default {
    name: "SearchCmp",
    props: {},
    components: {BookTagCmp, BookCmp},
    data() {
      return {
        inputValue: "",
        bookList: [],
        history: [],
        showBook: false,
        loading: false,
        clicking: false
      }
    },
    methods: {
      onDelete() {
        this.inputValue = "";
      },
      bindText(val) {
        this.inputValue = val;
      },
      onCancel() {
        this.$emit("onCancel", false)
      },
      onInputChange() {
        if (this.inputValue) {
          this.loading = this.showBook = true;
          LocalStorage.addHistory(this.inputValue);
          Http.getBookList((res) => {
            console.log(res.books);
            this.bookList = res.books;
            this.loading = false;
          })
        }
      }
    },
    mounted() {
      this.history = LocalStorage.getHistoryList();
      console.log(this.history);
    }
  }
</script>

<style lang="stylus" scoped>

  .container {
    display: flex;
    flex-direction: column;
  }

  .search-bar {
    width: 100%;
    height: 105 * 0.01rem;
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1 * 0.01rem solid #eee;
    border-bottom: 1 * 0.01rem solid #eee;
    z-index: 99;
  }

  .search-input {
    height: 66 * 0.01rem;
    width: 5.2rem;
    border-radius: 33 * 0.01rem;
    display: flex;
    background-color: #f8f8f8;
    flex-direction: row;
    align-items: center;
    padding: 0 20 * 0.01rem;
  }

  .search-input input {
    background-color: #f8f8f8;
  }

  .search-cancel {
    height: 66 * 0.01rem;
    width: 15%;
    border-radius: 35 * 0.01rem;
    border: 1 * 0.01rem solid gainsboro;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-search {
    width: 35 * 0.01rem;
    height: 35 * 0.01rem;
    margin-right: 15 * 0.01rem;
  }

  .icon-delete {
    width: 35 * 0.01rem;
    height: 35 * 0.01rem;
    margin-right: 15 * 0.01rem;
    margin-left: 85 * 0.01rem;
  }

  .book-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin 0.2rem 0
  }

  .history {
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    top: 105 * 0.01rem;
    padding-top: 30 * 0.01rem;
    background-color: white;
  }

  .history-tag {
    display: flex;
    flex-direction: row;
    background-color: white;
  }

  .history-list {
    margin-top: 20 * 0.01rem;
    display: flex;
    flex-direction: row;
    background-color: white;
    flex-wrap: wrap;
  }

  .tag {
    height: 35 * 0.01rem;
    width: 10 * 0.01rem;
    background-color: black;
    margin-left: 30 * 0.01rem;
    margin-right: 20 * 0.01rem;
  }

  .loading-center {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 99;
  }

</style>
