<template>
  <div class="container">
    <mt-button type="default" @click="showBmap">显示地图</mt-button>
    <mt-button type="default" @click="closeBmap">关闭地图</mt-button>
    <span>{{this.$store.state.addresses}}</span>
    <div id="map" class="map" ref="bmap"></div>
  </div>
</template>

<script>
  // import BMap from 'BMap'

  export default {
    name: 'MapHtml',
    props: {},
    data() {
      return {}
    },
    methods: {
      initBmap() {
        // 创建Map实例
        let map = new BMap.Map(this.$refs.bmap);
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        // 添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]
        }));
        // 设置地图显示的城市 此项是必须设置的
        map.setCurrentCity("北京");
        // 开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);
        // 点击事件
        map.addEventListener("click", function () {
            let center = map.getCenter();
            // 创建标注
            let point = new BMap.Point(center.lng, center.lat);
            let marker = new BMap.Marker(point);
            map.addOverlay(marker);
            console.log("您点击了地图")
          }
        );
        // 拖动事件
        map.addEventListener("dragend", function () {
            let center = map.getCenter();
            console.log('%s%o', 'log:', "地图中心点变更为：" + center.lng + ", " + center.lat)
          }
        );
        // 1,浏览器定位
        let geolocation = new BMap.Geolocation();
        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        // **此处必须用function 写法***
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            let mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            point = r.point;
            console.log('位置：' + r.point.lng + ',' + r.point.lat);
          } else {
            // 2,IP定位
            let myCity = new BMap.LocalCity();
            myCity.get((result) => {
              let cityName = result.name;
              map.setCenter(cityName);
              // 创建标注
              let point = new BMap.Point(result.center.lng, result.center.lat);
              let marker = new BMap.Marker(point);
              map.addOverlay(marker);
              console.log('%s%o', '您的位置:', result);
              // 3,指定经纬度获取地址, 创建地理编码实例
              let myGeo = new BMap.Geocoder();
              // 根据坐标得到地址描述
              myGeo.getLocation(point, (result) => {
                console.log(result);
                // 4,信息窗的配置信息
                let opts = {
                  width: 250,
                  height: 50,
                  title: "地址：",
                };
                // 创建信息窗口对象
                let infoWindow = new BMap.InfoWindow(result ? result.address : '', opts);
                //开启信息窗口
                map.openInfoWindow(infoWindow, point);
              });
            });
          }
        });
      },
      showBmap() {
        this.initBmap();
      },
      closeBmap() {
      }
    },
    activated() {
      console.log("activated")
    },
    mounted() {
      console.log("mounted");
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
