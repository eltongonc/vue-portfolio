<template>
	<section class="slideshow">
    <flickity class="carousel" ref="carousel" :options="flickOptions" >
      <div v-for="(item, index) in allImgs" :key="index" class="carousel-cell">
        <a><img :src="item.link" :alt="item.title"></a>
      </div>
    </flickity>

    <div class="modal">
      <button class="modal__button" v-on:click="closeModal">X</button>
      <div class="modal__content"></div>
      <div class="modal__overlay"></div>
    </div>
	</section>
</template>

<script>
import Flickity from "vue-flickity";
import { TimelineMax, TweenLite, TweenMax } from "gsap";

export default {
  props: ["data"],
  name: "Slideshow",
  components: {
    Flickity
  },
  data: function() {
    return {
      allImgs: this.data,
      image: this.data[0],
      lastImage: null,
      flickOptions: {
        lazyLoad: true,
        adaptiveHeight: true,
        prevNextButtons: false,

        cellAlign: "center",
        contain: false,
        resize: true,
        pageDots: false,
        groupCells: false,
        autoPlay: true
      }
    };
  },
  mounted() {
    const modal = document.querySelector(".modal");
    const modalOverlay = document.querySelector(".modal__overlay");
    const modalContent = document.querySelector(".modal__content");

    TweenMax.set([modalOverlay, modalContent, modal], { autoAlpha: 0 });

    this.$refs.carousel.on("staticClick", (event, pointer, image) => {
      this.openModal(image);
    });

    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.closeModal();
      }
    });
  },
  methods: {
    openModal: function(img) {
      const modal = document.querySelector(".modal");
      const newImg = this.getPosition(modal, img);
      const timeLine = new TimelineMax();
      this.lastImage = img;

      // create a starting point for the timeline
      TweenMax.set(".modal__content", {
        x: newImg.left,
        y: newImg.top,
        width: newImg.width,
        height: newImg.height
      });

      timeLine.to(modal, 0, {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        autoAlpha: 1
      });
      timeLine.to(".modal__overlay", 0.15, { autoAlpha: 0.75 });
      timeLine.to(".modal__content", 0.1, {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        autoAlpha: 1
      });

      // append content to dialog after timeLine is done
      document.querySelector(".modal__content").innerHTML = img.querySelector(
        "img"
      ).outerHTML;
    },
    closeModal() {
      const modal = document.querySelector(".modal");
      const newRect = this.getPosition(modal, this.lastImage);
      const timeLine = new TimelineMax();

      // i  think this stops tween in progress
      TweenMax.killTweensOf(".modal__content");

      timeLine.to(".modal__content", 0.3, {
        autoAlpha: 0,
        x: newRect.left,
        y: newRect.top,
        height: newRect.height,
        width: newRect.width
      });
      timeLine.to(".modal__overlay", 0.3, { autoAlpha: 0 });
      timeLine.to(".modal", 0.1, { autoAlpha: 0 });
    },
    getPosition(modal, image) {
      const imageRect = image.getBoundingClientRect();
      const modalEl = modal.getBoundingClientRect();

      TweenLite.set(modal, {
        x: 0,
        y: 0,
        width: imageRect.width,
        height: imageRect.height
      });

      const newRect = modal.getBoundingClientRect();

      TweenLite.set(modal, { width: modalEl.width, height: modalEl.height });

      return {
        left: imageRect.left - newRect.left,
        top: imageRect.top - newRect.top,
        width: newRect.width,
        height: newRect.height
      };
    }
  }
};
</script>