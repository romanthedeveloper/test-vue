<template>
  <div class="design">
    <h2 class="design__title">Design & Theme</h2>
    <hr />

    <h4 class="design__subtitle">Theme in use:</h4>
    <MainInputText v-model="proceed" />
    <hr />

    <div class="design__font">
      <h4 class="design__font--title">Font</h4>
      <MainSelect :list="listFonts" @selectItem="selectItem" />
    </div>
    <hr />

    <h4 class="design__subtitle">Theme Colours</h4>

    <div class="design__select">
      <h5 class="design__select-title">Questions</h5>
      <MainSelect :list="listFonts" @selectItem="selectItem" />
    </div>
    <div class="design__select">
      <h5 class="design__select-title">Answers</h5>
      <MainSelect :list="listFonts" @selectItem="selectItem" />
    </div>
    <div class="design__select">
      <h5 class="design__select-title">Buttons</h5>
      <MainSelect :list="listFonts" @selectItem="selectItem" />
    </div>
    <div class="design__select">
      <h5 class="design__select-title">Background</h5>
      <MainSelect :list="listFonts" @selectItem="selectItem" />
    </div>
    <hr />

    <div class="design__drop">
      <h4 class="design__drop-title">Background Image</h4>
      <svg
        id="__TEMP__SVG__"
        xmlns="http://www.w3.org/2000/svg"
        width="27.842"
        height="26.45"
        viewBox="0 0 27.842 26.45"
        class="design__drop-icon"
      >
        <path
          id="Контур_505"
          data-name="Контур 505"
          d="M5.784,7.284h18.1v9.745h2.784V7.284A2.786,2.786,0,0,0,23.882,4.5H5.784A2.786,2.786,0,0,0,3,7.284V23.99a2.786,2.786,0,0,0,2.784,2.784H16.921V23.99H5.784Z"
          transform="translate(-3 -4.5)"
          fill="gray"
        />
        <path
          id="Контур_506"
          data-name="Контур 506"
          d="M11.676,16.284,7.5,21.853H22.813L17.245,13.5l-4.176,5.568Z"
          transform="translate(-3.324 -5.147)"
          fill="gray"
        />
        <path
          id="Контур_507"
          data-name="Контур 507"
          d="M27.961,21H25.176v4.176H21v2.784h4.176v4.176h2.784V27.961h4.176V25.176H27.961Z"
          transform="translate(-4.295 -5.687)"
          fill="gray"
        />
      </svg>

      <MainButton text="Remove" small />
    </div>

    <div class="design__range">
      <div class="design__range-text">Set Brightness</div>
      <div class="design__range-wrap">
        <input
          type="range"
          v-model="brightness"
          min="1"
          max="100"
          class="design__range-input"
          :style="{background: `linear-gradient(90deg, var(--primary) ${brightness}%, #ebebeb ${brightness}%)`}"
        />
      </div>
    </div>

    <div class="design__btns">
      <MainButton text="Cancel" color="white" @clickBtn="alertText('Cancel')" />

      <MainButton text="Save" @clickBtn="alertText('Save')" />
    </div>
  </div>
</template>

<script>
import MainInputText from "../components/Base/MainInputText.vue";
import MainButton from "../components/Base/MainButton.vue";
import MainSelect from "../components/Base/MainSelect.vue";

export default {
  components: { MainInputText, MainButton, MainSelect },
  name: "DesignAndTheme",
  data() {
    return {
      proceed: "",
      font: "Open Sans",
      brightness: 20,

      listFonts: ["Open Sans", "Roboto"],
    };
  },
  methods: {
    selectItem(index) {
      this.type = this.listFonts[index];
    },
    alertText(text) {
      alert(text)
    }
  },
};
</script>

<style lang="scss">
.design {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 100%;

  &__title {
    margin-bottom: 8.5px;

    color: #050038;
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
  }

  &__subtitle {
    margin-bottom: 15px;

    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    color: #808080;
  }

  &__font {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &--title {
      margin-right: 20px;

      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      color: #808080;
    }
  }

  & hr {
    width: calc(100% + 20px);
    margin: 22px -10px;

    background-color: #ebebeb;
    color: #ebebeb;
  }

  &__btns {
    align-self: flex-end;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;

    & > * {
      margin-left: 15px;
    }
  }

  &__select {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 12px;

    &-title {
      width: 110px;

      font-size: 12px;
      line-height: 13px;
      font-weight: 400;
    }
  }

  &__drop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    &-title {
      color: #808080;
      font-size: 12px;
      line-height: 13px;
      font-weight: 700;
    }

    &-icon {
      margin-left: 20px;
      margin-right: auto;
    }
  }

  &__range {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 25px;

    &-input {
      appearance: none;
      position: relative;
      z-index: 2;

      height: 3px;
      background-color: #ebebeb;

      &::-webkit-slider-thumb {
        appearance: none;
        height: 12px;
        width: 12px;
        background-color: #fff;
        border: 1px solid var(--primary);
        border-radius: 50%;
      }
    }

    &-wrap {
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        position: absolute;
        width: 12px;
        height: 12px;
        top: 50%;
        left: 0px;
        transform: translate(-100%, -50%);

        background-color: var(--primary);
        border-radius: 50%;
        content: "";
      }

      &::before {
        position: absolute;
        width: 12px;
        height: 12px;
        top: 50%;
        right: 0px;
        transform: translate(0, -50%);

        background-color: #ebebeb;
        border-radius: 50%;
        content: "";
      }
    }

    &-text {
      margin-right: 20px;

      font-size: 12px;
      line-height: 13px;
      font-weight: 400;
    }
  }
}
</style>