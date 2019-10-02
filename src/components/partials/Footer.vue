<template>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-3 col-sm-4 col-xs-12">
					<div class="single-footer-widget">
						<h4>Sitemap</h4>
						<p v-for="(item, i) in menuItems" :key="i">
							<a :href="'#'+item.url" v-if="$route.name == 'Home'" v-scroll-to="{el: '#'+item.url, offset: -50}" active-class="nav--active">{{item.title}}</a>
							<router-link v-else :to="'/'+item.url" active-class="nav--active">{{item.title}}</router-link>
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 social-widget">
					<div class="single-footer-widget">
						<h4>Contact Information</h4>
						<div class="footer-social d-flex align-items-center">
							<a href="https://www.linkedin.com/in/elton-gon%C3%A7alves-gomes-b415a3105/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
							<a href="http://github.com/eltongonc" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
							<a href="mailto:eltongonc@gmail.com" target="_blank" rel="noopener noreferrer"><MailIcon/></a>
						</div>
					</div>
				</div>
				<div class="col-m-3 col-sm-4 col-xs-12">
					<div class="single-footer-widget">
						<h4>Elton Gonçalves Gomes</h4>
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
		menuItems: [
			{ title: 'Home', url: ''},
			{ title: 'About', url: 'about'},
			{ title: 'Projects', url: 'projects'},
		]
    }
  },
};
</script>
