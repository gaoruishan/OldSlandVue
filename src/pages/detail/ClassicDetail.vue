<template>
  <div class="container">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    ClassicDetail
  </div>
</template>

<script>
  export default {
    name: "ClassicDetail",
    props: {},
    data() {
      return {}
    },
    methods: {
      onBack() {

      }
    },
    mounted() {
      plus.key.addEventListener("backbutton", () => {
        this.$mui.toast("BackButton Key pressed!");
      });
    }
  }
</script>

<style lang="stylus" scoped>

</style>
