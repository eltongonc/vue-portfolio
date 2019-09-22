<template>
	<main class="about">
		<Poster>
      <h1>{{page.name}}</h1>
    </Poster>

    <section class="about__content">
        <div class="content__photo">
          <img class="photo" :src="pageData.img" alt="A picture of Elton Gonçalves Gomes">
        </div>
        <div class="content__subtitle" v-html="pageData.text"></div>
    </section>

    <div class="skills container">
      <div class="row">
        <div class="col-md-6">
          <img class="photo" :src="pageData.img" alt="A picture of Elton Gonçalves Gomes">
        </div>
        <div class="col-md-6">
          <h3 class="section-title">Your Project</h3>
          <p>Do you have a project in mind? Let’s work together to make the next project on this page yours.</p>
          <router-link class="button" to="/contact">Start a project</router-link>
        </div>
      </div>
    </div>
	</main>
</template>

<script>
  import { Poster, Intro } from '../partials';

  export default {
    components: {
      Poster,
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
            <p>After graduating for my bachelor Communication and Multimedia Design I started my career as a front-end developer. I am currently working fulltime at a design technology company name <a href="https://ateliersai.com">SAI</a>, but I have enough time for some side-projects</p>
            <p>I strongly believe that things happen for a reason. You stranding on my portfolio and reading this piece of text at the moment is not a coincidence. Maybe you want a website or maybe you just want a drinking buddy! Either way I like to help you with both.</p>
          `,
          img: "/static/profile.jpg"
        }
      };
    }
  };
</script>