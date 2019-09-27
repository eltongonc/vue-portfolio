<template>
    <section id="skills" class="skills section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="section-title">Skills</h2>
              <p class="section-subtitle">{{ skillDesc[descriptionIndex] }}</p>
            </div>
          </div>
        </div>
        
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