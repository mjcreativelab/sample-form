<script>
import ProductInfo from "@/components/ProductInfo"

export default {
  name: 'productsArea',
  components: {
    ProductInfo,
  },
  data () {
    return {
      selectedItem: ''
    }
  },
  computed: {
    isProduct1Selected () {
      return selectedItem === 'product1'
    },
    isProduct2Selected () {
      return selectedItem === 'product2'
    },
  },
  created () {
    if (!window.selectedItem || window.selectedItem === '') {
      this.$router.replace('/')
    }

    this.selectedItem = window.selectedItem
  }
}
</script>

<template>
<div class="c-products-area">
  <product-info class="dummy1"
                v-show="isProduct1Selected"
  >
    <template slot="product-image">
      <div class="dummy-block"/>
    </template>
    <template slot="product-name">
      商品１
    </template>
    <template slot="product-detail">
      商品１の説明文商品１の説明文商品１の説明文<br>
      商品１の説明文商品１の説明文<br>
      商品１の説明文商品１の説明文商品１の説明文<br>
      商品１の説明文商品１の説明文<br>
      商品１の説明文
    </template>
  </product-info>
  <product-info class="dummy2"
                v-show="isProduct2Selected"
  >
    <template slot="product-image">
      <div class="dummy-block"/>
    </template>
    <template slot="product-name">
      商品２
    </template>
    <template slot="product-detail">
      商品２の説明文商品２の説明文商品２の説明文<br>
      商品２の説明文商品２の説明文<br>
      商品２の説明文商品２の説明文商品２の説明文<br>
      商品２の説明文商品２の説明文<br>
      商品２の説明文
    </template>
  </product-info>
</div>
</template>

<style scoped lang="scss">
.dummy-block {
  width: 212px;
  height: 150px;
  margin: 0;
}
</style>