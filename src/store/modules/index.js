const portfolio = require("../../assets/projects");

const state = {
  portfolio
};

// All getters
const getters = {
  portfolioItems: state => state.portfolio
};

// All actions
const actions = {
  getAllItems() {
    return state.portfolio;
  },
  getItem({ commit, state }, portfolioItem) {
    if (portfolioItem.id) {
      const item = state.portfolio.find(item => item.id === portfolioItem.id);
      return item;
    }
  },

  setItem({ commit, state }, portfolioItem) {
    commit("setItem", portfolioItem);
  }
};

// mutations
const mutations = {
  setItem(state, items) {
    state.portfolio.push(items);
  },
  getItem(state, title) {
    return state.portfolio.find(item => item.id === title);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
