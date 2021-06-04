<template>
  <div class="canvas-form">
    <!-- <div class="canvas-form__item">
      <div class="canvas-form__icon">?</div>
      <div class="canvas-form__text">Kick-off Question Question #1</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.683"
        height="12.002"
        viewBox="0 0 2.683 12.002"
        class="canvas-form__dots"
      >
        <g id="dots-vertical" transform="translate(-6.625 -2)">
          <path
            id="Контур_570"
            data-name="Контур 570"
            d="M8,3.333V3.34M8,8v.007m0,4.66v.007M8,4a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,4ZM8,8.667A.667.667,0,1,1,8.641,8,.667.667,0,0,1,8,8.667Zm0,4.667a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,13.334Z"
            fill="none"
            stroke="gray"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
        </g>
      </svg>
    </div>

    <div class="canvas-form__other">
      Other
    </div>

    <div class="canvas-form__item">
      <div class="canvas-form__icon">?</div>
      <div class="canvas-form__text">
        Move to Form #2 or #3 (product reviews)
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.683"
        height="12.002"
        viewBox="0 0 2.683 12.002"
        class="canvas-form__dots"
      >
        <g id="dots-vertical" transform="translate(-6.625 -2)">
          <path
            id="Контур_570"
            data-name="Контур 570"
            d="M8,3.333V3.34M8,8v.007m0,4.66v.007M8,4a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,4ZM8,8.667A.667.667,0,1,1,8.641,8,.667.667,0,0,1,8,8.667Zm0,4.667a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,13.334Z"
            fill="none"
            stroke="gray"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
        </g>
      </svg>
    </div>

    <div class="canvas-form__item">
      <div class="canvas-form__icon">?</div>
      <div class="canvas-form__text">Follow-up Question Follow-up #3</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.683"
        height="12.002"
        viewBox="0 0 2.683 12.002"
        class="canvas-form__dots"
      >
        <g id="dots-vertical" transform="translate(-6.625 -2)">
          <path
            id="Контур_570"
            data-name="Контур 570"
            d="M8,3.333V3.34M8,8v.007m0,4.66v.007M8,4a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,4ZM8,8.667A.667.667,0,1,1,8.641,8,.667.667,0,0,1,8,8.667Zm0,4.667a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,13.334Z"
            fill="none"
            stroke="gray"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
        </g>
      </svg>
    </div>

    <div class="canvas-form__item">
      <div class="canvas-form__icon">?</div>
      <div class="canvas-form__text">Follow-up Question Follow-up #1</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.683"
        height="12.002"
        viewBox="0 0 2.683 12.002"
        class="canvas-form__dots"
      >
        <g id="dots-vertical" transform="translate(-6.625 -2)">
          <path
            id="Контур_570"
            data-name="Контур 570"
            d="M8,3.333V3.34M8,8v.007m0,4.66v.007M8,4a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,4ZM8,8.667A.667.667,0,1,1,8.641,8,.667.667,0,0,1,8,8.667Zm0,4.667a.667.667,0,1,1,.641-.666A.667.667,0,0,1,8,13.334Z"
            fill="none"
            stroke="gray"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.333"
          />
        </g>
      </svg>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "CanvasForm",
};
</script>

<style lang="scss">
.canvas-form {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 50px 30px;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 170px;
    padding: 6px;

    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);

    &:first-child {
      background-color: #d9e0ff;
    }

    &:nth-child(3) {
      background-color: #cdccd7;
    }

    &:nth-child(4) {
      grid-column: 1 / 2;
    }
  }

  &__icon {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 27px;
    height: 27px;

    background-color: #fff;
    border-radius: 50%;
  }

  &__text {
    margin-left: 7px;
    margin-right: auto;

    font-family: Arial;
    font-size: 9px;
    line-height: 13px;
  }

  &__dots {
    margin-left: 15px;
  }
}
</style>