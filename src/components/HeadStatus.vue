<template>
  <div class="head">
    <div class="head-type">
      <div class="head-type__title">Type of template:</div>

      <MainSelect
        :list="listTemplates"
        @selectItem="selectItem"
        width="header"
      />
    </div>

    <div class="head-name">
      <div class="header-name__text">Feedback Form – Name</div>
      <i class="fas fa-edit"></i>
    </div>

    <div class="head-status">
      <i class="fas fa-check-circle"></i>
      <div class="head-status__text">Saving in Progress</div>
    </div>

    <div class="head-btns">
      <button class="head-btns__item btn" @click="showAlert('Cancel')">
        Cancel
      </button>

      <button class="head-btns__item btn btn--white" @click="showAlert('Save')">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import MainSelect from "../components/Base/MainSelect.vue";

export default {
  name: "HeadStatus",
  components: {
    MainSelect,
  },
  data() {
    return {
      template: "Pre-Review",

      listTemplates: ["Pre-Review", "Pre-Review", "some"],
    };
  },
  methods: {
    showAlert(text) {
      alert(text);
    },

    selectItem(index) {
      this.template = this.listTemplates[index];
    },
  },
};
</script>

<style lang="scss">
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 102px;
  padding: 20px 40px;

  background-color: #fff;

  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;

    height: auto;
    padding: 15px 20px;

    text-align: center;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;

    padding: 12px 15px;
  }

  &-type {
    display: flex;
    align-items: center;

    @media (max-width: 760px) {
      grid-column: 1 / -1;
    }

    &__title {
      margin-right: 12px;

      font-size: 14px;
      line-height: 19px;
      font-weight: 700;
    }
  }

  &-name {
    display: flex;
    align-items: center;

    @media (max-width: 760px) {
      grid-column: 1 / -1;
    }

    &__text {
      font-size: 24px;
      line-height: 30px;
      font-weight: 500;
    }

    & i {
      margin-left: 40px;

      font-size: 15px;
      color: #808080;
    }
  }

  &-status {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #808080;

    & i {
      margin-bottom: 6px;

      font-size: 25px;
    }

    &__text {
      font-size: 11px;
      line-height: 12px;
    }
  }

  &-btns {
    display: flex;
    justify-content: center;
    
    &__item ~ &__item {
      margin-left: 20px;
    }
  }
}

.btn {
  width: 100px;
  padding: 8px 15px;

  font-family: "Open Sans";
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
  color: var(--primary);
  background-color: transparent;
  border: 1px solid var(--primary);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  &--white {
    color: #fff;
    background-color: var(--primary);
  }
}
</style>