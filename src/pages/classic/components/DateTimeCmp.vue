<template>
  <div class='container'>
    <div class='flex-baseline'>
      <span>No.</span>
      <span class='container-index'>{{indexNew}}</span>
      <div class='vertical-line'/>
    </div>
    <div class='date'>
      <span class='month'>{{month}}</span>
      <span class='year'>{{year}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateTimeCmp',
  props: {
    index: Number
  },
  data () {
    return {
      indexNew: '',
      month: '',
      year: '',
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
        '十二月'
      ]
    }
  },
  methods: {},
  watch: {
    index (newVal, oldVal) {
      if (newVal) {
        this.indexNew = newVal < 10 ? '0' + newVal : newVal
      }
    }
  },
  mounted () {
    let date = new Date()
    this.month = this.months[date.getMonth()]
    this.year = date.getFullYear()
  }
}
</script>

<style lang="stylus" scoped>
  /* components/date-time/index.wxss */

  .container {
    display: flex;
    flex-direction: row;
  }

  /* 文本对齐 */

  .flex-baseline {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  .container-index {
    font-size: 50 * 0.01rem;
  }

  .vertical-line {
    height: 32 * 0.01rem;
    width 0.03rem
    border-left: 1 * 0.01rem solid black;
    margin-left: 10 * 0.01rem;
    margin-right: 10 * 0.01rem;
  }

  .date {
    display: flex;
    flex-direction: column;
  }

  .month {
    font-size: 22 * 0.01rem;
  }

  .year {
    font-size: 22 * 0.01rem;
  }

</style>
