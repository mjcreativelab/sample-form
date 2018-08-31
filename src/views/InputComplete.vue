<script>
import $_setComponentsHeightToApp from '@/mixins/$_setComponentsHeightToApp'

export default {
  name: "inputComplete",
  mixins: [
    $_setComponentsHeightToApp,
  ]
}
</script>

<template>
<div class="l-contents">
  <h1>ご注文ありがとうございます！</h1>
</div>
</template>

<style scoped lang="scss">
h1 {
  text-align: center;
}
</style>
