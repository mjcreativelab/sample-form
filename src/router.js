import Vue from 'vue'
import Router from 'vue-router'
import Blank from './components/Blank'
import InputForm from './views/InputForm'
import InputComplete from './views/InputComplete'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Blank
    },
    {
      path: '/input-name',
      name: 'inputName',
      component: InputForm,
      props: {
        currentPage: 'inputName'
      }
    },
    {
      path: '/input-address',
      name: 'inputAddress',
      component: InputForm,
      props: {
        currentPage: 'inputAddress'
      }
    },
    {
      path: '/input-confirm',
      name: 'inputConfirm',
      component: InputForm,
      props: {
        currentPage: 'inputConfirm'
      }
    },
    {
      path: '/input-complete',
      name: 'InputComplete',
      component: InputComplete,
      // component: () =>
      //   import('./views/InputComplete.vue'),
      props: {
        currentPage: 'inputComplete'
      }
    }
  ]
})
