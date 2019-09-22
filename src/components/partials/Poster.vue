<template>
    <section :class="['poster poster--' + className, title? 'poster__page': 'poster__home' ]" :style="'background-image:url('+background+')'">
        <div class="poster__inner container">
            <div v-if="!title" class="poster__intro row">
                <h1>Hi my name is Elton Goncalves Gomes.</h1>
                <h2>I am a Front-end developer and I can help you with a new website.</h2>
                <router-link v-if="this.$router.currentRoute.path === '/'" to="/contact" v-on:click.native="scrollTo" class="text__link">Contact me</router-link>
            </div>
            <div v-else class="poster__intro">
                <h1>{{title}}</h1>
                <h2>{{subtitle}}</h2>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: "Poster",
  props: ["title", "summary", "subtitle", "background"],
  data() {
    return {
      className: this.$route.name.toLowerCase(),
    };
  },
};
</script>