<template>
  <div id="app">
    <vueHeader></vueHeader>
    <!-- <img src="./assets/logo.png"> -->
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


//sticky header
window.addEventListener('scroll', function(){
	var headerOffset = window.scrollY >= 50;

	console.log(window.scrollY);
	console.log(window.scrollY >= 50);
	var header = document.querySelector('header section');
	// make the header fixed
	if(headerOffset){
		header.classList.add('sticky');
	}
	else{
		header.classList.remove('sticky');
	}
});
</script>

<style>
html,
body,
#app {
	margin: 0;
	padding: 0;
	height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

main {
	min-height: 65%;
}

main > *{
	padding: 2em;
}
main > *:nth-child(even) {
	background-color: #97dcac;
}
</style>
