<template>
  <p class="learm-more">
    Want to learn more about how our Logic Jump feature works?
    <a href="#" class="learm-more__link">Click here.</a>
  </p>
</template>

<script>
export default {
  name: "LearnMore",
};
</script>

<style lang="scss">
.learm-more {
  margin: 0 auto 20px;
  width: 200px;

  font-size: 8px;
  line-height: 11px;
  text-align: center;
  color: #808080;

  @media (max-width: 500px) {
    width: 100%;
  }

  &__link {
    color: var(--primary);
  }
}
</style>