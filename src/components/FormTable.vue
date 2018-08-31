<script>
export default {
  name: 'formTable'
}
</script>

<template>
<div class="c-form-table">
  <slot name="form-items"/>
</div>
</template>

<style scoped lang="scss">
.c-form-table {
  display: grid;
  grid-template-columns: max-content 1fr;

  &__row {
    display: contents;
  }

  /deep/ [type="text"] {
    font-size: 0.8rem;
  }
}
</style>
