<template>
	<main>
        <Poster :title="page.name"></Poster>
		<Portfolio></Portfolio>
	</main>
</template>

<script>
	import { Poster, Portfolio, Intro } from '../partials';

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
	        Poster,
	        Intro,
	    }
	};
</script>

