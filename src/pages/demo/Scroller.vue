<template>
  <div class="container">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in 100">{{ item }}</li>
      </ul>
    </mt-loadmore>
    <div>测试</div>
  </div>
</template>

<script>
  export default {
    name: "Scroller",
    props: {},
    data() {
      return {
        allLoaded:false,
        list: [1,2,3,4,5,6,7,8,9]
      }
    },
    methods: {
      loadTop() {
        console.log("loadTop")
        // this.$refs.loadmore.onBottomLoaded();
        setTimeout(()=>{
          this.$refs.loadmore.onTopLoaded();
        },1500);

      },
      loadBottom() {
        console.log("loadBottom")
        setTimeout(()=>{
          // this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        },1500);
      }
    },
    mounted() {
      // for (let i = 1; i <= 20; i++) {
      //   this.items.push(i + ' - keep walking, be 2 with you.')
      // }

      this.top = 1;
      this.bottom = 20
    },

  }
</script>

<style lang="stylus" scoped>

</style>
