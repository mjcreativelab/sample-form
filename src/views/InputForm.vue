<script>
import ProductsArea from "@/components/ProductsArea"
import FormTable from "@/components/FormTable"
import FormItem from "@/components/FormItem"
import InputText from "@/components/InputText"
import LoadingCircle from "@/components/LoadingCircle"

import $_setComponentsHeightToApp from '@/mixins/$_setComponentsHeightToApp'

import { mapMutations } from 'vuex'

const mainContentsHeightChangeTime = 150

export default {
  name: "inputForm",
  components: {
    ProductsArea,
    FormTable,
    FormItem,
    InputText,
    LoadingCircle,
  },
  mixins: [
    $_setComponentsHeightToApp,
  ],
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isLastNameValidated: false,
      isFirstNameValidated: false,
      isLastNameKanaValidated: false,
      isFirstNameKanaValidated: false,
      isPostalCodeValidated: false,
      isAddressValidated: false,
    }
  },
  computed: {
    isInputNamePage: vm => vm.currentPage === 'inputName',
    isInputAddressPage: vm => vm.currentPage === 'inputAddress',
    isInputConfirmPage: vm => vm.currentPage === 'inputConfirm',
    lastName: {
      get: vm => vm.$store.state.User.userData.lastName,
      set (value) {
        this.$store.commit('User/UPDATE_LAST_NAME', value)
      },
    },
    firstName: {
      get: vm => vm.$store.state.User.userData.firstName,
      set (value) {
        this.$store.commit('User/UPDATE_FIRST_NAME', value)
      },
    },
    lastNameKana: {
      get: vm => vm.$store.state.User.userData.lastNameKana,
      set (value) {
        this.$store.commit('User/UPDATE_LAST_NAME_KANA', value)
      },
    },
    firstNameKana: {
      get: vm => vm.$store.state.User.userData.firstNameKana,
      set (value) {
        this.$store.commit('User/UPDATE_FIRST_NAME_KANA', value)
      },
    },
    postalCode: {
      get: vm => vm.$store.state.User.userData.postalCode,
      set (value) {
        this.$store.commit('User/UPDATE_POSTAL_CODE', value)
      },
    },
    address: {
      get: vm => vm.$store.state.User.userData.address,
      set (value) {
        this.$store.commit('User/UPDATE_ADDRESS', value)
      }
    },
    formattedPostalCode () {
      return `${this.postalCode.slice(0, 3)}-${this.postalCode.slice(3)}`
    }
  },
  watch: {
    currentPage () {
      setTimeout(() => {
        this.$emit('route-changed', this.$el.clientHeight)
      }, mainContentsHeightChangeTime)
    },
    lastName (newValue) {
      this.isLastNameValidated = newValue !== ''
    },
    firstName (newValue) {
      this.isFirstNameValidated = newValue !== ''
    },
    lastNameKana (newValue) {
      this.isLastNameKanaValidated = newValue !== ''
    },
    firstNameKana (newValue) {
      this.isFirstNameKanaValidated = newValue !== ''
    },
    postalCode (newValue) {
      this.isPostalCodeValidated = newValue !== ''
    },
    address (newValue) {
      this.isAddressValidated = newValue !== ''
    },
  },
  methods: {
    ...mapMutations('User', [
      'UPDATE_LAST_NAME',
      'UPDATE_FIRST_NAME',
      'UPDATE_LAST_NAME_KANA',
      'UPDATE_FIRST_NAME_KANA',
      'UPDATE_POSTAL_CODE',
      'UPDATE_ADDRESS',
    ]),
  }
}
</script>

