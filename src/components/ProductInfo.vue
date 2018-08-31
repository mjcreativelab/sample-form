<script>
export default {
  name: 'productInfo',
}
</script>

<template>
<div class="c-product-info">
  <figure class="c-product-info__image">
    <slot name="product-image"/>
  </figure>
  <dl class="c-product-info__spec">
    <dt class="c-product-info__name">
      <slot name="product-name"/>
    </dt>
    <dd class="c-product-info__detail">
      <slot name="product-detail"/>
    </dd>
  </dl>
</div>
</template>

<style scoped lang="scss">
.c-product-info {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  &__image {
    margin: 0;
  }

  &__spec {
    margin: 0 0 0 30px;
  }

  &__name {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
  }

  &__detail {
    margin: 15px 0 0;
    color: #666;
    font-size: .9rem;
    line-height: 1.6;
  }
}
</style>