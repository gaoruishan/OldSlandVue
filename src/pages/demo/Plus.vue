<template>
  <div class="container">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--相机/相册-->
    <camera-plus/>
    <!--地图-->
    <map-plus/>
  </div>
</template>

<script>
  import CameraPlus from './CameraPlus'
  import MapPlus from './MapPlus'

  export default {
    name: "Plus",
    components: {MapPlus, CameraPlus},
    props: {},
    comments: {
      CameraPlus,
      MapPlus
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
      // 真机-实体返回键,点击不退出程序
      plus.key.addEventListener("backbutton", () => {
        this.$mui.toast('点击实体返回键')
      });
    }
  }
</script>

<style lang="stylus" scoped>

</style>
