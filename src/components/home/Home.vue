<template>
    <div class="container">
      <mt-cell v-for="(n,i) in 22" :key="i" title="tab-container 1">
        <span>{{n}}</span>
      </mt-cell>
    </div>
</template>

<script>
    export default {
        name: "MainHome",
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>

</style>
