<template>
  <div
    class="btn"
    :class="{ 'btn--white': color, 'btn--small': small }"
    @click="$emit('clickBtn')"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    color: {
      type: String,
      default: "",
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss'>
.btn {
  width: 100px;
  padding: 8px 15px;

  font-family: "Open Sans";
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
  color: #fff;
  background-color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  &--white {
    color: var(--primary);
    background-color: transparent;
  }

  &--small {
    width: 80px;
    padding: 5px 8px;

    font-size: 9px;
    line-height: 12px;
    font-weight: 400;
  }
}
</style>