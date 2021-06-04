<template>
  <div class="tags">
    <h2 class="tags__title">Merge Tags</h2>
    <hr />

    <h4 class="tags__subtitle">
      Which CRM data point do you want to into the form using a
      <b>Merge Tag?</b>
    </h4>
    <MainAccordion :accordionList="accordionList" />

    <hr class="mt-a" />
    <LearnMore />

    <div class="tags__btns">
      <MainButton text="Cancel" color="white" @clickBtn="alertText('Cancel')" />

      <MainButton text="Save" @clickBtn="alertText('Save')" />
    </div>
  </div>
</template>

<script>
import MainAccordion from "@/components/Base/MainAccordion.vue";
import LearnMore from "@/components/Wrapper/LearnMore.vue";
import MainButton from "@/components/Base/MainButton.vue";

export default {
  name: "Tags",
  components: { MainAccordion, LearnMore, MainButton },
  data() {
    return {
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
    };
  },
  methods: {
    alertText(text) {
      alert(text);
    },
  },
};
</script>

<style lang="scss">
.tags {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 100%;

  & .mt-a {
    margin-top: auto;
  }

  &__title {
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
  }

  & hr {
    width: calc(100% + 20px);
    margin: 9px -10px;

    color: #ebebeb;
    background-color: #ebebeb;
  }

  &__subtitle {
    margin-bottom: 6px;

    font-size: 11px;
    line-height: 12px;
    font-weight: 400;
    color: #808080;
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