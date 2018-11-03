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



<style lang="scss" scoped>
$grid-medium: 32rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;
$light_grey: #ededed;

$light_boxshadow: 0 0 10rem -2rem $green;
$light_boxshadow_large: 0 0 1rem 0rem $green;
$light_boxshadow_medium: 0 0 5rem -2rem $green;

$dark_boxshadow: 0 0 10rem -2rem #000;
$dark_boxshadow_large: 0 0 1rem 0rem #000;
$dark_boxshadow_medium: 0 0 5rem -2rem #000;

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;
  box-sizing: border-box;
  .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($dark_grey, 0.99);
    width: 100%;
    height: 100%;
    display: block;
    z-index: 997;
    overflow-y: hidden;
  }
  .modal__content {
    position: fixed;
    z-index: 998;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    img {
      display: block;
      box-shadow: $dark_boxshadow;
      height: 95%;
      width: auto;
      border-radius: 0.3rem;
    }
  }
  .modal__button {
    border: none;
    border-radius: 0.1em;

    color: white;
    font-size: 1.5rem;

    width: 2em;
    height: 2em;

    position: fixed;
    top: 1rem;
    right: 2rem;
    z-index: 999;

    background-color: $red;
  }
}

section {
  padding-bottom: 4rem;
}

/*carousel*/
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

    transition: 0.3s;
    opacity: 0.5;
    transform: scale(0.8);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    a {
      display: block;
      width: 100%;
      height: 14em;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

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
}

@media (max-width: 50em) {
  .modal {
    .modal__content {
      img {
        box-shadow: $dark_boxshadow;
        height: auto;
        width: 90%;
        border-radius: 0.3rem;
      }
    }
  }
}
</style>
