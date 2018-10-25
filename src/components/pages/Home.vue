<template>
	<main :class="className">
		<Poster></Poster>
		<Intro></Intro>
		<Skills></Skills>
        <Portfolio :amount="portfolioCount"></Portfolio>
	</main>
</template>

<script>
    import { Poster, Portfolio, Intro, Skills } from '../partials';

    export default {
        data(){
            return {
                portfolioCount: 4,
                className: 'page page--' + this.$route.name.toLowerCase(),
            };
        },
        components:{
            Portfolio,
            Poster,
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

