// Dependencies
import Vue from "vue";
import Vuex from "vuex";

// modules
import module from "./modules";

// Store setup
Vue.use(Vuex);

// Make store available for the main app
export const store = new Vuex.Store({
  modules: {
    module
  }
});
