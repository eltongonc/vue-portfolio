<template>
    <section id="portfolio" class="portfolio section">
      <div class="container">
        
        <diV class="row d-flex justify-content-center">
          <h2 class="section-title">Projects</h2>
        </div>

        <div class="filters">
          <ul>
            <li 
              v-for="(val, key) in options.getFilterData" 
              :key="key" @click="filter(key)"
              :class="[key === filterOption ? 'active' : '']">
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
              v-images-loaded:on.progress="layout"
              class="row"
            >
              <div v-for="(item, key) in items.slice(0, amount)" :class="[item.category, 'col-sm-4', 'item__summary']" :key="key">
                <div class="relative">
                  <router-link :to="`/projects/${item.urlTitle}`">
                    <div class="thumb">
                      <div class="overlay overlay-bg">
                        <h4>{{item.title}}</h4>
                      </div>
                      <img class="image img-fluid" :src="item.image_small" alt=""/>
                    </div>
                  </router-link>
                </div>
              </div>
            </isotope>
        </div>
      </div>
    </section>
</template>

<script>
import isotope from 'vueisotope'
import imagesLoaded from 'vue-images-loaded'

import workList from "../../assets/allwork.js";

export default {
  props: ["amount"],
  name: "Portfolio",
  components: {
    isotope,
  },
  directives: {
      imagesLoaded
  },
  data() {
    return { 
      items: workList,
      selected: null,
      filterOption: "websites",
      options: {
        itemSelector: '.all',
        percentPosition: true,
        columnWidth: '.all',
        getFilterData: {
          "websites": () => {
            return true
          },
          "prototyping": (el) => {
            return el.category === 'prototyping';
          },
          "webapp": (el) => {
            return el.category === 'webapp';
          },
        }
      }
    };
  },
  methods: {
    filter(key) {
        this.$refs.cpt.filter(key);
    },
    layout () {
        this.$refs.cpt.layout('masonry');
    }  
  }
};
</script>