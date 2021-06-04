<template>
  <div class="main-accordion">
    <div
      class="main-accordion__list"
      :class="{ 'main-accordion__list--grey': showItem == index }"
      v-for="(item, index) in accordionList"
      :key="index"
    >
      <h5 class="main-accordion__title" @click="showItem = index">
        {{ item.title }}
      </h5>

      <svg
        v-if="showItem === index"
        xmlns="http://www.w3.org/2000/svg"
        width="11.949"
        height="11.949"
        viewBox="0 0 11.949 11.949"
        class="main-accordion__plus"
      >
        <path
          id="plus"
          d="M8.667,8.667v4.667a.667.667,0,0,1-1.333,0V8.667H2.667a.667.667,0,0,1,0-1.333H7.334V2.667a.667.667,0,0,1,1.333,0V7.334h4.667a.667.667,0,0,1,0,1.333Z"
          transform="translate(-2.026 -2.026)"
          fill="gray"
          fill-rule="evenodd"
        />
      </svg>

      <svg
        v-else
        id="minus"
        xmlns="http://www.w3.org/2000/svg"
        width="11.949"
        height="1.333"
        viewBox="0 0 11.949 1.333"
        class="main-accordion__minus"
      >
        <path
          id="minus-2"
          data-name="minus"
          d="M2.667,7.333H13.334a.667.667,0,0,1,0,1.333H2.667a.667.667,0,0,1,0-1.333Z"
          transform="translate(-2.026 -7.333)"
          fill="gray"
          fill-rule="evenodd"
        />
      </svg>

      <template v-if="showItem === index">
        <label
          v-for="subitem in item.list"
          :key="subitem.title"
          class="main-accordion__item"
        >
          <input type="checkbox" class="main-accordion__input" />

          <span class="main-accordion__block">
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
          {{ subitem.title }}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainAccordion",
  props: {
    accordionList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      showItem: 0,
    };
  },
};
</script>

<style lang="scss">
.main-accordion {
  margin-bottom: 10px;

  &__list {
    position: relative;
    top: -1px;

    padding: 9px 18px;

    border: 1px solid #808080;
    transition: 0.3s all ease;

    &:first-child {
      top: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    &:last-child {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    &--grey {
      background-color: #f8f8f8;
    }
  }

  &__title {
    padding-right: 10px;

    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    color: #050038;
    cursor: pointer;
  }

  &__plus {
    position: absolute;
    top: 9px;
    right: 13px;
  }

  &__minus {
    position: absolute;
    top: 14px;
    right: 13px;
  }

  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 4px;

    font-size: 9px;
    line-height: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__item:first-of-type {
    margin-top: 8px;
  }

  &__input {
    display: none;
  }

  &__block {
    position: relative;
    display: block;
    width: 11px;
    height: 11px;

    margin-right: 8px;

    border: 1px solid #808080;

    & > * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__input:checked ~ &__block {
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }
}
</style>