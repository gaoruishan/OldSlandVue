// 导入axios
import axios from 'axios'
import {Base64} from 'js-base64'
import config from './lib/config'

class Http {

  constructor() {
    this._axios = axios.create({
      //  1、process.env.ADMIN_SERVER 是代理的URL。process.env.API是打包的 api 。這句判断是如果 代理没有，那么走后面的。这个是js短路
      baseURL: process.env.API,
      timeout: 10 * 1000, // 请求超时时间设置
      crossDomain: true,
    })
    /**
     * 请求拦截
     */
    this._axios.interceptors.request.use((originConfig) => {
      const reqConfig = {...originConfig}
      /*** step1: 容错处理***/
      if (!reqConfig.url) {
        throw new Error({
          message: 'request need url',
        })
      }
      if (process.env.API) {
        reqConfig.url = reqConfig.url.replace("/api","")
      }
      // 默认使用 get 请求
      if (!reqConfig.method) {
        reqConfig.method = 'get'
      }
      // 大小写容错
      reqConfig.method = reqConfig.method.toLowerCase()
      // 参数容错
      if (reqConfig.method === 'get') {
        if (!reqConfig.params) { // 防止字段用错
          reqConfig.params = reqConfig.data || {}
        }
      }
      if (reqConfig.method === 'post') {
        if (!reqConfig.data) { // 防止字段用错
          reqConfig.data = reqConfig.params || {}
        }
      }
      /*** step2: auth 处理 ***/
      const token = localStorage.getItem('token')
      if (token) {
        reqConfig.headers.Authorization = this._encode()
      }
      return reqConfig
    })
    /**
     * 响应拦截
     */
    this._axios.interceptors.response.use((res) => {
      const {url, method} = res.config
      // 处理 API 异常
      let {code, msg} = res.data

      console.log(url + "  " + method)
      console.log('%s%o', 'response:', res.data)
      if (code === 403) {
        this._refreshToken()
      }
      return res
    })
  }

  /**
   * base64编码
   * @returns {string}
   * @private
   */
  _encode() {
    const token = localStorage.getItem('token')
    return "Basic " + Base64.encode(token + ":")
  }

  //加载首页数据
  getClassicData(callBack) {
    this.get('/api/classic/latest', callBack)
  }

  //前一期
  getPrevious(index, callBack) {
    this.get('/api/classic/' + index + '/previous', callBack)
  }

  //后一期
  getNext(index, callBack) {
    this.get('/api/classic/' + index + '/next', callBack)
  }

  //点赞
  onLike(art_id, type, callBack) {
    this.post('/api/like', {art_id, type,}, callBack)
  }

  //取消点赞
  disLike(art_id, type, callBack) {
    this.post('/api/like/cancel', {art_id, type,}, callBack)
  }

  //获取点赞信息
  getLike(type, cid, callBack) {
    this.get('/api/classic/' + type + "/" + cid + '/favor', callBack)
  }

  //获取书单详情
  getDetailInfo(bid, callBack) {
    this.get('/api/book/' + bid + '/detail', callBack)
  }

  //获取书单短评
  getDetailCommit(bid, callBack) {
    this.get('/api/book/' + bid + '/short_comment', callBack)
  }

  //添加书单短评
  setBookComments(book_id, content, callBack) {
    this.post('/api/book/add/short_comment', {book_id, content,}, callBack)
  }

  // 加载书单数据
  getBookList(callBack) {
    this.get('/api/book/hot_list', callBack)
  }

  //关键字搜索
  getBookSearchList(q, callBack) {
    this.get('/api/book/search?q=' + q, callBack)
  }

  //喜欢的
  getLikeClassicData(callBack) {
    this.get('/api/classic/favor', callBack)
  }

  //喜欢的数量
  getLikeBookCount(callBack) {
    this.get('/api/book/favor/count', callBack)
  }

  //获取我的书单
  getLikeBookList(callBack) {
    this.get('/api/book/favor', callBack)
  }

  getClassicDetail(id, type, callBack) {
    this.get('/api/classic/' + type + "/" + id, callBack)
  }

  /**
   * get请求获取数据
   * @param url
   * @param callBack
   */
  get(url, callBack) {
    this._axios.get(url)
      .then((res) => {
        if (res.data) {
          callBack && callBack(res.data)
        }
      })
      .catch((err) => {
        console.log('%s%o', '失败:', err)
      })
  }

  /**
   * post请求获取数据
   * @param url
   * @param data
   * @param callBack
   */
  post(url, data = {}, callBack) {
    this._axios.post(url, data)
      .then((res) => {
        if (res.data) {
          callBack && callBack(res.data)
        }
      })
      .catch((err) => {
        console.log('%s%o', '失败:', err)
      })
  }

  /**
   * 刷新Token
   * @private
   */
  _refreshToken() {
    //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)
    //AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36
    const ua = navigator.userAgent
    console.log(ua)
    //测试用户:    {"account":"12361@qq.com","secret":"a123456112","type":101}
    this._axios.post('/api/token', config.testAccount
    ).then((res) => {
      if (res.data) {
        localStorage.setItem("token", res.data.token)
      }
    })
  }

}

export default Http = new Http()

