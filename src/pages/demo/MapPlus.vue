<template>
  <div class="container">
    <mt-button type="default" @click="showBmap">显示地图</mt-button>
    <mt-button type="default" @click="closeBmap">关闭地图</mt-button>
    <span>{{this.$store.state.addresses}}</span>
    <div id="map" class="map" ref="bmap"></div>
    <div id="div1">
      <p id="p1" draggable="true">拖拽内容1</p>
      <p id="p2" draggable="true">拖拽内容2</p>
      <p id="p3" draggable="true">拖拽内容3</p>
      <p id="p4" draggable="true">拖拽内容4</p>
    </div>
    <div id="div2"></div>
    <div id="div3"></div>
  </div>
</template>

<script>

  export default {
    name: 'MapPlus',
    props: {},
    data() {
      return {}
    },
    methods: {
      showBmap() {
        this.$mui.ready(() => {
          let map = new plus.maps.Map("map");
          map.centerAndZoom(new plus.maps.Point(this.$store.state.longitude, this.$store.state.latitude), 12);
          map.show()
        });
      },
      closeBmap() {
        map && (map.close(), map = null);
      }
    },
    created() {
      console.log("MapPlus-created")
    },
    activated() {
      console.log("MapPlus-activated")
    },
    mounted() {
      console.log("MapPlus-mounted");
    }
  }
</script>

<style lang="stylus" scoped>

  .map {
    width 100%
    height 0
    padding-bottom 80%
  }

  * {
    margin: 0;
    padding: 0;
  }

  #div1, #div2, #div3 {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    float: left;
    margin: 10px;
  }

  #div2 {
    border: 1px solid green;
  }

  #div3 {
    border: 1px solid blue;
  }

  p {
    height: 25px;
    background-color: pink;
    line-height: 25px;
    text-align: center;
  }
</style>
