<template>
  <header>
	  <section>
		  <h1><a class="logo" href="/">Elton Gonçalves Gomes</a></h1>
		  <nav>
			  <ul>
				  <li><a href="/">About</a></li>
				  <li><a href="/work">Portfolio</a></li>
				  <!-- <li><a href="/blog">Blog</a></li> -->
			  </ul>
		  </nav>
	  </section>
  </header>
</template>

<script>


export default {
  name: 'vueHeader'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
	height: 25%;
}
header section {
	position: fixed;
	transition:transform .3s ease;
	padding: 1em 1em 1em;
	min-height: 10%;
	box-sizing: border-box;
	top: 5%;
	transform: scale(1.5);
	z-index: 1;
	background: white;
	width: 100%;
}
header section.sticky {
	position: fixed;
	transform: scale(1);
	/*position: absolute;*/
	top: 0;
}
h1, h2 {
	margin: 0;
	font-size: 1em;
	font-weight: bold;
	font-weight: normal;
}
@media (min-width:50em) {
	h1,h2 {
		font-size: 2em
	}
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a.logo {
	color: #663231;
}
a {
	padding: .5em;
	border-radius: 0.3em;
  color: #97dcac;
  text-decoration: none
}
a:hover:not(.logo),
a:active:not(.logo) {
	background-color: #42b983;
	color: white;
}

</style>
