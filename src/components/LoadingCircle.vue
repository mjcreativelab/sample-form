<script>
export default {
  name: 'loadingCircle',
}
</script>

<template>
<div class="u-loading-circle">
  <div class="animation"/>
  <div class="animation"/>
</div>
</template>

<style scoped lang="scss">
.u-loading-circle {
  position: absolute;
  z-index: 999999;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
}

.u-loading-circle:after {
  content: '処理中';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 2em;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  white-space: pre;
  animation: typing 2s infinite;
}

.u-loading-circle .animation {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid transparent;
  border-radius: 100%;
}

.u-loading-circle .animation:first-of-type {
  border-top-color: #fff;
  margin-top: -64px;
  margin-left: -64px;
  height: 128px;
  width: 128px;
  animation: spin 1.2s ease-in-out infinite;
}

.u-loading-circle .animation:nth-of-type(2) {
  content: '';
  display: block;
  border-bottom-color: #999;
  margin-top: -60px;
  margin-left: -60px;
  height: 120px;
  width: 120px;
  animation: spin 1.4s ease-in-out infinite reverse;
}

@keyframes typing {
  0% {
    content: '処理中';
  }
  10%, 90% {
    content: '処理中\A.';
  }
  20%, 80% {
    content: '処理中\A..';
  }
  30%, 70% {
    content: '処理中\A...';
  }
  40%, 60% {
    content: '処理中\A....';
  }
  50% {
    content: '処理中\A.....';
  }
}

@keyframes spin {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg);
  }
}</style>
