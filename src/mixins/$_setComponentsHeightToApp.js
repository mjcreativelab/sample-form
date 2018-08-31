const setComponentsHeightToApp = {
  mounted () {
    this.$nextTick(() => {
      this.$emit('route-changed', this.$el.clientHeight)
    })
  }
}

export default setComponentsHeightToApp