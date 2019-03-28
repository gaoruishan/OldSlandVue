<template>
  <div>
    <mt-header class="g-header border-bottom" title="课程">
      <router-link to="/" slot="left">
        <mt-button icon="back"/>
      </router-link>
    </mt-header>
    <mt-header/>
    <img class="container" src='../../assets/images/my/course.png'/>
  </div>
</template>

<script>
  export default {
    name: "Course",
    props: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .container {
    width: 100%;
    height: 1980 *0.01rem;
    background-size: 100% 100%;
    /* background-image: url("data:image/png;base64,xxxx"); */
  }
</style>
