<script>
import LoadingCircle from "@/components/LoadingCircle"

import { mapMutations } from 'vuex'

const routePath = '/'
const inputStartPagePath = '/input-name'
const inputConfirmPagePath = '/input-confirm'
const lastPagePath = '/input-complete'
const animationTime = 510
const mainContentsHeightChangeTime = 310
let currentAnimationTime = animationTime

export default {
  name: 'sampleForm',
  components: {
    LoadingCircle
  },
  data () {
    return {
      pageNumber: 0,
      pages: [
        false,
        inputStartPagePath,
        '/input-address',
        inputConfirmPagePath,
        lastPagePath
      ],
      isLastPage: false,
      isLoading: false,
      targetProduct: '',
    }
  },
  computed: {
    isInputRequiredData: {
      get () {
        return this.$store.state.isInputRequiredData
      }
    },
    nextButtonLabel () {
      const labels = [
        false,
        '次へ進む',
        '入力内容を確認する',
        '注文を確定する'
      ]

      return labels[this.pageNumber]
    }
  },
  watch: {
    $route (to, from) {
      const currentPath = to.path;

      this.targetProduct = window.strCurrentSelectedItem

      if (currentPath === routePath) {
        this.init()
      }

      if (from.path === routePath) {
        currentAnimationTime = animationTime
      }
      else {
        currentAnimationTime = 0
      }

      if (this.pages.includes(currentPath)) {
        this.pageNumber = this.pages.indexOf(currentPath)
      }

      if ([inputStartPagePath, '/input-address'].includes(currentPath)) {
        this.$store.commit('UPDATE_iS_IPUT_REQUIRED_DATA', false)
      }

      if (currentPath === lastPagePath) {
        this.isLastPage = true
        this.$store.commit('UPDATE_iS_IPUT_REQUIRED_DATA', true)
        return
      }

      this.isLastPage = false
    },
    isInputRequiredData (newValue, oldValue) {
      const elmContainer = document.querySelector('#landingPage');

      if (newValue) {
        elmContainer.setAttribute('required-data-input', true)
      }
    }
  },
  created () {
    const currentPath = this.$route.path;

    if (currentPath === lastPagePath) {
      this.init()
      return
    }

    if (this.pages.includes(currentPath)) {
      this.pageNumber = this.pages.indexOf(currentPath)
    }
  },
  methods: {
    ...mapMutations([
      'UPDATE_iS_IPUT_REQUIRED_DATA',
    ]),
    init () {
      this.pageNumber = 0
      currentAnimationTime = animationTime
      document.querySelector('#conversionArea').removeAttribute('is-active')
    },
    gotoNext () {
      this.pageNumber++
      const nextPath = this.pages[this.pageNumber]

      if (nextPath === lastPagePath) {
        this.isLoading = true

        setTimeout(() => {
          this.isLoading = false
          this.$router.push(nextPath)
        }, 1000)
        return
      }

      this.$router.push(nextPath)
    },
    gotoPrev () {
      this.pageNumber--
      if (this.pageNumber < 0) {
        this.pageNumber = 0;
      }
      const prevPath = this.pages[this.pageNumber]
      this.$router.push(prevPath)

    },
    setComponentsHeight (componentsHeight) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$refs.mainContents.style.height = `${componentsHeight}px`
          resolve()
        }, currentAnimationTime)
      })
    },
    setRelatedHeightValues (componentsHeight) {
      this.setComponentsHeight(componentsHeight)
        .then(() => {
          setTimeout(() => {
            const elmContainer = this.$el.parentElement
            const heightBuffer = 50
            const containersHeight = elmContainer.clientHeight + heightBuffer
            const currentSetHeight = Math.abs(parseInt(elmContainer.style.bottom))

            elmContainer.style.bottom = `-${containersHeight}px`
          }, mainContentsHeightChangeTime);
        })
    },
    closeComponent () {
      document.querySelector('#conversionArea').removeAttribute('is-active')

      setTimeout(() => {
        this.$router.push(routePath)
      }, mainContentsHeightChangeTime)
    }
  }
}
</script>

<template>
<div id="formApp">
  <transition name="scale-fade">
    <loading-circle v-show="isLoading"/>
  </transition>

  <div class="l-main-contents"
       ref="mainContents"
  >
    <transition name="slide-fade">
      <router-view @route-changed="setRelatedHeightValues" />
    </transition>
  </div>

  <div class="c-form-nav">
    <transition name="slide-fade">
      <div class="c-form-nav__contents"
           v-if="!isLastPage"
           key="progress"
      >
        <div  class="u-button u-button__default"
              :class="{disabled: !pages[pageNumber - 1]}"
              @click="gotoPrev"
        >
          修正する
        </div>
        <div  class="u-button u-button__primary"
              :class="{disabled: !pages[pageNumber + 1]}"
              @click="gotoNext"
        >
          {{ nextButtonLabel }}
        </div>
      </div><!-- /.c-form-nav__contents -->
      <div class="c-form-nav__contents"
          has-only-child
          v-else
          key="end"
      >
        <div  class="u-button u-button__default"
              @click="closeComponent"
        >
          閉じる
        </div>
      </div><!-- /.c-form-nav__contents -->
    </transition>
  </div><!-- /.c-form-nav -->
  <div class="u-button__close-component"
       @click="closeComponent"
  >
    <span>
      ✖︎
    </span>
  </div>
</div>
</template>

<style lang="scss">
/*-----------------------
* Utility
-----------------------*/

.u-button {
  display: inline-block;
  border: 1px solid;
  border-radius: 5px;
  padding: .5em 1em;
  line-height: 1;
  cursor: pointer;

  &__default {
    border-color: #ccc;
    color: #555;
    background: #fff;
  }

  &__primary {
    color: #fff;
    background: #428bea;
  }

  &.disabled {
    visibility: hidden;
    pointer-events: none;
  }

  &__close-component {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 1em;
    background: #ccc;
    color: #eee;
    cursor: pointer;
  }
}

/*-----------------------
* Layout
-----------------------*/

.l-contents {
  padding: 30px;
}

/*-----------------------
* Unique
-----------------------*/

#formApp {
  position: relative;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .l-main-contents {
    transition: height .3s;
  }

  .c-form-nav {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 64px;
    border-top: 1px solid rgb(224, 230, 224);
    background: #f1f5f1;
    font-size: 1rem;
    transition: transform .5s;

    &:before {
      content: '';
      position: absolute;
      display: block;
      bottom: 100%;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(rgba(#696, 0), rgba(#696, 0.2));
    }

    &__contents {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 15px 20px;

      &[has-only-child] {
        justify-content: center;
      }
    }
  }
}

/*-----------------------
* Transition
-----------------------*/

@keyframes slide-fade-in {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-fade {
  0% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.slide-fade-enter-active {
  position: absolute;
  width: 100%;
  animation: slide-fade-in .5s;
}

.slide-fade-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-fade-in .5s reverse;
}

.scale-fade-enter-active {
  animation: scale-fade .5s;
}

.scale-fade-leave-active {
  animation: scale-fade .5s reverse;
}
</style>
