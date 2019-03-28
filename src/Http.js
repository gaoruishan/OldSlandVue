// 导入axios
import axios from 'axios'
// 导入mui.js
import mui from './assets/mui/js/mui.min'

// 导入测试数据
import classicData from '../static/classic-data'
import bookData from '../static/book-data'
import bookDetail from '../static/book-detail'
import bookCommit from '../static/book-commit'


class Http {
  constructor() {

  }

  /**
   * 加载首页数据
   */
  getClassicData(callBack) {
    this.get('/api/classic-data.json', classicData, callBack);
  }

  /**
   * 获取书单详情
   */
  getDetailInfo(callBack) {
    this.get('/api/book-detail.json', bookDetail, callBack);
  }

  getDetailCommit(callBack) {
    this.get('/api/book-commit.json', bookCommit, callBack);
  }

  /**
   * 加载书单数据
   * @param callBack
   */
  getBookList(callBack) {
    // 延时-测试
    setTimeout(() => {
      this.get('/api/book-data.json', bookData, callBack);
    }, 3000);
  }

  /**
   * get请求获取数据
   * @param url
   * @param testData
   * @param callBack
   */
  get(url, testData, callBack) {
    mui.ready(() => {
      // 返回是否在 5+ App(包括流应用)运行
      if (mui.os.plus) {
        console.log('%s%o', '测试:', testData);
        return testData && callBack(testData);
      }
      axios.get(url)
        .then((res) => {
          console.log('%s%o', '成功:', res);
          res && callBack(res.data);
        })
        .catch((err) => {
          console.log('%s%o', '失败:', err)
        });
    });
  }
}

export default Http = new Http()

