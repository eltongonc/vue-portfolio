<template>
    <section :class="['poster poster--canvas poster--' + className, title? 'poster__page': 'poster__home' ]">
        <div class="poster__inner">
            <div v-if="!title" class="poster__intro">
                <h1>Hi, I'm Elton Gonçalves Gomes</h1>
            </div>
            <figcaption v-else class="poster__intro">
                <h1>{{title}}</h1>
                <h2>{{subtitle}}</h2>
            </figcaption>
        </div>
        <canvas ref="canvas" id="canvas"></canvas>
    </section>
</template>

<script>
import { Circle } from "../../classes/Circle";

export default {
  name: "Poster",
  props: ["title", "summary", "subtitle"],
  data() {
    return {
      canvas: document.getElementById("canvas"),
      animating: false,
      animationFrame: null,
      ctx: null,
      className: this.$route.name.toLowerCase(),
      circles: {
        container: [],
        amount: 100
      },
      radius: {
        max: 100,
        min: 5
      },
      colors: [
        "#1abc9c", // turquoise
        "#2ecc71", // emerald
        "#16a085", // green tea
        "#27ae60" // nephritis
      ]
    };
  },
  methods: {
    setup() {
      this.ctx = this.$refs.canvas.getContext("2d");

      // prevents re-adding circles on resize
      this.circles.container = [];

      // creates circles based on the given amount
      for (var i = 0; i < this.circles.amount; i++) {
        this.circles.container.push(
          new Circle(this.ctx, {
            x:
              Math.random() * (this.$refs.canvas.width - this.radius.min * 2) +
              this.radius.min,
            y:
              Math.random() * (this.$refs.canvas.height - this.radius.min * 2) +
              this.radius.min,
            dx: (Math.random() - 0.4) * 1,
            dy: (Math.random() - 0.4) * 1,
            radius: Math.floor(Math.random() * this.radius.min)
          })
        );
      }

      this.resize();
    },

    animate() {
      const mouse = {
        range: 15,
        x: 0,
        y: 0
      };

      // clear the canvas
      this.ctx.clearRect(
        0,
        0,
        this.$refs.canvas.width,
        this.$refs.canvas.height
      );

      // updates the circles
      this.circles.container.forEach(circle => {
        circle.update(mouse);
      });

      // creates a loop for this animate function
      this.animationFrame = requestAnimationFrame(this.animate);
    },

    startCanvas() {
      if (this.animating) {
        // call the settings once
        this.setup();
  
        // start the animation loop
        this.animate();
      }
    },

    stopCanvas() {
      cancelAnimationFrame(this.animationFrame);
    },

    resize() {
      this.$refs.canvas.width = this.$refs.canvas.parentNode.clientWidth;
      this.$refs.canvas.height = this.$refs.canvas.parentNode.clientHeight;
    },
    
  },

  mounted() {
    const canvas = document.getElementById('canvas');
    
    if (canvas && !this.animating) {
      this.animating = true;
      window.addEventListener("resize", this.resize);
      this.resize();
      this.startCanvas();
    }
  },

  destroyed() {
    window.removeEventListener("resize", this.resize);
    this.animating = false;
    this.stopCanvas();
  }
};
</script>

<style lang="scss" scoped>
$grid-large: 80rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;

.poster {
  height: 45rem;
  background-color: $dark_grey;
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    z-index: 0;
  }
  .poster__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    .poster__intro {
      transition: 0.3s;
      padding: 1em;
      box-sizing: border-box;
      max-width: 30rem;
      position: absolute;
      z-index: 1;
      h1,
      h2 {
        text-align: left;
        color: white;
        text-shadow: 0 0 10px #333;
        text-transform: uppercase;
        transform: scale(1.5);
        transition: 0.3s;
        max-width: 30em;
      }

      h2 {
        margin: auto;
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: normal;
        position: relative;
        z-index: 1;
      }
      h3 {
        text-align: left;
        color: white;
        text-shadow: 0 0 10px #333;
      }
      .button {
        display: block;
        margin: 2rem auto;
        padding: 1rem;
        text-decoration: none;
        color: white;
        width: 10em;
        text-transform: uppercase;
        border: 0.2rem solid white;
        background-color: transparent;
        border-radius: 0.3rem;
        transition: 0.3s;
        font-weight: bold;
        &:hover {
          background: white;
          color: #333;
        }
      }
    }
  }
  &.poster--work {
    height: 28rem;
  } 
  @media (max-width: 50em) {
    height: 20rem;
    .poster__inner {
      .poster__intro {
        max-width: 18em;
        margin: 0 auto;
        h1,
        h2 {
          transform: scale(1);
          width: 100%;
          max-width: 100%;
        }
      }
    }
    &.poster__home {
      .poster__inner {
        .poster__intro {
          top: 8rem;
        }
      }
    }
  }
}
</style>
