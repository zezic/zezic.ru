<template lang='pug'>
.user-status
  .name Анонимус
  button.button Войти
</template>

<script>
export default {
  name: 'user-status'
}
</script>

<style scoped lang='sass'>
@import "~assets/sass/_colors"
@import "~assets/sass/_sizes"

.user-status
  display: flex
  width: 100%
  justify-content: flex-end
  align-items: center

  @include respond-to(tablet-landscape)
    justify-content: space-between

  .name, .button
    color: $color-fg-dark

  .name
    font-size: 16px

  .button
    font-size: 13px
    font-weight: 600
    background-color: transparent
    border: 1px solid $color-fg-dark
    border-radius: 4px
    height: 27px
    padding: 0 8px
    text-transform: uppercase
    margin-left: 24px
    cursor: pointer

    &:hover
      background-color: $color-fg-dark
      color: $color-bg-dark
</style>
