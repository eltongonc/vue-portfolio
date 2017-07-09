<template>
	<main>
		<header class="header">
			<figure>
				<img :src="image" alt="" :title="title" />
			</figure>
			<h1>{{title}}</h1>
			<article>
				<p class="lead">{{summary}}</p>
				<p v-html="content"></p>
				<p style="font-weight:bold">
					<span>Client:</span>
					{{client}}
				</p>
			</article>
		</header>
		<slideshow :data="image_list"></slideshow>
		<section class="card-container">
			<a v-if="externalLink" v-bind:href="externalLink">Visit the site</a>
			<a v-if="code_link" v-bind:href="code_link">View code</a>
		</section>
	</main>
</template>

<script>
import slideshow from "./partials/Slideshow";
import workList from "../assets/allWork.js";

export default {
	props: ['slug', 'name'],
	data(){
		var pageId = this.slug
		var pageData = workList.filter(function(item){
			if(item.urlTitle == pageId) return item;
		})
		return pageData[0]
	},
	components: {
		slideshow
	}
}
</script>

<style scoped>

	/*General*/
	ul {
		padding-left: 0;
	}

	h1 {
		text-align: center;
	}

	h2 {
		font-size: 1.2em;
	}
	p {
		text-align: left;
		font-size: 1.2em;
		max-width: 38em;
		margin: auto;
	}
	p.lead {
		text-align: center;
		font-style: italic;
	}

	li {
		font-size: 1.2em;
		list-style: none;
		color: #663231;
		margin: .5em;
		width: 10em;
		margin:auto;
	}

	article {
		margin-bottom: 4em;
	}
	.card-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	/*cards*/
	a {
		transition: .3s;
		border-radius: 0.3em;
		color: white;
		width: 15em;
		padding: 1em;
		/*height: 15em;*/
		position: relative;
		overflow: hidden;
		margin: .1em;
		background: #663231;
		text-decoration: none;
	}

	a:hover,
	a:active {
		background-color: white;
		color: #663231;
	}

	figure {
		background-color: #97DCAC;
		transition: 1s;
		margin: 0;
		margin-bottom: 4em;
		border:solid white;
		max-height: 20em;
		overflow: hidden;
	}
	figure img {
		width: 100%;
	}
	figcaption {
		transition: 1s;
		position: absolute;
		bottom: 0;
		padding: 2%  0;
		width: 100%;
		background: rgba(255,255,255, 0.8);
		color:#663231
	}

</style>
