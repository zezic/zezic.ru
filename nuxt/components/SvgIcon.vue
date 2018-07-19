<template lang="pug">
svg.icon(:viewBox="icon.viewBox", :width="icon.viewBox.split(' ')[2]", :height="icon.viewBox.split(' ')[3]", :style="styles")
  use(:xlink:href="'#'+icon.id")
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: Object,
      default: () => ({})
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang='sass'>
.icon
  display: block
</style>
