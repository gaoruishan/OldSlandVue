<template>
  <div class='container'>
    <img @click='onLeft' v-show="!first"
         src='../../../assets/images/classic/triangle.dis@left.png'/>
    <img @click='onLeft' v-show="first" src='../../../assets/images/classic/triangle@left.png'/>
    <span>{{title}}</span>
    <img @click='onRight' v-show="!last"
         src='../../../assets/images/classic/triangle.dis@right.png'/>
    <img @click='onRight' v-show="last" src='../../../assets/images/classic/triangle@right.png'/>
  </div>

</template>

<script>
  export default {
    name: "NaviCmp",
    props: {
      last: Boolean,
      first: Boolean,
      title: String
    },
    data() {
      return {}
    },
    watch: {},
    methods: {
      onLeft() {
        const firstData = this.first;
        if (firstData) {
          this.$emit("onLeft")
        }
      },
      onRight() {
        const lastData = this.last;
        if (lastData) {
          this.$emit("onRight")
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    width: 600 * 0.01rem;
    background-color: #f7f7f7;
    display: flex;
    text-align center
    margin 0 auto
    flex-direction: row;
    align-items: center;
    border-radius: 2 * 0.01rem;
    justify-content: space-between;
  }

  .container img {
    width: 76 * 0.01rem;
    height: 76 * 0.01rem;
  }

  span {
    letter-spacing: 3 * 0.01rem;
  }
</style>
