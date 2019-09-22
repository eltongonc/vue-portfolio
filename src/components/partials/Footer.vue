<template>
	<footer class="footer">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-3 col-sm-4 col-xs-12">
							<div class="single-footer-widget">
								<h4>Sitemap</h4>
								<p><router-link to="/about">About</router-link></p>
								<p><router-link to="/contact">Contact</router-link></p>
								<p><router-link to="/projects">Projects</router-link></p>
								<p><router-link to="/blog">Blog</router-link></p>
								<p><router-link to="/changelog">Changelog</router-link></p>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 social-widget">
							<div class="single-footer-widget">
								<h4>Contact Information</h4>
								<div class="footer-social d-flex align-items-center">
									<a href="#"><i class="fa fa-lg fa-linkedin"></i></a>
									<a href="#"><i class="fa fa-lg fa-github"></i></a>
									<a href="#"><i class="fa fa-lg fa-envelope"></i></a>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-5 col-sm-4 col-xs-12">
							<div class="single-footer-widget">
								<h4>Elton Gonçalves Gomes</h4>
								<img src="logo" alt=""/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<p class="footer-text text-center">
								Copyright &copy; {{new Date().getFullYear()}} All rights reserved  |  Elton Gonçalves Gomes
							</p>
						</div>
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
  data() {
    return {
    }
  },
  computed: {
    homeButton() {
      return this.$route.name !== 'Home';
    }
  },
  mounted() {}
};
</script>
