<template>
  <div class="container">
    <mt-button type="default" @click="showAlert">showAlert</mt-button>
    <mt-button type="primary" @click="showOS">showOS</mt-button>
    <mt-button type="danger" @click="showCamera">showCamera</mt-button>
    <mt-button type="danger" @click="showGallary">showGallary</mt-button>
    <mt-button type="danger" @click="showGallary2">showGallary2</mt-button>
    <router-link to="/detail">
      <mt-button type="danger">toNewPage</mt-button>
    </router-link>
    <img style="height: 2rem" :src="imgSrc"/>
    <div class="mui-input-row">
      <label>用户名</label>
      <input type="text" class="mui-input-clear font" placeholder="请输入用户名">
    </div>
  </div>

</template>

<script>

  export default {
    name: 'CameraPlus',
    props: {},
    data() {
      return {
        imgSrc: '',
        txt: ''
      }
    },
    methods: {
      showAlert() {
        this.$mui.alert('Hello world!', '温馨提示', 'OK', () => {
          this.$mui.toast('点击OK了')
        })
      },
      showOS() {
        if (this.$mui.os.ios) {
          this.$mui.confirm('ios系统', '标题', ['取消1', "确认1"], (e) => {
            if (e.index === 0) {
              this.$mui.toast('取消', {duration: 'long'});
            } else {
              this.$mui.toast('确认', {duration: 'long'});
            }
          })
        }
        if (this.$mui.os.android) {
          this.$mui.toast('android系统')
        }
      },
      showCamera() {
        // 获取设备默认的摄像头对象
        let cmr = plus.camera.getCamera();
        let res = cmr.supportedImageResolutions[0];
        let fmt = cmr.supportedImageFormats[0];
        this.$mui.toast("Resolution: " + res + ", Format: " + fmt);
        cmr.captureImage((path) => {
            // 通过URL参数获取目录对象或文件对象
            plus.io.resolveLocalFileSystemURL(path, (entry) => {
              //获取目录路径转换为本地路径URL地址
              this.imgSrc = entry.toLocalURL();
              this.$mui.toast("拍照成功 ", {duration: 'long'});
            })
          },
          (error) => {
            this.$mui.toast("拍照失败 " + error.message);
          },
          {resolution: res, format: fmt}
        );
      },
      showGallary() {
        // 从相册中选择图片
        plus.gallery.pick((path) => {
          this.imgSrc = path
          this.$mui.toast(path, {duration: 'long'});
        }, (e) => {
          this.$mui.toast("取消选择图片");
        }, {filter: "image"});
      },
      showGallary2() {
        // 从相册中选择多张图片
        plus.gallery.pick((e) => {
          for (let i in e.files) {
            this.$mui.toast(e.files[i]);
          }
        }, (e) => {
          this.$mui.toast("取消选择图片");
        }, {filter: "image", multiple: true});
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
