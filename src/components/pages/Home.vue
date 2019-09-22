<template>
	<main :class="className">
		<PosterCanvas/>
        <WhatIDo/>
		<Skills/>
        <Portfolio/>
        <div class="skills">
          <h3 class="section-title">Your Project</h3>
          <p>Do you have a project in mind? Let’s work together to make the next project on this page yours.</p>
          <router-link class="primary-btn text-uppercase" to="/contact">Start a project</router-link>
        </div>
	</main>
</template>

<script>
    import { PosterCanvas, Portfolio, Intro, Skills, WhatIDo } from '../partials';

    export default {
        data(){
            return {
                portfolioCount: 4,
                className: 'page page--' + this.$route.name.toLowerCase(),
            };
        },
        components:{
            Portfolio,
            PosterCanvas,
            Skills,
            Intro,
            WhatIDo,
        }
    };
</script>

