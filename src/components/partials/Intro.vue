<template>
    <section id="about" class="intro">
      <div class="intro__inner">
          <div v-if="!pageData" class="intro__text">
              <h2 class="text__title">I'm a front-end developer</h2>
              <p class="text__paragraph">Hi my name is Elton Goncalves Gomes. I am a Front-end developer and I can help you with a new website.</p>
              <router-link v-if="this.$router.currentRoute.path === '/'" to="/contact" v-on:click.native="scrollTo" class="text__link">Contact me</router-link>
          </div>
          <div class="intro__text" v-else>
              <h2 class="text__title">{{pageData.title}}</h2>
              <p class="text__paragraph" v-html="pageData.summary"></p>
          </div>
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
