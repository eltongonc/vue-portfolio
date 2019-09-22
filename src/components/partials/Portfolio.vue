<template>
    <section id="portfolio" class="portfolio">
      <div class="container">

        <!-- show only if amount is set -->
        <diV class="row d-flex justify-content-center">
          <h2 class="section-title">Projects</h2>
        </div>


        <div class="filters">
          <ul>
            <li 
              v-for="(val, key) in options.getFilterData" 
              :key="key" @click="filter(key)"
              :class="[key===filterOption? 'active' : '']">
                {{key}}
            </li>
          </ul>
        </div>

        <div class="filters-content">
            <isotope 
              ref="cpt" 
              :list="items.slice(0, amount)" 
              :options="options"
              @filter="filterOption=arguments[0]"
              class="row grid"
            >
              <div v-for="(item, key) in items.slice(0, amount)" :class="[item.category, 'col-sm-4', 'item__summary']" :key="key">
                  <img class="image img-fluid" :src="item.image_small" alt=""/>
              </div>
            </isotope>
        </div>

        	
        <div>
          <h3 class="section-title">Your Project</h3>
          <p>Do you have a project in mind? Let’s work together to make the next project on this page yours.</p>
          <router-link class="primary-btn text-uppercase" to="/contact">Start a project</router-link>
        </div>
      </div>

    </section>
</template>

<script>
import isotope from 'vueisotope'

import workList from "../../assets/allwork.js";

export default {
  props: ["amount"],
  name: "Portfolio",
  components: {
    isotope,
  },
  data() {
    return { 
      items: workList,
      filterOption: "all",
      filterOption: "show all",
      options: {
        masonry: {
          itemSelector: '.all',
          percentPosition: true,
          columnWidth: '.all',
        },
        getFilterData: {
          "all": () => {
            return true
          },
          "prototyping": (el) => {
            return el.category === 'prototyping';
          },
          "webapp": (el) => {
            return el.category === 'webapp';
          },
          "website": (el) => {
            return el.category === 'website';
          },
        }
      }
    };
  },
  methods: {
    filterItems(e) {
      const button = e.target;
      const selector = button.id.split("_")[1];
      this.items = workList.filter((item) => item.tags.includes(selector) );

      // update selected class
      document.querySelectorAll(".filter__button").forEach(element => {
        element.classList.remove("filter__button--active");
      });
      button.classList.add("filter__button--active");
    },
    filter(key) {
        this.$refs.cpt.filter(key);
    }
  }
};
</script>