<script>
// TODO: tempolary
import $_setComponentsHeightToApp from '@/mixins/$_setComponentsHeightToApp'

export default {
  name: 'blank',
  mixins: [
    $_setComponentsHeightToApp,
  ]
}
</script>

<template>
<div class="u-blank-block"/>
</template>

<style scoped lang="scss">
.u-blank-block {
  height: 0;
}
</style>
