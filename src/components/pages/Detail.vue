<template>
  <main class="details">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <figure v-lazyload>
                    <img class="img-fluid" :data-url="pageData.image" :alt="pageData.title">
                </figure>
            </div>
        </div>

        <div class="row d-flex justify-content-center">
            <div class="col-sm-9">
                <article class="details__content section" v-if="pageData.summary">
                    <h1 class="section-title text-center">{{pageData.title}}</h1> 
                    <a v-on:click="$router.go(-1)" :class="['details__back', isVisible? '':'transparant']">Back</a>
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

            </div>
        </div>

    </div>
    <div class="content__screenshots container" v-if="pageData.image_list.length > 0">
        <h3 class="section-title text-center">Screenshots</h3>

        <div class="images row d-flex justify-content-center">
            <div class="col-sm-9" v-for="(image, i) in pageData.image_list" :key="i">	
                <a :href="image.link">
                    <figure v-lazyload>
                        <img :data-url="image.link" class="image-fluid" :alt="image.title">
                    </figure>
                </a>
            </div>
        </div>

    </div>

    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-9">
                <section v-if="pageData.externalLink || pageData.code_link" class="card-container links">
                    <a v-if="pageData.externalLink" v-bind:href="pageData.externalLink" class="button links--external" target="_blank" ref="noreferrer noopener">Visit the site</a>
                    <a v-if="pageData.code_link" v-bind:href="pageData.code_link" class="button links--github" target="_blank" ref="noreferrer noopener">View code</a>
                </section>
            </div>
        </div>
    </div>
	</main>
</template>

<script>
    import workList from "../../assets/allwork.js";

    export default {
        props: ["slug", "name"],
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
            const poster = document.querySelector('.header');
            const offSet = poster.getClientRects()[0].height;
            
            this.hideBackButton(offSet);
        },
    };
</script>
