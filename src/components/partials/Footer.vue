<template>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-3 col-sm-4 col-xs-12">
					<div class="single-footer-widget">
						<h4>Sitemap</h4>
						<p><a href="#about" v-scroll-to="{el: '#about', offset: -50}">About</a></p>
						<p><a href="#skills" v-scroll-to="{el: '#skills', offset: -50}">Contact</a></p>
						<p><a href="#portfolio" v-scroll-to="{el: '#portfolio', offset: -50}">Portfolio</a></p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 social-widget">
					<div class="single-footer-widget">
						<h4>Contact Information</h4>
						<div class="footer-social d-flex align-items-center">
							<a href="#"><LinkedInIcon/></a>
							<a href="#"><GitHubIcon/></a>
							<a href="#"><MailIcon/></a>
						</div>
					</div>
				</div>
				<div class="col-m-3 col-sm-4 col-xs-12">
					<div class="single-footer-widget">
						<img class="img-fluid" src="../../assets/images/logo-white.png"/>
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
import { HomeIcon, ToTopIcon, MailIcon, GitHubIcon, LinkedInIcon, ArrowRight, AtIcon } from './icons/index';

export default {
  name: "Footer",
  components: {
	HomeIcon, 
	ToTopIcon, 
	MailIcon, 
	GitHubIcon, 
	LinkedInIcon, 
	ArrowRight, 
	AtIcon
  },
  data() {
    return {
    }
  },
};
</script>
