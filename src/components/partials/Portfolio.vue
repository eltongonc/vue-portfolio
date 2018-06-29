<template>
    <section id="portfolio" class="portfolio">

        <h2 class="title" v-if="amount">Portfolio</h2>

        <!-- if an amount is not set -->
        <div class="portfolio__inner" v-if="!amount">

            <!-- filtes for the items -->
            <div class="item__filter">
                <button id="toggle_all" v-on:click="filterItems" class="filter__button filter__button--active">All</button>
                <button id="toggle_code" v-on:click="filterItems" class="filter__button">Code</button>
                <button id="toggle_visual" v-on:click="filterItems" class="filter__button">Visual</button>
            </div>

            <!-- the portfolio items -->
            <div class="portfolio__items">
              <a v-for="(item, index) in items" :key="index" class="item" :href="`/work/${item.urlTitle}`">
                  <div class="item__image" :style="`background-image: url(${item.image_small})`"></div>
                  <div class="item__summary">
                      <h3 class="summary__title">{{item.title}}</h3>
                      <p class="summary__text">{{item.summary}}</p>
                  </div>
              </a>
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
            
            <!-- the portfolio items -->
            <div class="portfolio__items">
              <a v-for="(item, index) in items.slice(0, amount)" :key="index" class="item" :href="`/portfolio/${item.urlTitle}`">
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
import workList from "../../assets/allWork.js";

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
      this.items = workList.reduce((result, item, key) => {
        if (selector === "all") {
          result.push(item)
        } else if(item.tags.includes(selector)){
          result.push(item)
        }
        return result;
      }, []);

      // update selected class
      document.querySelectorAll(".filter__button").forEach(element => {
        element.classList.remove("filter__button--active");
      });
      button.classList.add("filter__button--active");
    }
  }
};
</script>

<style lang="scss">
$grid-large: 65rem;
$grid-medium: 50rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;
$light_grey: #ededed;

$dark_boxshadow: 0 0 10rem -2rem #000;
$dark_boxshadow_large: 0 0 1rem 0rem #000;
$dark_boxshadow_medium: 0 0 5rem -2rem #000;

.portfolio {
  padding: 5em 0;
  .portfolio__inner {
    min-height: auto;
    max-width: $grid-large;
    margin: 0 auto;
    box-sizing: border-box;

    .item__filter {
      min-width: 100%;
      line-height: 200%;
      margin-bottom: 2rem;

      .filter__button {
        border: 0;
        border-radius: 0.3rem;
        padding: 1rem 2rem;
        background: $red;
        color: white;
        text-decoration: none;
        font-weight: bold;
        box-shadow: $dark_boxshadow_medium;
        &.filter__button--active {
          background: $green;
          color: $red;
        }
      }
    }

    .portfolio__items {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .item {
        box-shadow: $dark_boxshadow_medium;
        display: block;
        align-self: flex-start;
        margin: 0.2rem;
        min-width: 20rem;
        height: 16rem;
        overflow: hidden;
        flex-grow: 1;
        overflow: hidden;
        position: relative;
        border-radius: 0.3rem;
        background: $green;
        list-style: none;
        color: #333;

        .item__image,
        img {
          display: block;
          height: 100%;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          transition: 0.3s ease-in-out;
        }

        .item__summary {
          width: 100%;
          background-color: $green;
          line-height: 5rem;
          position: absolute;
          margin: 0;
          transition: 0.4s ease-in-out;
          height: inherit;
          bottom: 0;
          transform: translateY(20rem);
          .summary__text {
            text-align: left;
            padding: 0 2rem;
          }
          h3,
          p {
            max-width: $grid-medium;
            margin: 0 auto;
          }
        }

        &:first-child {
          min-width: 30rem;
          flex-grow: 20;
        }
        &:nth-child(6) {
          min-width: 30rem;
        }
        &:last-child {
          min-width: 2rem;
        }
        &:hover {
          .item__image,
          img {
            transform: translateY(-5rem);
          }
          .item__summary {
            transform: translateY(0rem);
          }
        }
        &.item--more {
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: none;
          background-color: transparent;
          text-decoration: none;
          color: white;
          h3 {
            transition: 0.3s;
            background: $red;
            padding: 1rem;
            border-radius: 0.3rem;
            &:hover {
              background: $green;
              color: $dark_grey;
            }
          }
        }
      }
    }
  }
  @media (max-width: 50em) {
    .portfolio__inner {
      justify-content: center;
      padding: 1rem;
      .portfolio__items {
        .item {
          margin: 1rem 0.4rem;
          height: 18rem;
          &:first-child,
          &:nth-child(6),
          &:last-child {
            min-width: 18rem;
            flex-grow: 1;
          }
          &.item--more {
            margin: 0;
            h3 {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
