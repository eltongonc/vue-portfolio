<template>
    <section id="skills" class="skills">
        <h2 class="title">Skills</h2>
        <p class="subtitle">{{ skillDesc[descriptionIndex] }}</p>
        <Flickity ref="carousel" class="carousel" :options="flickOptions">
            <div v-for="(skill, index) in skills" :key="index" class="carousel-cell">
                <div :id="skill.id"></div>
                <span>{{skill.name}}</span>
            </div>
        </Flickity>
    </section>
</template>

<script>
import Flickity from "vue-flickity";

import skills from "../../assets/skills.js";

export default {
  name: "Skills",
  components: {
    Flickity
  },

  data() {
    return {
      flickOptions: {
        cellAlign: "center",
        contain: false,
        resize: true,
        pageDots: false,
        groupCells: false,
        autoPlay: true,
        prevNextButtons: false,
      },
      descriptionIndex: 0,
      skillDesc: [],
      skills
    };
  },

  mounted() {
    // Update the desciption of the selected skill when dragged
    this.$refs.carousel.on("scroll", () => {
      this.descriptionIndex = this.$refs.carousel.selectedIndex();
    });

    // Update the desciption of the selected skill when a skill is manually selected
    this.$refs.carousel.on("staticClick", (event, pointer, el, index) => {
      // If clicked area is not a html element return
      if (!el) return;

      // Get the previous selected element and remove it as selected
      const prevClickedCell = document.querySelector(".is-selected");
      if (prevClickedCell) {
        prevClickedCell.classList.remove("is-selected");
      }

      // Add the clicked html element style
      el.classList.add("is-selected");

      // Center the selected item and update the description
      this.$refs.carousel.flickity.select(index);
      this.descriptionIndex = index;
    });

    this.skills.forEach(skill => {
      // Add a svg image
      document.getElementById(skill.id).outerHTML = skill.svg;

      this.skillDesc.push(skill.skillDesc);
    });
  }
};
</script>

<style lang="scss">
$grid-medium: 32rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;
$light_grey: #ededed;

.hidden {
  opacity: 0 !important;
}

.skills {
  padding: 5em 0;
  width: 100%;
  position: relative;
  transition: 3s;

  .subtitle {
    padding: 0;
    max-width: 100%;
    text-align: center;
  }

  .carousel {
    outline: 0;
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    cursor: grab;

    .carousel-cell {
      margin: 0 0.5rem;
      box-shadow: 0 0 1.5rem 0rem $light_grey;
      width: 10rem;
      height: 6rem;
      border-radius: 0.3rem;
      color: white;
      font-weight: bold;
      background: $green;
      transition: 0.3s;
      opacity: 0.5;
      transform: scale(0.8);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 1rem;

      span {
        margin-top: 1rem;
      }

      &.is-selected {
        opacity: 1;
        transform: scale(1);
      }
    }

    .flickity-viewport {
      transition: height 0.2s;
      margin-bottom: 1rem;
    }

    .flickity-page-dots {
      bottom: -22px;
    }

    .flickity-page-dots .dot {
      height: 4px;
      width: 40px;
      margin: 0;
      border-radius: 0;
    }

    .flickity-page-dots .dot.is-selected {
      background: white;
    }
  }

  @media (max-width: 50em) {
    .subtitle {
      padding: 0;
      max-width: $grid-medium;
      text-align: left;
    }
  }
}
</style>
