<template>
	<main class="details">
        <Poster :background="pageData.image" :name="pageData.title" :summary="pageData.summary"></Poster>
		<div class="details__inner">
            <a href="/" ref="backButton" class="details__back">Back</a>

			<article class="details__content">
				<p class="content__lead">{{pageData.summary}}</p>
				<div class="content__body" v-html="pageData.content"></div>
				<div class="content__meta">
					<h3 class="meta__client">Client: {{pageData.client}}</h3>
				</div>

                <h3 v-if="pageData.video">Promo video</h3>
                <iframe class="content__video" v-if="pageData.video" :src="pageData.video" frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''></iframe>
			</article>
		</div>

		<Slideshow :data="pageData.image_list"></Slideshow>
		<section class="card-container links">
			<a v-if="pageData.externalLink" v-bind:href="pageData.externalLink" class="links--external">Visit the site</a>
			<a v-if="pageData.code_link" v-bind:href="pageData.code_link" class="links--github">View code</a>
		</section>
	</main>
</template>

<script>
    import Poster from './partials/Poster';
    import Intro from './partials/Intro';

    import Slideshow from "./partials/Slideshow";
    import workList from "../assets/allWork.js";

    export default {
    	props: ['slug', 'name'],
        components: {
            Slideshow,
            Poster,
            Intro,
        },
        methods: {
            hideBackButton() {
                window.addEventListener('scroll', (e) => {
                    if (window.pageYOffset > 500 && !this.$refs.backButton.classList.contains('invisible')) {
                        this.$refs.backButton.classList.add('invisible');
                    } else if(window.pageYOffset < 500 && this.$refs.backButton.classList.contains('invisible')) {
                        this.$refs.backButton.classList.remove('invisible');
                    }
                })
            }
        },
    	data(){
    		var pageId = this.slug
    		var pageData = workList.filter(function(item){
    			if(item.urlTitle == pageId) return item;
    		})
    		return { pageData: pageData[0] }
    	},
        mounted() {
            this.hideBackButton()
        },
    }
</script>

<style lang="scss" scoped>
    $grid-large: 65rem;
    $grid-medium: 38rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;
    $light_grey: #ededed;

    .details {
        margin-bottom: 5em;

        .details__back {
            color: white;
            position: fixed;
            top: 10rem;
            left: -3em;
            width: 5em;
            padding: 1em;
            text-align: right ;
            margin-left: 0;
            z-index: 999;
            transition: opacity .3s;
            opacity: 1;
            border-radius: 0.2em;
            background: #663231;
            text-decoration: none;

            &.invisible {
                opacity: 0.1;
                &:hover {
                    opacity: 1;
                }
            }
        }
        .details__content {
    	    padding: 2em;
    		margin-bottom: 4em;
            .content__lead {
                text-align: center;
                font-style: italic;
                font-size: 1.2em;
                max-width: $grid-medium;
                margin: 0 auto;
            }
            .content__body {
        		text-align: left;
        		font-size: 1.2em;
        		max-width: $grid-medium;
        		margin: auto;
        	}
            h3 {
                font-size: 1.3rem;
                margin-top: 4rem;
            }
            ul {
                padding-left: 0;
                li {
                    font-size: 1.2em;
                    list-style: none;
                    color: #663231;
                    margin: .5em;
                    width: 10em;
                    margin:auto;
                }
            }
            iframe {
                height: 50vh;
                width: 100%;
            }
        }
    }

    .links {
        display: flex;
		flex-wrap: wrap;
		justify-content: center;
        .links--external,
        .links--github {
        	transition: .3s;
        	border-radius: 0.3rem;
        	color: white;
        	width: 15em;
        	padding: 1em;
        	/*height: 15em;*/
        	position: relative;
        	overflow: hidden;
        	margin: .1em;
        	background: #663231;
        	text-decoration: none;
        }
    }
</style>
