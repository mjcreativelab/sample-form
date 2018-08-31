<script>
export default {
    name: 'validatedOk',
}
</script>

<template>
<svg class="u-validated__ok">
  <circle cx="10" cy="10" r="8"/>
</svg>
</template>

<style scoped lang="scss">
.u-validated__ok {
  position: absolute;
  top: 50%;
  right: 5px;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  transform: translateY(-50%) rotate(-90deg);

  circle {
    fill: transparent;
    stroke: #6c6;
    stroke-width: 4;
    animation: draw-circle 2.5s;
  }

  @keyframes draw-circle {
    0% { stroke-dasharray: 0 377; }
    99.9%,to { stroke-dasharray: 377 377; }
  }
}
</style>
