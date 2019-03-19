<template>
  <div>
    <!-- 有数字的 -->
    <div v-if="num">
      <div v-if="num.length>3" class='container2'>
        <span @click='bindText' class='text'>{{text}}</span>
        <span class='text-num'>{{num}}</span>
      </div>

      <div v-if="num.length==3" class='container1'>
        <span @click='bindText' class='text'>{{text}}</span>
        <span class='text-num'>{{num}}</span>
      </div>

      <div v-if="num.length<3" class='container'>
        <span @click='bindText' class='text'>{{text}}</span>
        <span class='text-num'>{{num}}</span>
      </div>
    </div>
    <!-- 默认 -->
    <div v-else class='container'>
      <span @click='bindText' class='text'>{{text}}</span>
      <span class='text-num'>{{num}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BookTagCmp",
    props: {
      text: String,
      num: String
    },
    data() {
      return {
        textData: ''
      }
    },
    watch: {
    },
    methods: {
      bindText() {
        this.textData = this.text;
        this.$emit('bindText', this.textData);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 46 * 0.01rem;
    border-radius: 23 * 0.01rem;
    margin-bottom: 25 * 0.01rem;
    margin-left: 25 * 0.01rem;
    background-color: #f7f7f7;
    justify-content: center;
    align-items: center;
    padding: 0 * 0.01rem 22 * 0.01rem;
  }

  .text {
    font-size: 22 * 0.01rem;
    color: #999;
    margin-right: 15 * 0.01rem;
  }

  .text-num {
    font-size: 18 * 0.01rem;
    color: #d1d1d1;
  }

  .container1 {
    background-color: #effafa;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 46 * 0.01rem;
    border-radius: 23 * 0.01rem;
    margin-bottom: 25 * 0.01rem;
    margin-left: 25 * 0.01rem;
    justify-content: center;
    align-items: center;
    padding: 0 * 0.01rem 22 * 0.01rem;
  }

  .container2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 46 * 0.01rem;
    border-radius: 23 * 0.01rem;
    margin-bottom: 25 * 0.01rem;
    margin-left: 25 * 0.01rem;
    justify-content: center;
    align-items: center;
    padding: 0 * 0.01rem 22 * 0.01rem;
    background-color: #fff9da;
  }

</style>
