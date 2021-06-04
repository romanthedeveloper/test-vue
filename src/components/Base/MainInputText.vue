<template>
  <div class="count-text">
    <input
      v-model="val"
      type="text"
      placeholder="Input text"
      class="count-text__input"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="count" class="count-text__counter">
      <span :class="{ error: val.length > count }">{{ val.length }}</span>
      /20
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainInputText',
  props: {
    value: {
      type: String,
      default: "",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      val: this.value,
    };
  },
};
</script>

<style lang="scss">
.count-text {
  position: relative;

  &__input {
    width: 100%;
    padding: 8px 10px;

    font-size: 11px;
    line-height: 12px;
    color: #050038;
    border: 1px solid #bfbfbf;
    border-radius: 8px;
  }

  &__counter {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);

    font-size: 11px;
    line-height: 12px;
    color: #808080;

    & .error {
      color: var(--error);
    }
  }
}
</style>