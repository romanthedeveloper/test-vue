<template>
  <label :for="title" class="base-checkbox">
    <input
      v-model="val"
      type="checkbox"
      :id="title"
      @input="$emit('input', $event.target.checked)"
      class="base-checkbox__input"
    />
    <span class="base-checkbox__block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7.955"
        height="6.96"
        viewBox="0 0 7.955 6.96"
      >
        <path
          id="tick"
          d="M6.794,2.109,3.149,6.914.994,4.761,0,5.756,3.314,9.069,7.955,3.1Z"
          transform="translate(0 -2.109)"
          fill="#f8fcff"
        />
      </svg>
    </span>
    <h4 class="base-checkbox__title">{{ title }}</h4>
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
.base-checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 8px;

  &__title {
    color: #808080;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
  }

  &__input {
    display: none;

    & ~ span {
      position: relative;
      display: block;
      width: 11px;
      height: 11px;

      margin-right: 10px;
      
      border: 1px solid #808080;

      & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:checked ~ span {
      background-color: var(--primary);
      border-color: var(--primary);
    }
  }
}
</style>