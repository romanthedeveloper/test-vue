<template>
  <header class="header">
    <router-link to="/" class="header-logo">
      <svg
        id="Сгруппировать_913"
        data-name="Сгруппировать 913"
        xmlns="http://www.w3.org/2000/svg"
        width="39.848"
        height="37.131"
        viewBox="0 0 39.848 37.131"
      >
        <circle
          id="Эллипс_300"
          data-name="Эллипс 300"
          cx="7.245"
          cy="7.245"
          r="7.245"
          fill="#4262ff"
        />
        <circle
          id="Эллипс_301"
          data-name="Эллипс 301"
          cx="7.245"
          cy="7.245"
          r="7.245"
          transform="translate(25.358)"
          fill="#4262ff"
        />
        <circle
          id="Эллипс_302"
          data-name="Эллипс 302"
          cx="3.623"
          cy="3.623"
          r="3.623"
          transform="translate(23.546 15.396)"
          fill="#4262ff"
        />
        <circle
          id="Эллипс_303"
          data-name="Эллипс 303"
          cx="3.623"
          cy="3.623"
          r="3.623"
          transform="translate(9.056 15.396)"
          fill="#4262ff"
        />
        <circle
          id="Эллипс_304"
          data-name="Эллипс 304"
          cx="3.623"
          cy="3.623"
          r="3.623"
          transform="translate(16.301 3.623)"
          fill="#4262ff"
        />
        <circle
          id="Эллипс_305"
          data-name="Эллипс 305"
          cx="7.245"
          cy="7.245"
          r="7.245"
          transform="translate(12.679 22.641)"
          fill="#4262ff"
        />
      </svg>
      Logo
    </router-link>

    <div class="header-search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.465"
        height="15.331"
        viewBox="0 0 15.465 15.331"
        class="header-search__icon"
      >
        <g id="Layer_2" data-name="Layer 2" transform="translate(0 1.274)">
          <g id="invisible_box" data-name="invisible box">
            <rect
              id="Прямоугольник_1410"
              data-name="Прямоугольник 1410"
              width="12.8"
              height="12.8"
              fill="none"
            />
          </g>
          <g
            id="icons_Q2"
            data-name="icons Q2"
            transform="translate(-0.953 -2.32)"
          >
            <path
              id="Контур_471"
              data-name="Контур 471"
              d="M11.4,10.291A5.66,5.66,0,0,0,12.55,6.123,5.813,5.813,0,0,0,7.273,1.075,5.746,5.746,0,1,0,6.125,12.509,5.851,5.851,0,0,0,10.332,11.4l4.78,4.742a.727.727,0,0,0,1.071,0h0a.727.727,0,0,0,0-1.071ZM7.54,10.98A4.206,4.206,0,0,1,2.722,6.085a4.13,4.13,0,0,1,3.4-3.4,4.168,4.168,0,0,1,4.857,4.857A4.245,4.245,0,0,1,7.54,10.98Z"
              fill="#050038"
            />
          </g>
        </g>
      </svg>

      <input type="text" placeholder="Search" class="header-search__input" />
    </div>

    <div class="header-acc">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        class="header-acc__icon"
      >
        <defs>
          <pattern
            id="pattern"
            width="1"
            height="1"
            viewBox="3.71 3.777 30.58 30.58"
          >
            <image
              preserveAspectRatio="xMidYMid slice"
              width="38"
              height="38.134"
              xlink:href="data:image/png;base64,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"
            />
          </pattern>
        </defs>
        <rect id="Avatar" width="38" height="38" rx="19" fill="url(#pattern)" />
      </svg>

      <div class="header-acc__text">blositive.nl</div>

      <svg
        id="small-down"
        xmlns="http://www.w3.org/2000/svg"
        width="8.8"
        height="5.6"
        viewBox="0 0 8.8 5.6"
        class="header-acc__arrow"
      >
        <path
          id="Контур_26"
          data-name="Контур 26"
          d="M7,10.2,2.6,5.753,3.741,4.6,7,7.894,10.259,4.6,11.4,5.753Z"
          transform="translate(-2.6 -4.6)"
          fill="#050038"
        />
      </svg>
    </div>

    <div class="header__separator"></div>

    <div class="header-avatar">
      <div class="header-avatar__img"></div>

      <div class="header-avatar__text">Customer</div>

      <svg
        id="small-down"
        xmlns="http://www.w3.org/2000/svg"
        width="8.8"
        height="5.6"
        viewBox="0 0 8.8 5.6"
        class="header-avatar__arrow"
      >
        <path
          id="Контур_26"
          data-name="Контур 26"
          d="M7,10.2,2.6,5.753,3.741,4.6,7,7.894,10.259,4.6,11.4,5.753Z"
          transform="translate(-2.6 -4.6)"
          fill="#050038"
        />
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 72px;
  padding: 0 15px 0 45px;
  margin-bottom: 1px;

  background-color: #fff;
  box-shadow: 1px 1px 1px #e6e6e6;

  @media (max-width: 500px) {
    padding: 0 10px 0 10px;
  }

  &-logo {
    display: flex;
    align-items: center;

    color: var(--primary);
    font-size: 21px;
    line-height: 28px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

    @media (max-width: 600px) {
      font-size: 0;
    }

    & svg {
      margin-right: 8px;
    }
  }

  &-search {
    position: relative;

    margin-left: 90px;

    @media (max-width: 600px) {
      margin-left: 20px;
    }

    &__input {
      width: 263px;
      padding: 8px 20px 8px 40px;

      font-size: 12px;
      line-height: 17px;
      border-radius: 10px;
      border: 1px solid #ebebeb;

      @media (max-width: 600px) {
        width: 100px;
        padding: 6px 8px 6px 25px;
      }
    }

    &__icon {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);

      @media (max-width: 600px) {
        left: 5px;
      }
    }
  }

  &-acc {
    display: flex;
    align-items: center;

    margin-left: auto;

    &__icon {
      width: 38px;
      height: 38px;

      margin-right: 6px;
      margin-left: 10px;
    }

    @media (max-width: 600px) {
      &__text {
        display: none;
      }
    }

    &__arrow {
      margin-left: 7px;
    }
  }

  &__separator {
    width: 1px;
    height: 22px;

    margin: 0 11px;

    background-color: #ebebf2;
  }

  &-avatar {
    display: flex;
    align-items: center;

    &__img {
      width: 38px;
      height: 38px;

      margin-right: 6px;

      background-color: #ccc;
      border-radius: 50%;
    }

    @media (max-width: 600px) {
      &__text {
        display: none;
      }
    }

    &__icon {
      width: 38px;
      height: 38px;

      margin-right: 6px;
    }

    &__arrow {
      margin-left: 7px;
    }
  }
}
</style>