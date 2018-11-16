<template>
    <section :class="['poster poster--' + className, title? 'poster__page': 'poster__home' ]" :style="'background-image:url('+background+')'">
        <div class="poster__inner">
            <div v-if="!title" class="poster__intro">
                <h1>Hi, I'm Elton Gonçalves Gomes</h1>
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

<style lang="scss" scoped>
$grid-large: 80rem;
$red: #663231;
$green: #97dcac;
$dark_grey: #3d3d49;

.poster {
  height: 28rem;
  background-color: $dark_grey;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;
  .poster__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    .poster__intro {
      transition: 0.3s;
      padding: 1em;
      box-sizing: border-box;
      max-width: 30rem;
      position: absolute;
      z-index: 1;
      h1,
      h2 {
        text-align: left;
        color: white;
        text-shadow: 0 0 10px #333;
        text-transform: uppercase;
        transform: scale(1.5);
        transition: 0.3s;
        max-width: 30em;
      }

      h2 {
        margin: auto;
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: normal;
        position: relative;
        z-index: 1;
      }
      h3 {
        text-align: left;
        color: white;
        text-shadow: 0 0 10px #333;
      }
      .button {
        display: block;
        margin: 2rem auto;
        padding: 1rem;
        text-decoration: none;
        color: white;
        width: 10em;
        text-transform: uppercase;
        border: 0.2rem solid white;
        background-color: transparent;
        border-radius: 0.3rem;
        transition: 0.3s;
        font-weight: bold;
        &:hover {
          background: white;
          color: #333;
        }
      }
    }
  }
  @media (max-width: 50em) {
    height: 20rem;
    .poster__inner {
      .poster__intro {
        bottom: 0;
        max-width: 18em;
        margin: 0 auto;
        h1,
        h2 {
          transform: scale(1);
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
