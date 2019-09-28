<template>
  <main :class="className">
		<PosterCanvas>
			<h1>{{message}}</h1>
		</PosterCanvas>
	</main>
</template>

<script>
import { PosterCanvas, Portfolio } from '../partials';
  export default {
    components: {
            PosterCanvas,
      },
     data(){
            return {
                portfolioCount: 4,
				className: 'page page--' + this.$route.name.toLowerCase(),
				message: this.generateMessage(),
            };
	  },
	  methods: {
		  generateMessage() {
			  const response = this.$route.path.replace('/', '');
			  let message;

			  if (response === 'succes') {
				  message = 'Your message was sent successfully!'
			  } else {
				  message = 'Something went wrong sending the message!'
			  }

			  return message;
		  }
	  },
  };
</script>

<style>

</style>