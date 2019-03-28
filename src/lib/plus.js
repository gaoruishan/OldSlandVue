export default {
  read() {
    function plusready() {
      console.log('app-plusready');

    }
    if (window.plus) {
      plusready();
    } else {
      document.addEventListener('plusready', plusready, false);
    }
  },
  /**
   * 打开相机拍照
   * @param callBack
   */
  openCamera(callBack) {
    // 获取设备默认的摄像头对象
    let cmr = plus.camera.getCamera();
    let res = cmr.supportedImageResolutions[0];
    let fmt = cmr.supportedImageFormats[0];
    cmr.captureImage((path) => {
        // 通过URL参数获取目录对象或文件对象
        plus.io.resolveLocalFileSystemURL(path, (entry) => {
          //获取目录路径转换为本地路径URL地址
          callBack && callBack(entry.toLocalURL());
        })
      },
      (error) => {
        console.log('%s%o', '失败:', error.message);
      },
      {resolution: res, format: fmt}
    );
  },
  /**
   * 打开相册-单选
   * @param callBack
   */
  openGallery(callBack) {
    plus.gallery.pick((path) => {
      callBack && callBack(path);
    }, (error) => {
      console.log('%s%o', '失败:', error.message);
    }, {filter: "image"});
  },
  /**
   * 打开相册-多选
   * @param callBack
   */
  openGalleryMulti(callBack) {
    plus.gallery.pick((e) => {
      callBack && callBack(e.files);
    }, (error) => {
      console.log('%s%o', '失败:', error.message);
    }, {filter: "image", multiple: true});
  },
  /**
   * 获取位置信息
   * @param callBack
   */
  getBaiDuLocation(callBack) {
    plus.geolocation.getCurrentPosition((p) => {
      console.log('%s%o', '位置信息:', p);
      localStorage.lat = p.coords.latitude;
      localStorage.lng = p.coords.longitude;
      localStorage.address = p.addresses;
      callBack && callBack(p);
    }, function (error) {
      console.log('%s%o', '失败:', error.message);
    }, {provider: "baidu"});
  },
  /**
   * 添加真机-实体返回键
   */
  addKeyBackListener() {
    // 处理逻辑：1秒内，连续两次按返回键，则退出应用；
    // let first = null;
    plus.key.addEventListener("backbutton", () => {
      // 首次按键，提示 再按一次退出应用
      // if (!first) {
      //   first = new Date().getTime(); // 记录第一次按下回退键的时间
      //   setTimeout(function () {
      //     // 1s中后清除
      //     first = null;
      //   }, 1000);
      // } else {
      //   if (new Date().getTime() - first < 1000) {
      //     //如果两次按下的时间小于1s，
      //     plus.runtime.quit(); //那么就退出app
      //   }
      // }
    });
  }
}
