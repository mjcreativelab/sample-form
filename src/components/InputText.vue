<script>
import ValidatedOk from "@/components/ValidatedOk"

export default {
  name: 'inputText',
  components: {
    ValidatedOk
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    validated: {
      type: Boolean,
    },
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
      this.$emit('change', event.target.value)
    }
  }
}
</script>

<template>
<div class="c-input-text">
  <input class="c-input-text__form"
        type="text"
        :name="name"
        :value="value"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
  >
  <validated-ok v-if="validated"/>
</div>
</template>

<style scoped lang="scss">
.c-input-text {
  position: relative;

  &__form {
    border: 1px solid #999;
    border-radius: 4px;
    width: 100%;
    padding: .5em;
    padding-right: 2em;
    line-height: 1;
    transition: border-color .3s, background-color .3s, outline .3s;

    &:focus {
      background-color: #ffd;
    }
  }
}
</style>
