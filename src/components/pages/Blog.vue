<template>
	<main class="blog">
		<PosterCanvas>
			<h1>Blog</h1>
		</PosterCanvas>

		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h1>My playground</h1>
				</div>
			</div>
		</div>

	</main>
</template>

<script>
import { PosterCanvas, Intro, ContactForm } from '../partials';

  export default {
    components: {
      PosterCanvas,
      ContactForm,
      Intro
	},
	data() {
      return {
        page: {
		  name: "Allow me to introduce myself",
		}
	  }
	}
  }
</script>
