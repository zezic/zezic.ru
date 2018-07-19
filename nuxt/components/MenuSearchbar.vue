<template lang='pug'>
.menu-searchbar
  button.button.cancel(:class='{hidden: isEmpty}', @click='reset'): svg-icon(:icon='icons.cancel')
  input.input(type='text', placeholder='Поиск', @focus='activate', @blur='deactivate', v-model='query')
  button.button.search: svg-icon(:icon='icons.search')
  .underline(:class='{active}')
</template>

<script>
import Cancel from '~/assets/images/icons/cancel.inline.svg'
import Search from '~/assets/images/icons/search.inline.svg'
import SvgIcon from '~/components/SvgIcon.vue'

export default {
  name: 'menu-searchbar',
  components: {
    SvgIcon
  },
  data () {
    return {
      active: false,
      query: '',
      icons: {
        cancel: Cancel,
        search: Search
      }
    }
  },
  methods: {
    activate () {
      this.active = true
    },
    deactivate () {
      this.active = false
    },
    reset () {
      this.query = ''
    }
  },
  computed: {
    isEmpty () {
      return this.query.trim().length === 0
    }
  }
}
</script>

<style scoped lang='sass'>
@import "~assets/sass/_colors"

.menu-searchbar
  display: flex
  position: relative
  align-items: center

  .input
    flex-grow: 1
    background-color: transparent
    border: 0
    color: $color-fg-dark
    font-size: 16px
    font-weight: 400
    text-align: right
    padding: 8px 16px
    min-width: 0px
    padding-right: 32px

  .button
    background-color: transparent
    border: 0
    padding: 0
    color: $color-fg-dark
    height: 44px
    width: 38px
    cursor: pointer
    display: flex
    justify-content: center
    transition: opacity .2s ease

    &:hover
      color: $color-key

    &.hidden
      opacity: 0
      pointer-events: none

  .underline
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 1px
    background-color: $color-fg-dark
    opacity: .25
    transition: opacity .2s ease

    &.active
      opacity: 1
</style>
