<template>
	<main>
		<header>

			<!-- <h1 id="intro"></h1> -->
			<figure>
				<img src="/static/profile.jpg" width="200">
			</figure>

			<section class="intro-string">
				<h1>Hi, I'm Elton</h1>
				<h2>I am a Frontend developer</h2>
				<h2>I love to code</h2>
			</section>
			<span id="intro"></span>
		</header>
		<section class="about">
						<h2 class="sub hidden">I’m a T-shaped Frontend developer who focusses on coding but also knows a thing or two about UI and UX. I developed a well-balanced knowledge in coding for client-side and server-side.</h2>
			<section class="description">
				<section id="skills">
					<article>
						<h3>My prefered tools and language</h3>
						<ul>
							<li>Node.js</li>
							<li>Vanilla JS</li>
							<li>CSS</li>
							<li>HTML</li>
						</ul>
					</article>
					<article>
						<h3>Basic knowledge of</h3>
						<ul>
							<li>PHP</li>
							<li>SQL/mongoDB</li>
							<li>jQuery</li>
							<li>Illustrator</li>
							<li>Photoshop</li>
							<li>Indesign</li>
							<li>Python</li>
						</ul>
					</article>
				</section>
				<a class="link" href="/work">View some of my work</a>
			</section>
		</section>
	</main></template>

<script>
import Typed from "typed.js"

window.onload = function(){
	var typed = new Typed('#intro', {
		stringsElement:'.intro-string',
		typeSpeed: 50,
		backSpeed: 0,
		backDelay: 1000,
		startDelay: 0,
		loop: false,
		onComplete: showText
	});

function showText(event) {
	document.querySelector('.typed-cursor').remove();
	document.querySelector('.sub').classList.remove('hidden');
}
}

export default {
}
</script>

<style scoped>
	/*h1 {
	text-align: center;
}*/

.intro-string {
	opacity: 0;
}
span#intro {
	font-size: 2em;
	font-weight: bold;
}
.typed-cursor {
	transition: 1s;
	display: none !important;
}

h2 {
	max-width: 30em;
	margin: auto;
	margin-top: 1em;
	margin-bottom: 1em;
	font-weight: normal;
	font-style: italic;
	transition: 1s;
}

p {
	max-width: 38em;
	text-align: left;
	font-size: 1.2em;
	margin: auto;
}

#skills {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 2em 0;
}
#skills article {
	box-sizing: border-box;
	background-color: white;
	min-width: 20em;
	padding: 2% 4%;
	margin: 1em;
}
h3 {
	width: 100%;
	text-align: center;
}

ul {
	width: 100%;
	padding-left: 0;
	text-align: center;
	margin-bottom:  2em;
}
li {
	font-weight: bold;
}

a,
li {
	font-size: 1.2em;
	list-style: none;
	color: #663231;
	/*width: 10em;*/
	margin:auto;
}


.about a {
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
	max-width: 10em;
	max-height: 10em;
	margin: auto;
	overflow: hidden;
	border-radius: 100%;
	margin-bottom: 4em;
}
@media (min-width:50em) {
	figure {
		max-width: 20em;
		max-height: 20em;
	}
}
img {
	width: 100%;
}

.hidden {
	transition: 1;
	opacity: 0 !important;
}

</style>
