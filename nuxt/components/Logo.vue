<template lang='pug'>
nuxt-link.logo.main-logo(:to='{name: "index"}')
  transition(name='fade')
    .text.full(v-if='full')
      svg-icon(:icon='logo')
  transition(name='fade')
    .text.letter(v-if='!full')
      svg-icon(:icon='letter')
  .text.full.force
    svg-icon(:icon='logo')
  .alpha(:class='{shifted: !full}')
    svg-icon(:icon='alpha')
</template>

<script>
import Logo from '~/assets/images/logo.inline.svg'
import Letter from '~/assets/images/logo-letter.inline.svg'
import Alpha from '~/assets/images/logo-alpha.inline.svg'
import SvgIcon from '~/components/SvgIcon.vue'

export default {
  name: 'logo',
  props: {
    full: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SvgIcon
  },
  data () {
    return {
      logo: Logo,
      letter: Letter,
      alpha: Alpha
    }
  }
}
</script>

<style scoped lang='sass'>
@import "~assets/sass/_colors"
@import "~assets/sass/_sizes"

.logo
  display: flex
  position: relative
  align-items: center
  width: 176px

  .text
    height: 22px
    color: $color-fg-dark
    position: absolute

    &.force
      display: none
      @include respond-to(laptop)
        display: block

    &.letter
      @include respond-to(laptop)
        display: none

  .alpha
    color: $color-key
    padding-bottom: 24px
    transform: translateX(162px)
    transition: transform .5s ease

    &.shifted
      transform: translateX(42px)

    @include respond-to(laptop)
      transform: translateX(162px) !important

.fade-enter-active, .fade-leave-active
  transition: opacity .5s ease

.fade-leave-to
  opacity: 0

.fade-enter
  opacity: 0
</style>
