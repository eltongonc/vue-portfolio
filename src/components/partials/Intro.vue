<template>
    <section id="about" class="intro">
        <div v-if="!pageData" class="intro__text">
            <h2 class="text__title">I am a front-end developer</h2>
            <p class="text__paragraph">I consider myself as a T-shaped Front-end developer who focusses on coding but also knows a thing or two about UI and UX. I live in Amsterdam, the Netherlands and can't wait to start exploring the world. I love to mess around with web related technologies and would love to see everything connected to the internet. During my career as a frontend developer I developed a well-balanced knowledge in coding for client-side and server-side.</p>
            <router-link v-if="this.$router.currentRoute.path === '/'" to="/#skills" v-on:click.native="scrollTo" class="text__link">Let me show you some of my skills</router-link>
        </div>
        <div class="intro__text" v-else>
            <h2 class="text__title">{{pageData.title}}</h2>
            <p class="text__paragraph" v-html="pageData.summary"></p>
        </div>
	</section>
</template>

<script>
import { TweenLite as tl } from "gsap";
import ScrollToPlugin from "gsap/src/uncompressed/plugins/ScrollToPlugin";
import Portfolio from "./Portfolio";

export default {
    name: "Intro",
    props: ["pageData"],
    methods: {
        scrollTo(e) {
            e.preventDefault();

            const el = document.querySelector(e.target.hash);
            let yPos = el.offsetTop - el.scrollTop + el.clientTop;
            const target = el.getBoundingClientRect();

            window.setTimeout(() => {
                tl.to(window, 1, {
                    scrollTo: yPos
                });
            }, 100);
        }
    },
    components: {
        Portfolio
    }
};
</script>

<style lang="scss">
$grid-large: 80rem;
$grid-medium: 32rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;
$light_grey: #ededed;

$dark_boxshadow: 0 0 10rem -2rem #000;

.intro {
  padding: 5em 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #ededed;
  max-width: $grid-large;
  margin: 0 auto;
  transform: translateY(-50%);
  border-radius: 0.3rem;
  box-shadow: $dark_boxshadow;

  .figure {
    width: 10rem;
    height: 10rem;
    margin: auto;
    overflow: hidden;
    &.figure--circle {
      border-radius: 100%;
      border-radius: 100%;
      .figure__image {
        width: 100%;
        height: auto;
      }
    }
  }

  .intro__text {
    max-width: $grid-medium;
    margin: 0 auto;
    color: #333;
    padding: 2rem;
    .text__title {
      font-style: normal;
      text-align: center;
      margin-top: 0;
      text-transform: uppercase;
    }
    .text__paragraph {
      font-style: normal;
      text-align: left;
    }
    .text__link {
      text-align: center;
      font-style: normal;
      color: $red;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
      padding: 1rem;
      display: block;
      &:hover {
        color: $green;
      }
    }
  }

  @media (max-width: 50em) {
    transform: translateY(0);
    background-color: white;
  }
}
</style>