<template>
<div class="p-input-form l-contents">
  <products-area/>
  <form-table>
    <template slot="form-items">
      <form-item data-form-item="name">
        <template slot="form-item-label">
          <div class="c-form-item__content">
            お名前
          </div>
        </template>
        <template slot="form-item-value">
          <transition name="fade">
            <div class="c-form-item__contents-group"
                 v-if="isInputNamePage"
                 key="inputName"
            >
              <div class="c-form-item__content">
                <p class="c-form-item__notice">
                  <span>
                    姓（漢字）
                  </span>
                  <span class="c-form-item__example">
                    山田
                  </span>
                </p>
                <input-text name="last_name"
                            v-model="lastName"
                            :validated="isLastNameValidated"
                />
              </div><!-- /.c-form-item__content -->
              <div class="c-form-item__content">
                <p class="c-form-item__notice">
                  <span>
                    名（漢字）
                  </span>
                  <span class="c-form-item__example">
                    太郎
                  </span>
                </p>
                <input-text name="first_name"
                            v-model="firstName"
                            :validated="isFirstNameValidated"
                />
              </div><!-- /.c-form-item__content -->
            </div><!-- /.c-form-item__contents-group -->
            <div class="c-form-item__contents-group"
                 v-else
                 key="confirmName"
            >
              <div class="c-form-item__content">
                {{ lastName }}
              </div><!-- /.c-form-item__content -->
              <div class="c-form-item__content">
                {{ firstName }}
              </div><!-- /.c-form-item__content -->
            </div><!-- /.c-form-item__contents-group -->
          </transition>
        </template>
      </form-item><!-- /[data-form-item="name"] -->
      <form-item data-form-item="name-kana">
        <template slot="form-item-label">
          <div class="c-form-item__content">
            ふりがな
          </div>
        </template>
        <template slot="form-item-value">
          <transition name="fade">
            <div class="c-form-item__contents-group"
                 v-if="isInputNamePage"
                 key="inputName"
            >
              <div class="c-form-item__content">
                <p class="c-form-item__notice">
                  <span>
                    姓（ひらがな）
                  </span>
                  <span class="c-form-item__example">
                    やまだ
                  </span>
                </p>
                <input-text name="last_name_kana"
                            v-model="lastNameKana"
                            :validated="isLastNameKanaValidated"
                />
              </div><!-- /.c-form-item__content -->
              <div class="c-form-item__content">
                <p class="c-form-item__notice">
                  <span>
                    名（ひらがな）
                  </span>
                  <span class="c-form-item__example">
                    たろう
                  </span>
                </p>
                <input-text name="first_name_kana"
                            v-model="firstNameKana"
                            :validated="isFirstNameKanaValidated"
                />
              </div><!-- /.c-form-item__content -->
            </div><!-- /.c-form-item__contents-group -->
            <div class="c-form-item__contents-group"
                 v-else
                 key="confirmName"
            >
              <div class="c-form-item__content">
                {{ lastNameKana }}
              </div><!-- /.c-form-item__content -->
              <div class="c-form-item__content">
                {{ firstNameKana }}
              </div><!-- /.c-form-item__content -->
            </div><!-- /.c-form-item__contents-group -->
          </transition>
        </template>
      </form-item><!-- /[data-form-item="name"] -->
      <form-item data-form-item="address"
                 v-if="!isInputNamePage"
      >
        <template slot="form-item-label">
          <div class="c-form-item__content">
            お届け先住所
          </div>
        </template>
        <template slot="form-item-value">
          <transition name="fade">
            <div class="c-form-item__contents-group"
                 v-if="isInputAddressPage"
                 key="inputAddress"
            >
              <div class="c-form-item__content"
                   data-form-value="postal-code"
              >
                <p class="c-form-item__notice">
                  <span>
                    郵便番号
                  </span>
                  <span class="c-form-item__example">
                    1230123
                  </span>
                </p>
                <input-text name="postal_code"
                            v-model="postalCode"
                            :validated="isPostalCodeValidated"
                />
              </div><!-- /.c-form-item__content -->
              <div class="c-form-item__content"
                   data-form-value="address"
              >
                <p class="c-form-item__notice">
                  <span>
                    住所
                  </span>
                  <span class="c-form-item__example">
                    中央区銀座１ー２−３
                  </span>
                </p>
                <input-text name="address"
                            v-model="address"
                            :validated="isAddressValidated"
                />
              </div><!-- /.c-form-item__content -->
            </div><!-- /.c-form-item__contents-group -->
            <div class="c-form-item__contents-group"
                 v-else
                 key="confirmAddress"
            >
              <div class="c-form-item__content">
                〒 {{ formattedPostalCode }}
              </div><!-- /.c-form-item__content -->
              <div class="c-form-item__content">
                {{ address }}
              </div><!-- /.c-form-item__content -->
            </div><!-- /.c-form-item__contents-group -->
          </transition>
        </template>
      </form-item><!-- /[data-form-item="address"] -->
      <form-item data-form-item="requestDeliveryDataTime"
                 v-if="isInputConfirmPage"
      >
        <template slot="form-item-label">
          <div class="c-form-item__content">
            希望配達日時
          </div>
        </template>
        <template slot="form-item-value">
          <div class="c-form-item__contents-group">
            <div class="c-form-item__content">
              2018年08月31日　19:00〜21:00
            </div><!-- /.c-form-item__content -->
          </div>
        </template>
      </form-item><!-- /[data-form-item="requestDeliveryDataTime"] -->
      <form-item data-form-item="payment"
                 v-if="isInputConfirmPage"
      >
        <template slot="form-item-label">
          <div class="c-form-item__content">
            お支払い方法
          </div>
        </template>
        <template slot="form-item-value">
          <div class="c-form-item__contents-group">
            <div class="c-form-item__content">
              クレジットカード
            </div><!-- /.c-form-item__content -->
            <div class="c-form-item__content">
              番号：************0001
            </div><!-- /.c-form-item__content -->
          </div>
        </template>
      </form-item><!-- /[data-form-item="payment"] -->
    </template>
  </form-table>
</div>
</template>

<style scoped lang="scss">
[data-form-item="name"] .c-input-text,
[data-form-item="name-kana"] .c-input-text {
  width: 15em;
}

[data-form-value="postal-code"] .c-input-text {
  width: 9em;
}

[data-form-value="address"] .c-input-text {
  width: 30em;
}

.c-form-table {
  border-top: 1px solid #ccc;
  padding-top: 30px;
}

/*-----------------------
* Transition
-----------------------*/

.fade-enter-active,
.fade-leave-active {
  transition: transform .3s;
  transform-origin: center;
}

.fade-enter,
.fade-leave-to {
  position: absolute;
  height: 1.5em;
  transform: scaleY(0);
  transform-origin: .5em;
}

.fade-move {
  transition: transform 1s;
}
</style>
