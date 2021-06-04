<template>
  <label :for="title" class="input-checkbox">
    <h4 class="input-checkbox__title">{{ title }}</h4>
    <input
      v-model="val"
      type="checkbox"
      :id="title"
      @input="$emit('input', $event.target.checked)"
      class="input-checkbox__input"
    />
    <span></span>
  </label>
</template>

<script>
export default {
  name: "InputCheckox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Checkbox",
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
.input-checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__title {
    margin-right: 40px;

    color: #808080;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;

    @media (max-width: 600px) {
      margin-right: 10px;
    }
  }

  &__input {
    display: none;

    & ~ span {
      position: relative;
      display: block;
      width: 30px;
      height: 18px;

      background-color: #808080;
      border-radius: 9px;

      &::after {
        position: absolute;
        display: block;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        background-color: #fff;
        border-radius: 50%;
        transition: 0.3s all ease;

        content: "";
      }
    }

    &:checked ~ span {
      background-color: var(--primary);

      &::after {
        left: 14px;
      }
    }
  }
}
</style>