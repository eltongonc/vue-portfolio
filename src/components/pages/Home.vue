<template>
	<main :class="className">
		<PosterCanvas>
            <h1>Hi<br/> my name is Elton,</h1>
            <h2>I am a Front-end developer and I can help you with a new website.</h2>
            <router-link v-if="this.$router.currentRoute.path === '/'" to="/contact" v-on:click.native="scrollTo" class="button">Contact me</router-link>
        </PosterCanvas>
        <WhatIDo/>
		<Skills/>
        <Portfolio/>
        <div class="skills">
          <h3 class="section-title">Your Project</h3>
          <p>Do you have a project in mind? Let’s work together to make the next project on this page yours.</p>
          <router-link class="button" to="/contact">Start a project</router-link>
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

