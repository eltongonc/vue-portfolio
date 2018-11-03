<template>
	<main :class="className">
		<PosterCanvas></PosterCanvas>
		<Intro></Intro>
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
<style lang="scss" scoped>
    $light_grey: #ededed;
    .page--home {
        .portfolio {
            background: $light_grey;
        }
    }
</style>

