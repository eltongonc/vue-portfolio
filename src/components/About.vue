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

			<h2 class="sub hidden">I’m a T-shaped Frontend developer who focusses on coding but also knows a thing or two about UI and UX. I developed a well-balanced knowledge in coding for client-side and server-side.</h2>
		</header>
		<section class="about">
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
	</main>
</template>

<script>
export default {
}
</script>

<style scoped>
	/*h1 {
	text-align: center;
}*/
span#intro {
	font-size: 2em;
	font-weight: bold;
}
span.typed-cursor {
	display: none;
}

h2 {
	max-width: 30em;
	margin: auto;
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
	text-align: left;
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
	max-width: 20em;
	max-height: 20em;
	margin: auto;
	overflow: hidden;
	border-radius: 100%;
	margin-bottom: 4em;
}
img {
	width: 100%;
}

.hidden {
	transition: 1;
	opacity: 0;
}

</style>
