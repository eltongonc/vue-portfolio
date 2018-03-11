<template>
  <div id="app">
    <vueHeader></vueHeader>
    <router-view></router-view>
	<vueFooter></vueFooter>
  </div>
</template>

<script>
import vueHeader from './components/partials/Header'
import vueFooter from './components/partials/Footer'



export default {
  name: 'app',
  components: {
    vueHeader,
	vueFooter
  }
}
</script>

<style lang="scss">
    $grid-medium: 32rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;
    $light_grey: #ededed;

    html,
    body,
    #app {
    	margin: 0;
    	padding: 0;
    	height: 100%;
    }
    #app {
      font-family: 'Quicksand', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      /*margin-top: 60px;*/
    }

    /*green #97dcac*/

    .section-header {
        width: 100%;
        font-size: 4em;
        font-weight: bold;
        text-align: center;
        color: #663231;
        margin: .5em 0;
    }

    blockquote {
        border-left: .3em solid #ededed;
        padding-left: 1em;
        color: #999;
        font-style: italic;
    }

    .title {
        width: 100%;
        font-weight: bold;
        text-align: center;
        color: $red;
        margin: 2rem 0;
        text-transform: uppercase;
    }
    .subtitle {
        max-width: $grid-medium;
        margin: 3rem auto;
        text-align: left;
        display: block;
        min-height: 4rem;
    }

    p,
    li {
        line-height: 175%;
    }

    .hidden {
        display: none;
    }
</style>
