<template>
  <div class="container">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-link to="/demo/scroller">
      <mt-button type="danger">toNewPage</mt-button>
    </router-link>
    <!--相机/相册-->
    <camera-plus/>
    <!--地图-原生-->
    <map-plus/>
    <!--地图-web-->
    <map-html/>
    <!--无限旋转-->
    <rotate-anim/>
  </div>
</template>

<script>
  import CameraPlus from './CameraPlus'
  import MapPlus from './MapPlus'
  import MapHtml from './MapHtml'
  import RotateAnim from './RotateAnim'

  export default {
    name: "Plus",
    components: {MapHtml, MapPlus, CameraPlus,RotateAnim},
    props: {},
    comments: {
      CameraPlus,
      MapPlus,
      MapHtml
    },
    data() {
      return {}
    },
    methods: {},

  }
</script>

<style lang="stylus" scoped>

</style>
