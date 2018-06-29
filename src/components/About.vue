<template>
	<main class="about">
		<Poster :background="page.background" :name="page.name"></Poster>
        <section class="about__content">
            <h1 class="title">{{pageData.title}}</h1>
            <p class="subtitle">{{pageData.text}}</p>
        </section>
	</main>
</template>

<script>
import { Poster, Intro } from "./partials";

export default {
  components: {
    Poster,
    Intro
  },
  data() {
    return {
      page: {
        name: " ",
        subtitle: "It looks like I haven't made this page",
        background: "../../static/background/about_header.jpg"
      },
      pageData: {
        title: "Allow me to introduce myself",
        text: `I consider myself as a T-shaped Front-end developer who focusses on coding but also knows a thing or two about UI and UX. I live in Amsterdam, the Netherlands and can't wait to start exploring the world. I love to mess around with web related technologies and would love to see everything connected to the internet. During my career as a frontend developer I developed a well-balanced knowledge in coding for client-side and server-side.`
      }
    };
  }
};
</script>
<style lang="scss">
.about__content {
  padding: 5em 0;
}
</style>


