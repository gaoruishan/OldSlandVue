<template>
    <div class="contain">
      <mt-header class="g-header border-bottom" title="关于我们">
        <router-link to="/" slot="left">
          <mt-button icon="back"/>
        </router-link>
      </mt-header>
      <!--为了撑出一个header高度-->
      <mt-header/>
      <img class="container"  src='../../assets/images/my/about@bg.jpg' />
    </div>
</template>

<script>
    export default {
        name: "About",
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
    height: 100%;

    /* background-image: url("data:image/png;base64,xxxx"); */
  }
</style>
