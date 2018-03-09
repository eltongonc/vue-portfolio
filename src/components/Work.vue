<template>
	<main>
		<header>
			<h1>Portfolio</h1>
		</header>
		<section class="card-container">
				<article v-for="item in list">
						<img :src="item.image_small" alt="" :title="item.title" />
						<footer>
							<h2>{{item.title}}</h2>
							<p>{{item.summary}}</p>
							<a :href="'/work/'+ item.urlTitle">Read more</a>
						</footer>
				</article>
				<article>
						<!-- <img src="../assets/github.svg" alt="github" title="View more work on Github" /> -->
						<footer>
							<h2>View more projects</h2>
							<p>I have more project om my github page</p>
							<a href="https://github.com/eltongonc">View more projects</a>
						</footer>
				</article>
		</section>
	</main>
</template>

<script>
import workList from "../assets/allWork.js";


export default {
	data: function(){
		return { list:workList}
	}
}

</script>

<style scoped>
	/*header*/
	header {
		height: 80vh;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 0;
		background-color: #42b983;
		background-position: center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: flex-end;

	}
	header h1,
	header h2 {
		color: white;
		text-transform: uppercase;
	}
	header h1 {
		width: 10em;
	}

	/*General*/
	h2 {
		text-align: center;
		width: 100%;
		margin-bottom: 0;
	}

	p {
		text-align: left;
		font-size: 1.2em;
		max-width: 38em;
	}

	a {
		display: block;
		transition: .3s;
		border-radius: 0.3em;
		color: white;
		width: 100%;
		padding: 1em;
		/*height: 15em;*/
		position: relative;
		overflow: hidden;
		margin: .1em;
		background: #663231;
		text-decoration: none;
		box-sizing: border-box;
	}

	img {
		display: inline-block;
		width: 100%;
	}

	article {
		transition: 1s;
		background-color: rgba(255, 255, 255, 0.5);
		max-width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 4em;
	}



	article:nth-of-type(even) {
		flex-direction: row-reverse;
	}


	article footer {
		box-sizing: border-box;
		padding: 2em;
		width: 100%;
	}

	figure:hover + figcaption {
		background: rgba(255,255,255, 0.9);
	}

	@media (min-width:50em) {
		header {
			height: 65vh;
			padding-top: 4em;
			padding-right: 10em;
		}

		header h1{
			color: white;
			text-transform: uppercase;
		}
		img {
			width: 50%;
		}
		article {
			margin: auto;
			margin-bottom: 1em;
			max-width: 60%;
		}
		article footer {
			box-sizing: border-box;
			padding: 1em 2em;
			width: 50%;
		}

		article:last-child {
			width: max-content;
		}
		article:last-child footer {
			width: 100%;
			margin:auto;
		}

		h2 {
			text-align: left;
		}
		a {
			margin: auto;
			width: 10em;
		}
	}
</style>
