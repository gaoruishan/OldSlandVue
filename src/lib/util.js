export default {
  /**
   * 检测网络
   * @param online
   * @param offline
   */
  checkNet(online, offline) {
    // 1. 当网络连接到时候  弹出 p 显示网络连接 然后消失
    window.addEventListener('online', function () {
      console.log("网络已连接");
      if (online) {
        online();
      }
    })
    // 2. 当网络断开到时候  弹出 p 显示网络已断开 然后消失
    window.addEventListener('offline', function () {
      console.log("网络断开了")
      if (offline) {
        offline();
      }
    })
  },
  /**
   * 移除网络监听
   */
  removeNet() {
    window.removeEventListener('online', function () {
    });
    window.removeEventListener('offline', function () {
    })
  },
  /**
   * 计算时分秒函数
   * @param time
   * @returns {string}
   */
  formatTime(time) {
    // 计算小时
    // 我们有总的秒 数  计算 小时
    // 1小时 60 * 60  ==  3600
    // 4000 / 3600  = 1
    var h = Math.floor(time / 3600);
    // 计算 分数
    // 我们有总的秒 数  计算 分数
    // 4000 % 3600   = 400 / 60
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 60);
    // 00:00:00
    return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  },
  /**
   *  全屏显示可以是任意元素
   *  H5 API 存在兼容性问题: ie9 + 不同浏览器需要添加不同的前缀 webkit  moz  o  ms
   * @param el
   */
  fullScreen(el) {
    if (el.requestFullScreen) {  // 正常浏览器
      el.requestFullScreen();
    } else if (el.webkitRequestFullScreen) {  // webkit 内核
      el.webkitRequestFullScreen();
    } else if (el.mozRequestFullScreen) {  // moz
      el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {  // ms 微软  这里面有个坑 别掉进去了
      el.msRequestFullscreen(); //  ms 里面这样写msRequestFullscreen()     s是小写的
    } else {   // 欧朋
      el.oRequestFullScreen();
    }
  },
  /**
   * 读取文件text内容,用  <input type="file" name="" id="" />
   * @param input
   * @param callBack
   */
  readFileAsText(input, callBack) {
    //  onchange 当发生改变的时候   下拉菜单 select 也是这个事件
    input.onchange = function () {
      // 1. 选择我们要的文件， 进行 读取  fileReader  文件里面的内容
      // 初始化了一个 reader 对象
      let reader = new FileReader();
      // 2. reader.readAsText(文件对象);
      // 读取 this.files[0] 文件里面的内容
      reader.readAsText(this.files[0]);
      // 3. reader 已经读取完毕 而且读取的内容 存放到了  result里面了
      reader.onload = function () {
        if (callBack) {
          callBack(this.result)
        }
      }
    }
  },
  /**
   * 读取图片缩略图,用  <input type="file" name="" id="" />
   * @param input
   * @param callBack
   */
  readFileAsURL(input, callBack) {
    input.onchange = function () {
      let reader = new FileReader();
      reader.readAsDataURL(this.files[0])
      reader.onload = function () {
        if (callBack) {
          callBack(this.result)
        }
      }
    }
  },
  // 添加window 的resize事件监听
  // window.onresize = () => {
  //   console.log('  window.onresize ')
  // }
}
