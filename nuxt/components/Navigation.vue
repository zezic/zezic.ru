<template lang='pug'>
.navigation(@mouseleave='collapse')
  nav(:class='{active: value}', @click='expand', @mouseenter='expand')
    user-status.user-status(:class='{transparent: !value}')
    .logo-section
      logo.logo(:full='value', :class='{shifted: value}')
    menu-searchbar
  .flying-hamburger(@click='toggle', :class='{active: value}')
    .dots
      .dot
      .dot
      .dot
</template>

<script>
import UserStatus from '~/components/UserStatus.vue'
import Logo from '~/components/Logo.vue'
import MenuSearchbar from '~/components/MenuSearchbar.vue'

export default {
  name: 'navigation',
  components: {
    UserStatus,
    Logo,
    MenuSearchbar
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle () {
      this.$emit('input', !this.value)
    },
    expand () {
      this.$emit('input', true)
    },
    collapse () {
      if (document.documentElement.clientWidth < 1024) {
        return
      }
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped lang='sass'>
@import "~assets/sass/_colors"
@import "~assets/sass/_sizes"
@import "~assets/sass/_z"

$nav-transition-time: .3s
$nav-transition-easing: cubic-bezier(1, 0, 0, 1)

.navigation
  position: fixed
  z-index: $z-navigation

  @include respond-to(tablet-landscape)
    z-index: $z-navigation-tablet

  nav
    background-color: $color-bg-dark
    color: $color-fg-dark
    height: 100%
    position: fixed
    width: 100%
    clip-path: circle(24px at right 56px bottom 56px)
    transition: clip-path $nav-transition-time $nav-transition-easing

    &.active
      clip-path: circle(140% at right 56px bottom 56px)

    @include respond-to(tablet-landscape)
      clip-path: none
      width: 280px

    .user-status
      padding: 32px 24px
      @include respond-to(laptop)
        padding: 40px 32px 36px
      &.transparent
        opacity: 0
        transition: opacity .2s ease
        @include respond-to(laptop)
          opacity: 1

    .logo-section
      display: flex
      justify-content: flex-end
      padding-right: 96px

      @include respond-to(tablet-landscape)
        justify-content: flex-start
        padding-left: 32px
        padding-right: 0px

      @include respond-to(laptop)
        padding-left: 56px

      .logo
        transition: transform .2s ease
        &.shifted
          @include respond-to(tablet-landscape)
            transform: translateX(24px)
          @include respond-to(laptop)
            transform: translateX(0px)

  .flying-hamburger
    background-color: $color-bg-dark
    cursor: pointer
    height: 48px
    width: 48px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 50%
    position: fixed
    right: 32px
    bottom: 32px
    transition: background-color $nav-transition-time $nav-transition-easing
    z-index: $z-hamburger

    @include respond-to(tablet-landscape)
      display: none

    &.active
      background-color: $color-fg-dark

      .dots
        transform: rotate(90deg)

      .dot
        background-color: $color-bg-dark

    .dots
      display: flex
      transition: transform $nav-transition-time  $nav-transition-easing

    .dot
      background-color: $color-fg-dark
      height: 6px
      width: 6px
      margin-left: 2px
      margin-right: 2px
      border-radius: 50%
      transition: background-color $nav-transition-time $nav-transition-easing

</style>
