<template>
	<main>
        <PosterCanvas :title="page.name"></PosterCanvas>
		<Portfolio></Portfolio>
	</main>
</template>

<script>
	import { PosterCanvas, Portfolio, Intro } from '../partials';

	export default {
	    data(){
	        return {
	            page: {
	                name: "Portfolio",
	            },
	            pageData: {
	                title: "Try one of these pages instead",
						// Comp: Portfolio,
						
	            }
	        };
	    },
	    components:{
	        Portfolio,
	        PosterCanvas,
	        Intro,
	    }
	};
</script>

