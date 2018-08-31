<script>
export default {
  name: 'formItem'
}
</script>

<template>
<div class="c-form-item">
  <div class="c-form-item__label">
    <slot name="form-item-label"/>
  </div>
  <div class="c-form-item__value">
    <slot name="form-item-value"/>
  </div>
</div>
</template>

<style scoped lang="scss">
.c-form-item {
  $this: &;

  display: contents;

  &__label {
    display: flex;
    align-items: center;
    color: #666;
    font-weight: bold;
  }

  /deep/ &__value,
  /deep/ &__contents-group {
    display: flex;
    align-content: center;
  }

  &__value {
    margin-left: 15px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /deep/ & + & {
      margin-left: 15px;
    }

    #{$this} + #{$this} /deep/ & {
      padding-top: 15px;
    }
  }

  /deep/ &__notice {
    display: flex;
    align-items: center;
    margin: 0 0 4px;
    color: #666;
    font-size: 0.8em;
    line-height: 1;
  }

  /deep/ &__example {
    display: inline-block;
    border-radius: 4px;
    margin-left: 4px;
    padding: 4px;
    background: #eee;
    line-height: 1;

    &:before {
      content: '例：';
    }
  }
}
</style>
