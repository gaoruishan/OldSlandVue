<template>
  <div>
    <div class="container">
      <!--title-->
      <!--需要引入border.css和common.css; header:头部样式; border-bottom:1像素底部边框-->
      <mt-header class="g-header border-bottom" title="详情页">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <!--为了撑出一个header高度-->
      <mt-header/>
      <!-- 头部 -->
      <div class='head'>
        <img class='head-image' :src='bookDetail.image'/>
        <span class='title'>{{bookDetail.title}}</span>
        <span class='author'>{{bookDetail.author!=null?bookDetail.author[0]:''}}</span>
      </div>
      <!-- 评论 -->
      <div class='comments'>
        <span class='comments-title'>短评</span>
        <div class='comment-container'>
          <div v-for="item in comments" :key="item.id">
            <book-tag-cmp :text="item.content" :num="'+'+item.nums"/>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class='content'>
        <span class='comments-title'>内容简介</span>
        <span :decode="true" class='content-text'>{{bookDetail.summary}}</span>
      </div>
      <!-- 书本信息 -->
      <div class='book-info'>
        <span class='comments-title'>书本信息</span>
        <span class='book-info-text'>出版社 {{bookDetail.publisher}}</span>
        <span class='book-info-text'>出版年 {{bookDetail.pubdate}}</span>
        <span class='book-info-text'>页数 {{bookDetail.pages}}</span>
        <span class='book-info-text'>定价 {{bookDetail.price}}</span>
        <span class='book-info-text'>装帧 {{bookDetail.binding}}</span>
      </div>

      <div v-if="clicking" @click='cancelClick' class='g-mask-bg'/>
      <!-- 底部弹框 -->
      <div v-if="clicking" class='bottom-alert'>
        <div class='bottom-btn'>
          <span @click='cancelClick'>取消</span>
        </div>
        <div class='comment-container bottom-comments'>
          <div v-for='(item,i) in comments' :key="i">
            <book-tag-cmp @bindText="bindText" :text="item.content" :num="'+'+item.nums"/>
          </div>
        </div>
      </div>
      <!-- 底部评论 -->
      <div class='bottom border-top'>
        <div class='bottom-left' @click='onInputClick'>
          <img class='bottom-edit' src='../../assets/images/book/edit.png'/>
          <input :autofocus="clicking" :placeholder='input' @change="onInputChange"
                 v-model='inputValue'
                 class='bottom-input'/>
        </div>
        <div class='bottom-right'>
          <!--点赞组件-->
          <like-cmp @onLikeComp="onLikeComp" :like="like_status"
                    :count="fav_nums"/>
          <img class="share" src="../../assets/images/icon/share.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BookTagCmp from './components/BookTagCmp'
  import LikeCmp from '../classic/components/LikeCmp'
  import Http from '../../http'

  export default {
    name: "BookDetail",
    props: {},
    components: {
      BookTagCmp,
      LikeCmp
    },
    data() {
      return {
        id: -1,
        bookDetail: {},
        comments: {},
        input: "留下你的短评~",
        share: "../../../images/icon/share.png",
        clicking: false,
        inputValue: "",
        loading: true,
        like_status:false,
        fav_nums:0,
      }
    },
    computed: {},
    methods: {
      /**
       * 点赞,子组件传递的数据
       * @param like false  true
       */
      onLikeComp(like) {
        console.log(like)
        const art_id = this.bookDetail.id
        const type = this.bookDetail.type
        if (like){
          Http.onLike(art_id, type, (data) => {

          })
        }else{
          Http.disLike(art_id, type, (data) => {

          })
        }
      },
      //点击标签
      bindText(txt) {
        Http.setBookComments(this.bookDetail.id, txt,(data)=>{
          this._addComments(txt)
        })
        this.cancelClick()
      },
      //取消输入弹框
      cancelClick() {
        this.clicking = false;
      },
      onInputClick() {
        this.clicking = !this.clicking;
      },
      onInputChange() {
        if (!this.inputValue) {
          return
        }
        const bid = this.bookDetail.id
        const txt = this.inputValue
        Http.setBookComments(bid, txt,(data)=>{
          this._addComments(txt)
        })
        this.cancelClick()
        this.inputValue = '';
      },
      //数组添加评论
      _addComments(txt) {
        for (let i = 0, l = this.comments.length; i < l; i++) {
          let val = this.comments[i]
          if (val.content === txt) {
            val.nums++
            break
          } else if (i + 1 === l) {
            this.comments.push({
              "content": txt,
              "nums": 1
            })
          }
        }
        //第一次 空需要添加
        if (this.comments.length === 0) {
          this.comments.push({
            "content": txt,
            "nums": 1
          })
        }
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      console.log(this.id);
      Http.getDetailInfo(this.id,(res) => {
        this.bookDetail = res;
        Http.getLike(res.type,res.id,(data)=>{
          this.like_status = data.like_status;
          this.fav_nums = data.fav_nums;
        })
      });
      Http.getDetailCommit(this.id,(res) => {
        this.comments = res.comment;
      });
    }
  }
</script>

<style lang="stylus" scoped>

  .head {
    margin: 50 * 0.01rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .head-image {
    width: 200 * 0.01rem;
    height: 310 * 0.01rem;
    box-shadow: 0 0 3 * 0.01rem 0 #999;
  }

  .title {
    margin-top: 15 * 0.01rem;
    font-size: 38 * 0.01rem;
    font-weight: bold;
    letter-spacing: 3 * 0.01rem;
  }

  .author {
    color: #999;
  }

  .comments {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 24 * 0.01rem solid #eee;
  }

  .comments-title {
    text-align: center;
    font-weight: bold;
    font-size: 34 * 0.01rem;
    margin: 12 * 0.01rem;
  }

  .comment-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 24 * 0.01rem solid #eee;
  }

  .content-text {
    line-height .5rem
    letter-spacing: 4 * 0.01rem;
    text-indent: 50 * 0.01rem;
    color: #999;
    margin: 10 * 0.01rem 60 * 0.01rem 30 * 0.01rem 60 * 0.01rem;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 24 * 0.01rem solid #eee;
    margin-bottom: 90 * 0.01rem;
  }

  .book-info-text {
    line-height .45rem
    letter-spacing: 3 * 0.01rem;
    color: #999;
    margin: 0 * 0.01rem 60 * 0.01rem;
  }

  .bottom-alert {
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    bottom: 85 * 0.01rem;
    z-index: 99;
    border-top: 1 * 0.01rem solid #eee;
    background-color: #fff;
  }

  .bottom-btn {
    height: 80 * 0.01rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1 * 0.01rem solid #eee;
  }

  .bottom-btn span {
    font-size: 32 * 0.01rem;
    padding-right: 20 * 0.01rem;
  }

  .bottom-comments {
    flex-direction: row;
    display: flex;
    margin-top: 20 * 0.01rem;
    align-items: center;
  }

  .bottom {
    flex-direction: row;
    display: inline-flex;
    background-color: #fff;
    position: fixed;
    bottom: 0 * 0.01rem;
    z-index: 99;
    border-top: 1 * 0.01rem solid #eee;
    border-bottom: 1 * 0.01rem solid #eee;
    width: 100%;
    height: 85 * 0.01rem;
    align-items: center;
    justify-content: space-between;
  }

  .bottom-left {
    display: flex;
    align-items: center;
    height: 60 * 0.01rem;
    width: 410 * 0.01rem;
    margin-left: 30 * 0.01rem;
    border: 1 * 0.01rem solid #999;
    border-radius: 30 * 0.01rem;
    padding: 0 * 0.01rem 30 * 0.01rem;
  }

  .bottom-edit {
    height: 30 * 0.01rem;
    width: 30 * 0.01rem;
  }

  .bottom-input {
    width: 260 * 0.01rem;
    height: 40 * 0.01rem;
    margin-left: 10 * 0.01rem;
  }

  .bottom-share {
    height: 36 * 0.01rem;
    margin-left: 20 * 0.01rem;
    margin-right: 20 * 0.01rem;
    width: 36 * 0.01rem;
  }

  .bottom-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .share {
    margin: 0 20 * 0.01rem;
    width: 40 * 0.01rem;
    height: 40 * 0.01rem;
  }

</style>
