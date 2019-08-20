<template>
  <div id="app">
    <vueHeader></vueHeader>
      <router-view></router-view>
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import vueHeader from "./components/partials/Header";
import vueFooter from "./components/partials/Footer";

export default {
  name: "app",
  components: {
    vueHeader,
    vueFooter
  }
};
</script>

<style lang="scss" src="./assets/scss/root.scss"></style>
