<template>
    <section id="portfolio" class="portfolio">
        <!-- show only if amount is set -->
        <h2 class="title" v-if="amount">Latest projects</h2>

        <!-- if an amount is not set -->
        <div class="portfolio__inner" v-if="!amount">
            <!-- filtes for the items -->
            <div class="item__filter">
                <button id="toggle_code" v-on:click="filterItems" class="filter__button filter__button--active">Code</button>
                <button id="toggle_visual" v-on:click="filterItems" class="filter__button">Visual</button>
            </div>

            <!-- the portfolio items -->
            <div class="portfolio__items">
              <router-link v-for="(item, index) in items" :key="index" class="item" :to="`/portfolio/${item.urlTitle}`">
                  <div class="item__image" :style="`background-image: url(${item.image_small})`"></div>
                  <div class="item__summary">
                      <h3 class="summary__title">{{item.title}}</h3>
                      <p class="summary__text">{{item.summary}}</p>
                  </div>
              </router-link>

              <!-- a link to more projects -->
              <a href="https://github.com/eltongonc" class="item">
                  <img src="../../assets/github.svg" alt="">
                  <div class="item__summary">
                      <h3 class="summary__title">View more projects</h3>
                      <p class="summary__text">I have more project om my github page</p>
                  </div>
              </a>
            </div>

        </div><!--End portfolio__inner if-->


        <!-- if an amount is set. Show this -->
        <div class="portfolio__inner" v-else>
            
            <!-- portfolio items -->
            <div class="portfolio__items">
              <a v-for="(item, key) in items.slice(0, amount)" :key="key" class="item" :href="`/portfolio/${item.urlTitle}`">
                  <div class="item__image" :style="`background-image: url(${item.image_small})`"></div>
                  <div class="item__summary">
                      <h3 class="summary__title">{{item.title}}</h3>
                      <p class="summary__text">{{item.summary}}</p>
                  </div>
              </a>      

              <!-- a link to more projects -->
              <a href="/portfolio" class="item item--more">
                  <h3 class="summary__title">View all projects</h3>
              </a>
            </div>
        </div><!--End portfolio__inner else-->
    </section>
</template>

<script>
import workList from "../../assets/allwork.js";

export default {
  props: ["amount"],
  name: "Portfolio",
  data() {
    return { 
      items: workList 
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
    }
  }
};
</script>