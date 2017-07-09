<template>
	<footer id="navigation">
		<nav>
			<ul>
				<li><a href="mailto:eltongoncalves@gmail.com">Contact me eltongonc@gmail.com</a></li>
				<li><a href="/work">View some awesome work</a></li>
				<!-- <li><a href="/blog">Explore my playground/Blog</a></li> -->
				<li><a href="/">Get to know me better</a></li>
			</ul>
		</nav>
		<h4>Elton Gonçalves Gomes</h4>
		<section class="social">
			<h4>Contact me here</h4>
			<span><img src="../../assets/arrow.svg" aria-hidden="true"></span>
			<ul>
				<li><a href="https://github.com/eltongonc"><img src="../../assets/github.svg" alt="View my other projects on github"></a></li>
				<li><a href="mailto:eltongonc@gmail.com"><img src="../../assets/email.svg" alt="Send me an email"></a></li>
				<li><a href="https://www.linkedin.com/in/elton-gon%C3%A7alves-gomes-b415a3105/"><img src="../../assets/linkedin.svg" alt="Visit my linked in"></a></li>
			</ul>
		</section>
	</footer>
</template>

<script>
export default {
	name: 'vueFooter'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
	padding: 1em;
	height: 100%;
	box-sizing: border-box;
}
h1, h2 {
	margin: 0;
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	transition: .3s;
	padding: .5em;
	border-radius: 0.3em;
	color: #663231;
	text-decoration: none
}
a:hover,
a:active {
	background-color: #42b983;
	color: white;
}

footer {
	background: #663231;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	padding: 1em;
	border-top: 1px solid rgba(102, 50, 49, 0.1);
}

h4 {
	width: 100%;
	text-align: center;
	color: white;
}

ul li {
	margin: .3em 0;
	width: 100%;
	display: inline-block;
	background-color: rgba(151, 220, 172, 0.1);
}


ul li a {
	color: rgba(255, 255, 255, 0.7);
	display: block;
	padding: 1em;
}

ul li:hover,
ul li.active {
	background-color: rgba(151, 220, 172, 0.5);
}

.social li {
	background: none;
}

.social h4,
.social span {
	display: none;
}

.social ul li {
	width: 3em;
}

.social img {
	width: 100%;
}
.social a {
	padding: .5em;
}

@media (min-width: 50em) {
	footer {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	nav {
		display: none;
	}
	h4 {
		width: auto;
		display: inline;
	}
	.social {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-pack: distribute;
		justify-content: space-around;
	}
	.social > * {
		margin-right: 1em;
	}
	.social span {
		display: block;
	}
	.social img {
		width: 2em;
	}
	.social h4 {
		display: block;
		font-family: "Courgette", cursive;
		text-transform: capitalize;
		font-weight: lighter;
	}
}

.to_top {
	display: inline-block;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}

</style>
