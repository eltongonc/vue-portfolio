<template>
	<main class="details">
        <Poster :background="pageData.image" :name="pageData.title" :summary="pageData.summary"></Poster>
		<div class="details__inner">
            <a href="/" ref="backButton" class="details__back">Back</a>

			<article class="details__content" v-if="pageData.summary">
				<p class="content__lead">{{pageData.summary}}</p>
				<div class="content__body" v-html="pageData.content"></div>
				<div class="content__meta">
					<h3 class="meta__client">Client: {{pageData.client}}</h3>
				</div>

                <div class="content__video" v-if="pageData.video">
                    <h3>Promo video</h3>
                    <iframe :src="pageData.video" frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''></iframe>
                </div>
			</article>

            <div class="content__screenshots" v-if="pageData.image_list">
                <h3>Screenshots</h3>
                <Slideshow :data="pageData.image_list"></Slideshow>
            </div>
        </div>

		<section class="card-container links">
			<a v-if="pageData.externalLink" v-bind:href="pageData.externalLink" class="links--external">Visit the site</a>
			<a v-if="pageData.code_link" v-bind:href="pageData.code_link" class="links--github">View code</a>
		</section>
	</main>
</template>

<script>
    import { Poster, Intro, Slideshow } from "./partials";
    import workList from "../assets/allWork.js";

    export default {
        props: ["slug", "name"],
        components: {
            Slideshow,
            Poster,
            Intro,
        },
        methods: {
            hideBackButton() {
                window.addEventListener("scroll", (e) => {
                    if (window.pageYOffset > 250 && !this.$refs.backButton.classList.contains("invisible")) {
                        this.$refs.backButton.classList.add("invisible");
                    } else if(window.pageYOffset < 250 && this.$refs.backButton.classList.contains("invisible")) {
                        this.$refs.backButton.classList.remove("invisible");
                    }
                });
            }
        },
        data(){
            let pageId = this.slug;
            let pageData = workList.filter(function(item){
                if(item.urlTitle == pageId) return item;
            });
            return { pageData: pageData[0] };
        },
        mounted() {
            this.hideBackButton();
        },
    };
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
            top: 5rem;
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
            h3 {
                font-size: 1.3rem;
                margin-top: 4rem;
            }
            .content__lead {
                text-align: left;
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
        	}
            .content__video {
                iframe {
                    height: 20rem;
                    width: 100%;
                }
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

    @media (max-width: 50em) {
        .details {
            .details__content {
                .content__video {
                    iframe {
                        height: 10rem;
                    }
                }
            }
        }
    }
</style>
