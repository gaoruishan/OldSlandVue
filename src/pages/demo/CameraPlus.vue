<template>
  <div class="container">
    <mt-button type="default" @click="showAlert">showAlert</mt-button>
    <mt-button type="primary" @click="showOS">showOS</mt-button>
    <mt-button type="danger" @click="showCamera">showCamera</mt-button>
    <mt-button type="danger" @click="showGallary">showGallary</mt-button>
    <mt-button type="danger" @click="showGallary2">showGallary2</mt-button>
    <img style="height: 2rem" :src="imgSrc"/>
    <div class="mui-input-row">
      <label>用户名</label>
      <input type="text" class="mui-input-clear g-font" placeholder="请输入用户名">
    </div>
  </div>

</template>

<script>
  import Plus from '../../lib/plus'

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
        Plus.openCamera((path) => {
          this.imgSrc = path;
          this.$mui.toast("拍照成功 ", {duration: 'long'});
        });
      },
      showGallary() {
        // 从相册中选择图片
        Plus.openGallery((path) => {
          this.imgSrc = path
        });
      },
      showGallary2() {
        // 从相册中选择多张图片
        Plus.openGalleryMulti((path) => {
          this.imgSrc = path[0]
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
