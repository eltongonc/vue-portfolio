// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueScrollTo from 'vue-scrollto';
// import VueHelmet from "vue-helmet";

import App from "./App";
import router from "./router";
import store from "./store";
import LazyLoadDirective from './directives/LazyLoadDirective';

Vue.config.productionTip = false;

Vue.use(VueScrollTo);
// Vue.use(VueHelmet);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.directive("lazyload", LazyLoadDirective);

/* eslint-disable no-new */
const vue = new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
