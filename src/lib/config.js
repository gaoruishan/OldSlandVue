/**
 * 定义全局的变量
 * 使用: this.$global.xxx的方式调用
 */

//测试账户
const testAccount = {
  account: "12361@qq.com",
  secret: "a123456112",
  type: 101,
}
// 底部导航高度,单位px
const tabBarHeight = 55
// 空白块 修改底部tabBar遮挡问题
const blockTabBar = {height: tabBarHeight + 'px'}

// 解决input输入框问题,一开始的屏幕高度,减去tabBar高度55
// const fixedHeight = {top: (document.documentElement.clientHeight - tabBarHeight) + 'px'}
let fixedHeight = function () {
  return {top: (document.documentElement.clientHeight - tabBarHeight) + 'px'}
}

//Main.vue页面配置
const mainTabBar = {
  selected: '流行',
  tabBars: [
    {
      name: '流行',
      selectedImg: './static/tab/classic@highlight.png',
      unselectImg: './static/tab/classic.png',
    },
    {
      name: '书单',
      selectedImg: './static/tab/book@highlight.png',
      unselectImg: './static/tab/book.png',
    },
    {
      name: '喜欢',
      selectedImg: './static/tab/my@highlight.png',
      unselectImg: './static/tab/my.png',
    },
  ],
  //是否显示红点
  showRed: false,
}

export default {
  tabBarHeight,
  blockTabBar,
  testAccount,
  mainTabBar,
  fixedHeight,
}
