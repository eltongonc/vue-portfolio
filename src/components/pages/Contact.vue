<template>
		<main :class="className">
		<PosterCanvas/>
    <ContactForm/>
	</main>
</template>

<script>
  import { PosterCanvas, Portfolio, Intro, Skills, WhatIDo, ContactForm } from '../partials';
  export default {
    components:{
            Portfolio,
            PosterCanvas,
            Skills,
            Intro,
            WhatIDo,
            ContactForm,
      },
     data(){
            return {
                portfolioCount: 4,
                className: 'page page--' + this.$route.name.toLowerCase(),
            };
      },
  };
</script>