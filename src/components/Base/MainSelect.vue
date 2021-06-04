<template>
  <div
    class="main-select"
    :class="{
      'main-select--full': width == 'full',
      'main-select--header': width == 'header',
    }"
  >
    <div class="main-select__selected" @click="isShowList = !isShowList">
      {{ list[selected] }}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.4"
        height="6.1"
        viewBox="0 0 9.4 6.1"
        class="main-select__selected--arrow"
        :class="{ rotate: isShowList }"
      >
        <path
          id="Контур_36"
          data-name="Контур 36"
          d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
          transform="translate(-2 -2)"
          fill="gray"
        />
      </svg>
    </div>

    <transition name="fade">
      <div v-if="isShowList" class="main-select__list">
        <div
          class="main-select__item"
          v-for="(item, index) in list"
          :key="index"
          @click="selectItem(index)"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MainSelect",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    width: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isShowList: false,
      selected: 0,
    };
  },
  methods: {
    selectItem(index) {
      this.isShowList = false;
      this.selected = index;

      this.$emit("selectItem", index);
    },
  },
};
</script>

<style lang="scss">
.main-select {
  width: 150px;
  max-width: 100%;
  position: relative;

  font-size: 11px;
  line-height: 12px;
  font-weight: 400;
  color: #050038;

  @media (max-width: 400px) {
    width: 120px;
  }

  &--full {
    width: 100%;
  }

  &--header {
    width: 120px;
  }

  &__selected {
    position: relative;
    padding: 4px 35px 4px 9px;

    border: 1px solid #bfbfbf;
    border-radius: 8px;
    cursor: pointer;

    &--arrow {
      position: absolute;
      top: 50%;
      right: 10px;

      transform: translateY(-50%);
      transition: 0.3s all ease;

      &.rotate {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  &__list {
    position: absolute;
    top: calc(100% + 5px);
    left: 0px;
    width: 100%;
    z-index: 5;
    padding: 4px 9px;

    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #bfbfbf;
  }

  &__item {
    cursor: pointer;
    transition: 0.3s all ease;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      background-color: #eaeaea;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>