<template>
  <div class="logic">
    <h2 class="logic__title">Logic Jump</h2>
    <div class="logic__separator"></div>

    <h4 class="logic__subtitle">Jump from question:</h4>
    <MainSelect
      :list="listQuestions"
      @selectItem="selectQuestion"
      width="full"
    />
    <div class="logic__separator"></div>

    <div class="logic__add">
      <h4 class="logic__add-title">
        Move the Respondent to a specific next question based on a rule
      </h4>
      <button class="logic__add-button">Add logic jump</button>
    </div>
    <div class="logic__separator"></div>

    <div class="logic__answer">
      <h4 class="logic__answer-title">IF answer is</h4>
      <MainSelect :list="listAnswer" @selectItem="selectJump" width="small" />
      <div class="logic__answer-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          class="logic__answer-plus"
        >
          <path
            id="Контур_532"
            data-name="Контур 532"
            d="M12,6A6,6,0,1,1,6,0a6,6,0,0,1,6,6ZM6.375,3a.375.375,0,0,0-.75,0V5.625H3a.375.375,0,0,0,0,.75H5.625V9a.375.375,0,0,0,.75,0V6.375H9a.375.375,0,0,0,0-.75H6.375Z"
            fill="gray"
            fill-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          class="logic__answer-minus"
        >
          <path
            id="minus-circled"
            d="M8.25,2.25a6,6,0,1,0,6,6A6,6,0,0,0,8.25,2.25Zm3.429,6.429H4.821V7.821h6.857Z"
            transform="translate(-2.25 -2.25)"
            fill="grey"
          />
        </svg>
      </div>
    </div>
    <div class="logic__separator"></div>

    <h4 class="logic__subtitle">In ALL other cases jump to:</h4>
    <MainSelect :list="listJump" @selectItem="selectJump" width="full" />

    <div class="logic__separator mt-a"></div>
    <LearnMore />

    <div class="logic__btns">
      <MainButton text="Cancel" color="white" @clickBtn="alertText('Cancel')" />

      <MainButton text="Save" @clickBtn="alertText('Save')" />
    </div>
  </div>
</template>

<script>
import MainButton from "../components/Base/MainButton.vue";
import MainSelect from "../components/Base/MainSelect.vue";
import LearnMore from "../components/Wrapper/LearnMore.vue";

export default {
  name: "LogicJump",
  components: {
    MainButton,
    MainSelect,
    LearnMore,
  },
  data() {
    return {
      question: "",
      jump: "",

      listQuestions: [
        "FOQ-2: “Sorry to hear that you have not yet received your pur…",
        "Some",
      ],
      listJump: [" Choose question", "Some"],
      listAnswer: ["AND OR", "Some"],
    };
  },
  methods: {
    selectQuestion(index) {
      this.question = this.listQuestions[index];
    },
    selectJump(index) {
      this.jump = this.listJump[index];
    },
    alertText(text) {
      alert(text);
    },
  },
  mounted() {
    this.question = this.listQuestions[0];
    this.jump = this.listJump[0];
  },
};
</script>

<style lang="scss">
.logic {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 100%;

  & .mt-a {
    margin-top: auto;
  }

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

  &__separator {
    width: calc(100% + 20px);
    margin: 10px -10px;
    height: 1px;

    background-color: #ccc;
  }

  &__answer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media (max-width: 500px) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    &-wrap {
      display: flex;
    }

    &-title {
      width: 120px;

      font-size: 11px;
      line-height: 12px;
      font-weight: 400;
      color: #808080;

      @media (max-width: 500px) {
        width: auto;
      }
    }
    &-plus,
    &-minus {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 15px;

      width: 12px;
      height: 12px;

      cursor: pointer;
    }

    &-minus {
      margin-left: 12px;
    }
  }

  &__add {
    display: grid;
    grid-template-columns: 130px 60px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 500px) {
      grid-template-columns: auto;
    }

    &-title {
      font-size: 11px;
      line-height: 12px;
      font-weight: 400;
      color: #808080;
    }

    &-button {
      padding: 3px;
      font-size: 9px;
      line-height: 13px;
      background-color: #808080;
      color: #fff;
      border-radius: 8px;
      border: none;
    }
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