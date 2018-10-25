<template>
	<main class="about">
		<Poster :background="page.background" :title="page.name"></Poster>
        <section class="about__content">
            <div class="content__photo">
              <img class="photo" :src="pageData.img" alt="Photo of me">
            </div>
            <div class="content__subtitle subtitle" v-html="pageData.text"></div>
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
<style lang="scss">
  $dark_boxshadow: 0 0 10rem -2rem #000;

  .about {
    .about__content {
      padding: 8em 0;
      max-width: 80% ;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      .content__photo {
        width: 20em;
        height: 20em;
        overflow: hidden;
        border-radius: .3em;
        box-shadow: $dark_boxshadow;
        .photo {
          height: 100%;
        }
      }
      .content__subtitle {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        p {
          margin-top: 0;
        }
      }
    }
  }
</style>


