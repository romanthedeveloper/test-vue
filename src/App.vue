<template>
  <div id="app">
    <Header />
    <HeadStatus />
    <MainWrap>
      <router-view />
    </MainWrap>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HeadStatus from "@/components/HeadStatus";
import MainWrap from "@/components/MainWrap";

export default {
  components: {
    Header,
    HeadStatus,
    MainWrap,
  },
};
</script>

<style lang="scss">
:root {
  --primary: #4262ff;
  --green: green;
  --error: red;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  font-family: 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f8f8f8;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
