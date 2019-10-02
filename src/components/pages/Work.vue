<template>
	<main>
        <PosterCanvas>
			<h1>Here is a list of my projects</h1>
		</PosterCanvas>
		<Projects/>
	</main>
</template>

<script>
	import { PosterCanvas, Projects } from '../partials';

	export default {
	    data(){
	        return {
	            page: {
	                name: "Projects",
	            },
	        };
	    },
	    components:{
	        Projects,
	        PosterCanvas,
	    }
	};
</script>

