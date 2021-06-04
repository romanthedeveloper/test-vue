<template>
  <div class="setting">
    <h2 class="setting__title">Question settings</h2>
    <hr />

    <h4 class="setting__subtitle">Question Type</h4>
    <MainSelect :list="typeList" @selectItem="selectItem" />
    <hr />

    <InputCheckbox v-model="description" title="Add description?" />
    <hr />

    <h4 class="setting__subtitle">Proceed button text:</h4>
    <MainInputText v-model="proceed" :count="20" />
    <hr />

    <InputCheckbox v-model="randomise" title="Randomise Questions?" />
    <hr />

    <InputCheckbox v-model="multiple" title="Multiple Selection?" />
    <hr />

    <InputCheckbox v-model="other" title="‘Other’ answer option?" />

    <div class="setting__btns">
      <MainButton text="Cancel" color="white" @clickBtn="alertText('Cancel')" />

      <MainButton text="Save" @clickBtn="alertText('Save')" />
    </div>
  </div>
</template>

<script>
import MainSelect from "../components/Base/MainSelect.vue";
import InputCheckbox from "../components/Base/InputCheckbox.vue";
import MainInputText from "../components/Base/MainInputText.vue";
import MainButton from "../components/Base/MainButton.vue";

export default {
  components: { MainSelect, InputCheckbox, MainInputText, MainButton },
  name: "Settings",
  data() {
    return {
      type: "",
      description: false,
      proceed: "",
      randomise: true,
      multiple: false,
      other: false,

      typeList: ["Follow-up Question", "Other", "Some"],
    };
  },
  methods: {
    selectItem(index) {
      this.type = this.typeList[index];
    },
    alertText(text) {
      alert(text);
    },
  },
  mounted() {
    this.type = this.typeList[0];
  },
};
</script>

<style lang="scss">
.setting {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 100%;

  &__title {
    margin-bottom: 8.5px;

    color: #050038;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
  }

  &__subtitle {
    margin-bottom: 15px;

    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    color: #808080;
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

    @media (max-width: 460px) {
      flex-direction: column;
    }

    & > * {
      margin-left: 15px;

      @media (max-width: 460px) {
        margin-left: auto;
        margin-top: 15px;
      }
    }
  }
}
</style>