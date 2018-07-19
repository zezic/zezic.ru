<template lang='pug'>
.site
  navigation(v-model='mainShifted')
  main(:class='{shifted: mainShifted}', @click='mainShifted = false')
    nuxt
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: {
    Navigation
  },
  data () {
    return {
      mainShifted: false
    }
  }
}
</script>

<style lang='sass'>
@import "~assets/sass/_fonts"
@import "~assets/sass/_colors"
@import "~assets/sass/_sizes"
@import "~assets/sass/_z"

$main-animation-time: .2s
$main-animation-easing: cubic-bezier(.65,.05,.36,1)

html
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  color: $color-fg-light
  font-family: 'Proxima Nova', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px

.site
  overflow-x: hidden

main
  z-index: $z-main
  background-color: $color-bg-light
  min-height: 100vh
  position: relative
  transition: transform $main-animation-time $main-animation-easing
  transform: translateX(0px)
  @include respond-to(tablet-landscape)
    margin-left: $size-sidebar-width-collapsed
    &.shifted
      transform: translateX($size-sidebar-width - $size-sidebar-width-collapsed)
  @include respond-to(laptop)
    margin-left: $size-sidebar-width
    &.shifted
      transform: translateX(0px)

article

  .article-content

    h1
      font-size: 42px
      font-weight: bold
      margin-bottom: 32px

    h2
      font-size: 32px
      font-weight: 600
      margin-bottom: 24px

    p
      line-height: 1.5
      margin-bottom: 24px

    & > *
      max-width: $size-content-width
      margin-left: auto
      margin-right: auto

*, *:before, *:after
  box-sizing: border-box
  margin: 0
</style>
