<template>
  <div class="store">
    <h2 class="store__title">Store Answer</h2>
    <div class="store__separator" />

    <h4 class="store__subtitle">Selected question:</h4>
    <MainSelect :list="questionsList" @selectItem="selectItem" width="full" />
    <h4 class="store__subtitle">Select which answer you want to save:</h4>
    <BaseCheckbox v-model="week" title="1. In the next 7 days" />
    <BaseCheckbox v-model="twoWeeks" title="2. In the next 2 weeks" />
    <BaseCheckbox v-model="month" title="3. In a month or so" />
    <BaseCheckbox v-model="other" title="4. Other" />
    <div class="store__separator" />

    <h4 class="store__subtitle">
      Select CRM Parameter which is the destination for this stored answer
    </h4>
    <MainAccordion :accordionList="accordionList" />

    <div class="store__separator mt-a" />
    <LearnMore />

    <div class="store__btns">
      <MainButton text="Cancel" color="white" @clickBtn="alertText('Cancel')" />

      <MainButton text="Save" @clickBtn="alertText('Save')" />
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/Base/MainButton";
import MainAccordion from "@/components/Base/MainAccordion";
import MainSelect from "../components/Base/MainSelect.vue";
import BaseCheckbox from "../components/Base/BaseCheckbox.vue";
import LearnMore from "../components/Wrapper/LearnMore.vue";

export default {
  name: "Store",
  components: {
    MainButton,
    MainAccordion,
    MainSelect,
    BaseCheckbox,
    LearnMore,
  },
  data() {
    return {
      question: "",
      week: true,
      twoWeeks: true,
      month: true,
      other: false,

      accordionList: [
        {
          title: "Contact information (mail, mobile, etc.)",
          list: [
            {
              title: "First Name",
              value: false,
            },
            {
              title: "Last Name",
              value: false,
            },
            {
              title: "Full Name",
              value: false,
            },
            {
              title: "Age",
              value: false,
            },
            {
              title: "Gender",
              value: false,
            },
          ],
        },
        {
          title: "Personal Information (name, age, etc.)",
          list: [
            {
              title: "First Name",
              value: false,
            },
            {
              title: "Last Name",
              value: false,
            },
            {
              title: "Full Name",
              value: false,
            },
            {
              title: "Age",
              value: false,
            },
            {
              title: "Gender",
              value: false,
            },
          ],
        },
      ],
      questionsList: [
        "FOQ-2: “Sorry to hear that you have not yet received your pur…",
        "Other",
        "Some",
      ],
    };
  },
  methods: {
    selectItem(index) {
      this.question = this.questionsList[index];
    },
    alertText(text) {
      alert(text);
    },
  },
  mounted() {
    this.question = this.questionsList[0];
  },
};
</script>

<style lang="scss">
.store {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 100%;

  & .mt-a {
    margin-top: auto;
  }

  &__title {
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
    margin: 10px -10px;

    background-color: #ebebeb;
    color: #ebebeb;
  }

  &__separator {
    width: calc(100% + 20px);
    margin: 10px -10px;
    height: 1px;

    background-color: #ccc;
  }

  & .main-select {
    margin-bottom: 10px;
  }

  &__btns {
    align-self: flex-end;

    display: flex;
    justify-content: flex-end;
    align-items: center;

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