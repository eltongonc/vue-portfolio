<template>
	<main :class="className">
		<PosterCanvas/>
        <WhatIDo/>
		<Skills/>
        <Portfolio :amount="portfolioCount"/>
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

