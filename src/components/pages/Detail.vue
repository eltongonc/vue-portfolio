<template>
  <main class="details">
    <Poster id="poster" :background="pageData.image" :title="pageData.title" :summary="pageData.summary"></Poster>
		<div class="details__inner">
            <a v-on:click="$router.go(-1)" :class="['details__back', isVisible? '':'transparant']">Back</a>

			<article class="details__content" v-if="pageData.summary">
				<p class="content__lead">{{pageData.summary}}</p>
				<div class="content__body" v-html="pageData.content"></div>
				<div class="content__meta">
					<h3 class="meta__client">Client: {{pageData.client}}</h3>
				</div>

                <div class="content__video" v-if="pageData.video">
                    <h3>Promo video</h3>

                    <video v-if="pageData.video.mp4" class="video" controls>
                        <source :src="pageData.video.mp4">
                    </video>
                    <iframe v-else-if="pageData.video.url" class="video" :src="pageData.video.url" width="100%" frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen='' autoplay="false"></iframe>
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
    import { Poster, Intro, Slideshow } from '../partials';
    import workList from "../../assets/allwork.js";

    export default {
        props: ["slug", "name"],
        components: {
            Slideshow,
            Poster,
            Intro,
        },
        methods: {
            hideBackButton(offSet) {
                window.addEventListener("scroll", (e) => {
                    if (window.pageYOffset < offSet) {
                      this.isVisible = true;
                    } else {
                      this.isVisible = false;
                    }
                });
            }
        },
        data(){
            return { 
                pageData: workList.filter((item) => item.urlTitle == this.slug)[0],
                isVisible: true,
            };
        },
        mounted() {
            const poster = document.querySelector('#poster');
            const offSet = poster.getClientRects()[0].height - (6* 16); // height - 6em;
            
            this.hideBackButton(offSet);
        },
    };
</script>
