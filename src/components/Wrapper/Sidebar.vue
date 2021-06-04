<template>
  <div class="wrapper-sidebar">
    <h4 class="wrapper-sidebar__title">Question Category</h4>

    <router-link
      v-if="$route.path !== '/canvas-form'"
      class="wrapper-sidebar__canvas"
      :to="{ name: 'CanvasForm' }"
    >
      Open Canvas
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13.017"
        viewBox="0 0 13 13.017"
      >
        <g id="arrowhead-right-outline" transform="translate(-7.497 -7.467)">
          <path
            id="Контур_561"
            data-name="Контур 561"
            d="M24.293,13.411l-4.437-5.57a.931.931,0,1,0-1.448,1.17L22.371,14l-4.159,4.985a.927.927,0,0,0,1.43,1.179l4.642-5.57a.928.928,0,0,0,.009-1.179Z"
            transform="translate(-4.002 -0.011)"
            fill="gray"
          />
          <path
            id="Контур_562"
            data-name="Контур 562"
            d="M9.356,7.831A.949.949,0,1,0,7.861,9l4.01,4.985L7.713,18.961a.929.929,0,0,0,1.43,1.188l4.642-5.57a.928.928,0,0,0,0-1.179Z"
            transform="translate(0)"
            fill="gray"
          />
        </g>
      </svg>
    </router-link>

    <ul class="wrapper-sidebar__list">
      <li
        class="wrapper-sidebar__item"
        v-for="item in questionCategory"
        :key="item.name"
      >
        <div class="wrapper-sidebar__icon">?</div>
        <div class="wrapper-sidebar__text">{{ item.name }}</div>
        <div class="wrapper-sidebar__last">
          <i class="fas fa-grip-vertical"></i>
        </div>
      </li>
    </ul>

    <div class="wrapper-sidebar__sep"></div>

    <h4 class="wrapper-sidebar__title">Question TYPE</h4>

    <ul class="wrapper-sidebar__list">
      <li
        class="wrapper-sidebar__item"
        v-for="item in questionType"
        :key="item.name"
      >
        <div class="wrapper-sidebar__icon">?</div>
        <div class="wrapper-sidebar__text">{{ item.name }}</div>
        <div class="wrapper-sidebar__last">
          <i class="fas fa-grip-vertical"></i>
        </div>
      </li>
    </ul>

    <div class="wrapper-sidebar__sep"></div>

    <h4 class="wrapper-sidebar__title">DESIGN OPTIONS</h4>

    <div class="wrapper-sidebar__links">
      <router-link
        :to="{ name: 'DesignAndTheme' }"
        class="wrapper-sidebar__links-item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="31.35"
          viewBox="0 0 33 31.35"
        >
          <g id="__TEMP__SVG__" transform="translate(-3 -4.5)">
            <path
              id="Контур_505"
              data-name="Контур 505"
              d="M6.3,7.8H27.75V19.35h3.3V7.8a3.3,3.3,0,0,0-3.3-3.3H6.3A3.3,3.3,0,0,0,3,7.8V27.6a3.3,3.3,0,0,0,3.3,3.3H19.5V27.6H6.3Z"
              transform="translate(0 0)"
              fill="gray"
            />
            <path
              id="Контур_506"
              data-name="Контур 506"
              d="M12.45,16.8,7.5,23.4H25.65l-6.6-9.9L14.1,20.1Z"
              transform="translate(0.45 0.9)"
              fill="gray"
            />
            <path
              id="Контур_507"
              data-name="Контур 507"
              d="M29.25,21h-3.3v4.95H21v3.3h4.95V34.2h3.3V29.25H34.2v-3.3H29.25Z"
              transform="translate(1.8 1.65)"
              fill="gray"
            />
          </g>
        </svg>
        <p class="wrapper-sidebar__links-text">Add media</p>
      </router-link>

      <router-link
        :to="{ name: 'DesignAndTheme' }"
        class="wrapper-sidebar__links-item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28.506"
          height="26.993"
          viewBox="0 0 28.506 26.993"
        >
          <path
            id="draw"
            d="M14.625,31.275c2.67-1.05,2.085-3.945.735-5.775a18.389,18.389,0,0,0-5.04-4.41A14.726,14.726,0,0,1,6.81,18c-.42-.5-1.275-1.41-.405-1.59.885-.18,2.415.69,3.195,1.02a28.213,28.213,0,0,1,3.975,2.01l1.515-2.55a21.2,21.2,0,0,0-8.13-3.315c-1.59-.24-3.27.09-3.81,1.815-.48,1.485.285,2.985,1.155,4.155C6.36,22.29,9.555,23.61,11.94,25.98a6.074,6.074,0,0,1,1.425,1.77c.315.66.24.7-.465.7-1.86,0-4.185-1.455-5.7-2.415L5.685,28.59c2.3,1.41,6.135,3.615,8.94,2.685M31.26,7.875a.833.833,0,0,0,0-1.185L29.31,4.74a.843.843,0,0,0-1.17,0L26.61,6.27l3.12,3.12M16.5,16.38V19.5h3.12l9.225-9.225-3.12-3.12Z"
            transform="translate(-3.002 -4.504)"
            fill="gray"
          />
        </svg>
        <p class="wrapper-sidebar__links-text">Design & Theme</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "WrapperSidebar",
  data() {
    return {
      questionCategory: [
        { name: "Kick-off Question" },
        { name: "Follow-up Question" },
        { name: "Thank you Page" },
        { name: "Transfer to Form" },
      ],

      questionType: [
        { name: "Open" },
        { name: "Multiple Choice" },
        { name: "Multi Selector" },
        { name: "Specials" },
      ],
    };
  },
};
</script>

<style lang="scss">
.wrapper-sidebar {
  position: relative;
  flex-shrink: 0;

  width: 214px;
  padding: 44px 0 20px;

  border-right: 1px solid #ebebeb;
  box-shadow: 0 1px 16px rgba(#000000, 0.12);
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 140px;
  }

  &__title {
    margin-bottom: 6px;

    color: #808080;
    font-size: 13px;
    line-height: 14px;
    font-weight: 700;
    text-align: center;
  }

  &__canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translateX(50%);

    padding: 8px;

    color: #808080;
    background-color: #fff;
    font-size: 11px;
    line-height: 12px;
    border-radius: 8px;
    text-decoration: none;

    &::after {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 50%;
      display: block;
      width: 50%;
      height: 100%;
      box-shadow: 8px 1px 16px rgba(#000000, 0.12);
      content: "";
      border-radius: 8px;
    }

    & svg {
      margin-left: 5px;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 3px 10px;
    margin: 10px;

    border-radius: 4px;
    border: 1px solid #808080;

    &:hover {
      background-color: #d9e0ff;
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 27px;
    height: 27px;

    background-color: #f8f8f8;
    border-radius: 50%;
  }

  &__text {
    margin-left: 10px;
    margin-right: auto;

    font-size: 11px;
    line-height: 12px;
  }

  &__sep {
    height: 1px;
    background-color: #ebebeb;
    margin-bottom: 15px;
  }

  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    padding: 0 10px;
    margin-top: 20px;

    text-align: center;
    text-decoration: none;

    &-item {
      text-decoration: none;
    }

    &-text {
      font-size: 11px;
      line-height: 12px;
      color: #aab3c0;
    }
  }
}
</style>