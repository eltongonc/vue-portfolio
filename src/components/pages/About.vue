<template>
	<main class="about">
		<Poster :background="page.background" :title="page.name"></Poster>
        <section class="about__content">
            <div class="content__photo">
              <img class="photo" :src="pageData.img" alt="A picture of Elton Gonçalves Gomes">
            </div>
            <div class="content__subtitle" v-html="pageData.text"></div>
        </section>
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
            <p>My name is Elton Gonçalves Gomes and I am always working on developing myself and learning new stuff.</p>
            <p>I was born on the Cape Verdean-islands and moved to the Netherlands when I was six years old. When I grow up I want to use my frontend development skills to create a mobile-friendly environment there.</p>
            <p>I used to be a financial administrator but switched to a more fun and exciting branch that is focused on computer software. The course that I switched to allowed me to be more technical and creative.</p>
            <p>In 2018 I graduated with a bachelor’s degree in Communication and Multimedia Design.</p>
            <p>If I am not at the gym working on my fitness, you can find me around family and friends. During the weekends I get little to no sleep because of my party animal instinct.</p>`,
          img: "/static/profile.jpg"
        }
      };
    }
  };
</script>