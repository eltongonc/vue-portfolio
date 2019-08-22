<template>
	<footer id="navigation" class="footer">
    <div class="footer__inner">
        <h4 class="footer__copyright">Copyright &copy; {{new Date().getUTCFullYear() +  ' Elton Gonçalves Gomes, Amsterdam'}}</h4>

        <div class="contact">
          <section class="contact--mobile">
            <nav class="contact__nav">
              <ul class="nav__inner">
                <li v-if="homeButton">
                  <router-link to="/"><HomeIcon/>Home</router-link>
                <li>
                  <a href="#app" v-on:click="scrollToTop">
                      <ToTopIcon/>
                      Back to top
                  </a>
                </li>
        				<li>
                    <a href="mailto:eltongoncalves@gmail.com">
                        <MailIcon/>
                    Send me an email</a>
                </li>
        				<li>
                    <a href="https://github.com/eltongonc">
                        <GitHubIcon/>
                    View more of my work</a>
                </li>
        				<li>
                    <a href="https://www.linkedin.com/in/elton-gon%C3%A7alves-gomes-b415a3105/">
                        <LinkedInIcon/>
                    Get to know me better</a>
                </li>
        				<li>
                    <a href="/sitemap.html">
                    View the pages Sitemap</a>
                </li>
        			</ul>
        		</nav>
            </section>
            <section class="contact--desktop">
                <h4>Contact me on</h4>
                <span aria-hidden="true">
                  <ArrowRight/>
                </span>
                <nav class="contact__nav">
                    <ul class="nav__inner">
                        <li>
                            <a href="https://github.com/eltongonc">
                                <GitHubIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:eltongonc@gmail.com">
                                <AtIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/elton-gon%C3%A7alves-gomes-b415a3105/">
                                <LinkedInIcon/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    </div>
	</footer>
</template>

<script>
import { TweenLite } from "gsap";
import ScrollToPlugin from "gsap/src/uncompressed/plugins/ScrollToPlugin";

import { HomeIcon, ToTopIcon, MailIcon, GitHubIcon, LinkedInIcon, ArrowRight, AtIcon } from './icons/index';

export default {
  name: "Footer",
  components: {
    HomeIcon, ToTopIcon, MailIcon, GitHubIcon, LinkedInIcon, ArrowRight, AtIcon
  },
  methods: {
    scrollToTop(e) {
      e.preventDefault();

      TweenLite.to(window, 1.5, {
        scrollTo: 0
      });
    }
  },
  computed: {
    homeButton() {
      return this.$route.name !== 'Home';
    }
  },
  mounted() {
    
  }
};
</script>
