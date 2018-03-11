<template>
	<main>
		<Poster></Poster>
		<Intro></Intro>
		<Skills></Skills>
        <Portfolio></Portfolio>
	</main>
</template>


<script>
    import Portfolio from './partials/Portfolio';
    import Poster from './partials/Poster';
    import Intro from './partials/Intro';
    import Skills from './partials/Skills';

    export default {
        components:{
            Portfolio,
            Poster,
            Skills,
            Intro,
        }
    }
</script>


<style lang="scss" scoped>
</style>
