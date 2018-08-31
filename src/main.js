import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  data: {
    isLoading: false
  },
  router,
  store,
  render: h => h(App)
}).$mount('#formApp')

router.onReady(() => {
  const currentPath = router.currentRoute.path
  const elmContainer = document.querySelector('#conversionArea')

  if (currentPath === '/') {
    elmContainer.removeAttribute('is-active')
  }
  else {
    elmContainer.setAttribute('is-active', true)
  }
})
