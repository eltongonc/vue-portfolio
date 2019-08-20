<template>
	<main :class="className">
		<PosterCanvas></PosterCanvas>
		<Skills></Skills>
        <Portfolio :amount="portfolioCount"></Portfolio>
	</main>
</template>

<script>
    import { PosterCanvas, Portfolio, Intro, Skills } from '../partials';

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
        }
    };
</script>

