<template>
    <section :class="['poster poster--canvas poster--' + className, title? 'poster__page': 'poster__home' ]">
        <div class="poster__inner">
            <div v-if="!title" class="poster__intro">
                <h1>Hi<br/> my name is Elton,</h1>
                <h2>I am a Front-end developer and I can help you with a new website.</h2>
                <router-link v-if="this.$router.currentRoute.path === '/'" to="/contact" v-on:click.native="scrollTo" class="button">Contact me</router-link>
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
        // "#1abc9c", // turquoise
        // "#2ecc71", // emerald
        // "#16a085", // green tea
        // "#27ae60" // nephritis
        "#ededed",
        "silver",
        "grey",
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
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
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
