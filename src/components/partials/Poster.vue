<template>
    <section :class="['poster poster--' + className, title? 'poster__page': 'poster__home' ]" :style="'background-image:url('+background+')'">
        <div class="poster__inner container">
            <div class="poster__intro row">
                <slot></slot>
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