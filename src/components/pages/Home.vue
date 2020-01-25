<template>
	<main :class="className">

		<PosterCanvas>
            <h1>Hi<br/> my name is Elton,</h1>
            <h2>I am a Front-end developer and I can help you with a new website.</h2>
            <a v-if="this.$router.currentRoute.path === '/'" href="#contact" class="button" v-scroll-to="{el: '#contact', offset: -50}">Contact me</a>
        </PosterCanvas>

        <div id="about" class="about section">
            <div class="container">
                <diV class="row d-flex justify-content-center">
                    <h2 class="section-title">About me</h2>
                </div>

                <section class="about__content row d-flex justify-content-center">
                    <div class="content__photo col-md-3 col-sm-8 d-flex justify-content-center align-items-start">
                        <figure v-lazyload>
                            <img class="img-fluid" :data-url="pageData.img" alt="A picture of Elton Gonçalves Gomes">
                        </figure>
                    </div>
                    <div class="content__subtitle col-md-6 col-sm-12">
                        <div v-html="pageData.text"></div>
                    </div>
                </section>
            </div>
        </div>

        <div id="timeline" class="section section--grey">
            <Timeline/>
        </div>
        
        <Projects id="projects"/>

        <ContactForm id="contact"/>
	</main>
</template>

<script>
    import { PosterCanvas, Projects, Intro, Skills, WhatIDo, ContactForm, Timeline } from '../partials';

    export default {
        data(){
            return {
                className: 'page page--' + this.$route.name.toLowerCase(),
                pageData: {
                    text: `
                        <p>My name is Elton Gonçalves Gomes I was born in Cabo Verde and moved to the Netherlands when I was six years old. I’m always working on developing myself and learning new stuff.</p>
                        <p>After graduating for my bachelor Communication and Multimedia Design I started my career as a front-end developer. I am currently working fulltime at a design technology company name <a href="https://ateliersai.com">SAI</a>, but I have enough time for some side-projects</p>
                        <div class="skill-list">
                            <ul>
                                <li>JavaScript (ES6)</li>
                                <li>Node.js + Express</li>
                                <li>React.js</li>
                                <li>Vue.js</li>
                                <li>HTML + S(C)SS</li>
                            </ul>
                        </div>
                    `,
                    img: "/static/profile.jpg"
                }
            };
        },
        components:{
            Projects,
            PosterCanvas,
            Skills,
            Intro,
            WhatIDo,
            ContactForm,
            Timeline,
        }
    };
</script>

