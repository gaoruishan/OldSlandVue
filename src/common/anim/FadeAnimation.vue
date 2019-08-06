<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
/**
 * 使用说明:
 * 导入: import FadeAnimation from '../../../common/anim/FadeAnimation'
 * <fade-animation>
 *     <div>xxxxx</div>
 * </fade-animation>
 */
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity 1s
</style>
