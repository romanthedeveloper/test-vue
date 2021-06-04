<template>
  <div class="main">
    <div class="main__left">
      <WrapperSidebar />

      <div class="main-content">
        <slot></slot>
      </div>
    </div>

    <div class="main__right">
      <div class="main-nav">
        <div class="main-nav__link">
          <i class="fas fa-caret-left"></i>
          See previous question
        </div>

        <div class="main-nav__link">
          See next question
          <i class="fas fa-caret-right"></i>
        </div>

        <div class="main-nav__item">
          <i class="far fa-clone"></i>
          Duplicate Question
        </div>

        <div class="main-nav__item">
          <i class="fas fa-th"></i>
          Save question as template
        </div>

        <div class="main-nav__item">
          <i class="far fa-eye"></i>
          Preview this form
        </div>
      </div>

      <div class="main-step">
        <div class="main-step__wrap">
          <h3 class="main-step__title">Follow-up Question 2 of 5</h3>

          <p class="main-step__description">
            <span>Question</span>: Sorry to hear that you have not yet received
            your purchase. Do you know where your shipment is?
          </p>

          <div class="main-step__blue">
            <h5 class="main-step__blue--title">1. Multiple choice question</h5>
            <p class="main-step__blue--text">
              Yes, according to the T&T link it’s on its way to me
            </p>
          </div>

          <div class="main-step__blue">
            <h5 class="main-step__blue--title">
              2. Multiple choice question 2
            </h5>
            <p class="main-step__blue--text">No</p>
          </div>

          <a href="#" class="main-step__link">Add Choice</a>

          <p class="main-step__text">
            Next step based on logic jump: Follow-up question 3 OR Thank you
            Page 1
          </p>

          <div class="main-step__warning">
            <i class="fas fa-exclamation-triangle"></i>
            Warning: Question 1 has not yet been fully mapped out
          </div>

          <div class="main-step__warning">
            <i class="fas fa-exclamation-triangle"></i>
            Warning: Question 2 has not yet been fully mapped out
          </div>
        </div>
      </div>

      <WrapperNavigation />
    </div>
  </div>
</template>

<script>
import WrapperSidebar from "@/components/Wrapper/Sidebar.vue";
import WrapperNavigation from "@/components/Wrapper/Navigation.vue";

export default {
  name: "MainWrap",
  components: { WrapperSidebar, WrapperNavigation },
};
</script>

<style lang="scss">
.main {
  flex-grow: 1;

  display: grid;
  grid-template-columns: minmax(600px, 1fr) 1fr;
  gap: 15px;

  margin: 12px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  &__left {
    display: flex;
    justify-content: space-between;

    height: 100%;

    background-color: #fff;
    box-shadow: 0px 1px 16px #0000001f;
    border-radius: 10px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #fff;
    box-shadow: 0px 1px 16px #0000001f;
    border-radius: 10px;
  }

  &-content {
    flex-grow: 1;

    padding: 40px 30px 20px 40px;

    @media (max-width: 600px) {
      padding: 35px 15px 10px 20px;
    }
  }

  &-nav {
    // display: grid;
    // grid-template-columns: repeat(2, auto), repeat(3, 1fr);
    // grid-template-rows: repeat(2, auto);
    // justify-content: space-between;
    // justify-content: center;
    // align-items: center;

    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 15px 30px;
    justify-content: center;
    align-items: center;
    // margin: 0 auto;

    // display: flex;
    // flex-direction: column;

    padding: 15px;

    border-bottom: 1px solid #ebebeb;

    @media (max-width: 600px) {
      gap: 10px 10px;
    }

    & > *:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    & > *:nth-child(2) {
      grid-column: 2 / 4;
      grid-row: 1 / 2;
      text-align: right;
    }

    // &__top {
    //   display: flex;
    //   justify-content: space-between;

    //   margin-bottom: 10px;
    // }

    // &__bottom {
    //   display: inline-grid;
    //   grid-template-columns: repeat(3, auto);
    //   gap: 30px;
    //   justify-content: center;
    //   align-items: center;
    //   margin: 0 auto;
    // }

    &__item,
    &__link {
      color: #808080;
      font-size: 11px;
      line-height: 12px;
    }

    &__item {
      padding: 12px 6px;

      border: 1px solid #808080;
      border-radius: 4px;
    }
  }

  &-step {
    &__wrap {
      max-width: 440px;
      padding: 40px 20px;
      margin: 0 auto;
    }

    &__title {
      margin-bottom: 18px;

      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }

    &__description {
      margin-bottom: 20px;

      font-size: 14px;
      line-height: 19px;

      & span {
        font-weight: 700;
      }
    }

    &__text {
      margin-bottom: 20px;

      font-size: 11px;
      line-height: 12px;

      & span {
        font-weight: 700;
      }
    }

    &__link {
      display: inline-block;

      margin-bottom: 29px;

      color: #050038;
      text-decoration: underline;
      font-size: 11px;
      line-height: 12px;
    }

    &__warning {
      display: flex;
      align-items: center;

      margin-top: 17px;

      font-size: 11px;
      line-height: 12px;

      & i {
        margin-right: 10px;

        color: red;
        font-size: 40px;
        line-height: 48px;
      }
    }

    &__blue {
      padding: 8px 15px;
      margin-bottom: 13px;

      color: #fff;
      background-color: var(--primary);
      text-align: center;
      border-radius: 4px;

      &--title {
        font-size: 11px;
        line-height: 12px;
        font-weight: 700;
      }

      &--text {
        font-size: 9px;
        line-height: 12px;
      }
    }
  }
}
</style>