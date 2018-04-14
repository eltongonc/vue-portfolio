<template>
	<main>
		<Poster></Poster>
		<Intro></Intro>
		<Skills></Skills>
        <Portfolio :amount="portfolioCount"></Portfolio>
	</main>
</template>


<script>
    import { Portfolio, Intro, Poster, Skills } from "./partials";

    export default {
        data(){
            return {
                portfolioCount: 3,
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
