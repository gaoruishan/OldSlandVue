<template>
  <div class="container">
    <div @click="initBmap">地图</div>
    <div class="map" ref="bmap"></div>
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
    name: 'MainBook',
    props: {},
    data() {
      return {}
    },
    methods: {
      initBmap() {
      //   // 创建Map实例
      //   let map = new BMap.Map(this.$refs.bmap);
      //   // 初始化地图,设置中心点坐标和地图级别
      //   map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
      //   // 添加地图类型控件
      //   map.addControl(new BMap.MapTypeControl({
      //     mapTypes: [
      //       BMAP_NORMAL_MAP,
      //       BMAP_HYBRID_MAP
      //     ]
      //   }));
      //   // 设置地图显示的城市 此项是必须设置的
      //   map.setCurrentCity("北京");
      //   // 开启鼠标滚轮缩放
      //   map.enableScrollWheelZoom(true);
      //   // 点击事件
      //   map.addEventListener("click", function () {
      //       console.log("您点击了地图")
      //     }
      //   );
      //   // 拖动事件
      //   map.addEventListener("dragend", function () {
      //       let center = map.getCenter();
      //       console.log('%s%o', 'log:', "地图中心点变更为：" + center.lng + ", " + center.lat)
      //     }
      //   );
      //   // 浏览器定位
      //   let geolocation = new BMap.Geolocation();
      //   // 开启SDK辅助定位
      //   geolocation.enableSDKLocation();
      //   geolocation.getCurrentPosition(function (r) {
      //     if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      //       let mk = new BMap.Marker(r.point);
      //       map.addOverlay(mk);
      //       map.panTo(r.point);
      //       console.log('%s%o', 'log:', '您的位置：' + r.point.lng + ',' + r.point.lat);
      //     } else {
      //       let myCity = new BMap.LocalCity();
      //       myCity.get((result) => {
      //         let cityName = result.name;
      //         map.setCenter(cityName);
      //         console.log('%s%o', 'log:', "当前定位城市:" + cityName);
      //       });
      //     }
      //   });
      },
      // initDrag() {
      //   // 1. 我们有很多盒子， 那个需要拖放 就 给这个盒子设置 可拖放效果 draggable="true"
      //   // 2. 找到源文件 设置拖拽效果
      //   // (1)ondragstart：源对象开始被拖动
      //   // var p = document.querySelector("#p1");
      //   var obj = null;  //用于存放我们拖放对象 源对象
      //   document.ondragstart = function (event) {
      //     console.log("源对象开始被拖动");
      //     // event.target  事件对象里面的事件目标
      //     console.log(event.target.id);
      //     obj = event.target;  //把当前对象给 obj 然后追加到 新目标对象里面就阔以了
      //
      //     // (2)ondragend：源对象被拖动结束
      //     document.ondragend = function () {
      //       console.log("源对象被拖动结束");
      //     }
      //     // 3. 找到目标对象  设置 释放效果  onmouseenter   onmouseover
      //     // var target = document.querySelector("#div2");
      //     //  (1)ondragenter：目标对象被源对象拖动着进入
      //     document.ondragenter = function (event) {
      //       console.log("目标对象被源对象拖动着进入");
      //       console.log(event.target);
      //     }
      //     // (2)ondragover：目标对象被源对象拖动着悬停在上方
      //     document.ondragover = function (e) {
      //       console.log("目标对象被源对象悬停在上方");
      //       // 不断的执行
      //       // 如果想要触发 ondrop 事件 则需要在over 里面 阻止  默认行为
      //       return false;
      //       // e.preventDefault()
      //     }
      //     // (3)ondrop：源对象拖动着在目标对象上方释放/松手
      //     document.ondrop = function (event) {
      //       console.log("上方释放/松手");
      //       // 当我们的源对象 在 目标对象上  释放   就可以吧 源对象放入目标对象里面了 追加
      //       // 目标对象. appendChild(源对象)
      //       event.target.appendChild(obj);
      //       // 拖拽的时候 ，不用删除原来的
      //     }
      //   }
      // },
    },
    created() {
      console.log("book-created")
    },
    activated() {
      console.log("book-activated")
    },
    mounted() {
      console.log("book-mounted")
      // this.initBmap();
      // this.initDrag();
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
