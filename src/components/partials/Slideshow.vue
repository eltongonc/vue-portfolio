<template>
	<section>
        <flickity class="carousel" ref="flickity" :options="flickityOptions" >
            <div v-for="item in allImgs" class="carousel-cell"><a  v-on:click="openModal"><img :src="item.link" :alt="item.title"></a></div>
        </flickity>

        <div class="modal .container">
            <button v-on:click="closeModal">X</button>
            <div class="content"><!--JS populated--></div>
        </div>
	</section>
</template>

<script>
import Flickity from 'vue-flickity';

var index = 0;

export default {
	props: ['data'],
	name: 'slideshow',
	data: function(){
		var imgSource = this.data

		return {
			allImgs: this.data,
			image: imgSource[index],
            flickityOptions: {
                initialIndex: 3,
                freeScroll: false,
                lazyLoad: true,
                accessibility: true,
                adaptiveHeight: true
            }
		}
	},
    components: {
        Flickity
    },
	methods: {
		openModal: function(e){

            var modal = document.querySelector('.modal')

            if(e.target.parentNode.parentNode.classList.contains("is-selected")){
                modal.children[1].innerHTML = e.target.outerHTML;
                modal.classList.add('open')
            }
        },
		closeModal: function(e){
            var modal = document.querySelector('.modal')
            modal.classList.remove('open')
        },
	}
}
</script>



<style scoped>
section {
    overflow-x: hidden;
}
.modal {
    flex-wrap: wrap;
    display: flex;
    position: fixed;
	transition: .3s;
	/*transform: scale(0);*/
    opacity: 0;
    visibility: hidden;
	transform-origin: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
}
.modal.open{
    opacity: 1;
    visibility: visible;
	background-color: rgba(0,0,0,0.8);
    z-index: 999;
}
.content {
	width: 100%;
    display: flex;
}
.content img {
    width: 99%;
    height: auto;
    margin: auto;
}
@media (min-width:50em) {
    .content img {
        width: auto;
        height: 99%;
        margin: auto;
    }
}

button {
    border: none;
    color: #663231;
    font-weight: bold;
    font-size: 2em;
    width: 2em;
    height: 2em;
    top: 1%;
    right: 2%;
    border-radius: .3em;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
}
.container {
	width: 100%;
	padding-left: 0;
	padding-right: 0;
}

section {
    padding: 0 0 4em 0;
}

/*carousel*/
.carousel {
  width: 100%;
  margin-right: 10px;
  height: 14em;
}
.carousel-cell {
    transform: scale(0.8);
    transition: .3s;
    width: 50%;
    height: 100%;
    margin-right: 10px;
}
@media (min-width:50em) {
    .carousel-cell {
        width: 50%;
        height: 100%;
    }
}

.carousel-cell a {
    display: block;
    width: 100%;
    height: 14em;
}

.carousel-cell img {
    box-shadow: 0 0 2em #ccc;
    height: 100%;
}

.carousel-cell.is-selected {
  transform: scale(1);
}


</style>
