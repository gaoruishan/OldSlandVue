/**
 * 定义全局的变量
 * 使用: this.$global.xxx的方式调用
 */

// 底部导航高度,单位px
const tabBarHeight = 55;
// 解决input输入框问题,一开始的屏幕高度,减去tabBar高度55
const fixedHeight = {top: (document.documentElement.clientHeight - tabBarHeight) + 'px'};
// 空白块 修改底部tabBar遮挡问题
const blockTabBar = {height: tabBarHeight + 'px'};

export default {
  tabBarHeight,
  fixedHeight,
  blockTabBar
}
