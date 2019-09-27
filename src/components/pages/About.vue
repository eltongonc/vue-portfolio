<template>
	<main class="about">
		<PosterCanvas>
      <h1>{{page.name}}</h1>
    </PosterCanvas>

    <div class="portfolio">
      <div class="container">
        <diV class="row">
          <h2 class="section-title text-center">About me</h2>
        </div>
        
        <section class="about__content row">
            <div class="content__photo col-m-8 col-sm-12">
              <img class="photo" :src="pageData.img" alt="A picture of Elton Gonçalves Gomes">
            </div>
            <div class="content__subtitle col-sm-4 col-sm-12" v-html="pageData.text"></div>
        </section>
      </div>

    </div>

    <ContactForm/>
	</main>
</template>

<script>
  import { PosterCanvas, Intro, ContactForm } from '../partials';

  export default {
    components: {
      PosterCanvas,
      ContactForm,
      Intro
    },
    data() {
      return {
        page: {
          name: "Allow me to introduce myself",
          subtitle: "It looks like I haven't made this page",
          background: "../../static/background/about_header.jpg"
        },
        pageData: {
          text: `
            <p>My name is Elton Gonçalves Gomes I was born in Cabo Verde and moved to the Netherlands when I was six years old. I’m always working on developing myself and learning new stuff.</p>
            <p>After graduating from my bachelor Communication and Multimedia Design I started my career as a front-end developer. I am currently working fulltime at a design technology company name <a href="https://ateliersai.com">SAI</a>, but I have enough time for some side-projects</p>
            <p>I strongly believe that things happen for a reason. You stranding on my portfolio and reading this piece of text at the moment is not a coincidence. Maybe you want a website or maybe you just want a drinking buddy! Either way, I like to help you with both.</p>
          `,
          img: "/static/profile.jpg"
        }
      };
    }
  };
</script>