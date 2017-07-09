<template>
	<section class="container">
		<h3 class="active">{{image.title}}</h3>
		<div>
			<figure class="example" aria-hidden="true">
				<a v-on:click="openModal" :href="image.link">
					<img :src="image.link" :title="image.title">
				</a>
			</figure>

			<button v-on:click="prevImg" class="prev" aria-hidden="true">&#8249;</button>
			<button v-on:click="nextImg" class="next" aria-hidden="true">&#8250;</button>
		</div>

		<div class="modal">
			<button v-on:click="closeModal" name="closeButton">X</button>
			<div class="content">

			</div>
		</div>
	</section>
</template>

<script>
var index = 0;


export default {
	props: ['data'],
	name: 'slideshow',
	data: function(){
		var imgSource = this.data


		return {
			allImgs: this.data,
			image: imgSource[index]
		}
	},
	methods: {
		prevImg: function(){
			if (index > 0) {
				this.prev = true
				index = index -=1;
				this.image = this.data[index]
			}else {
				this.prev = false
			}
		},
		nextImg: function(){
			if (index !== (this.data.length - 1)) {
				this.next = true
				index = index +=1;
				this.image = this.data[index]
			}else {
				this.next = false
			}
		},
		openModal: function(e){
			e.preventDefault();
			var modal = document.querySelector(".modal");
			console.log(modal);
			modal.children[1].innerHTML = ""

			modal.classList.add('open');
			modal.children[1].innerHTML = e.target.outerHTML
		},
		closeModal: function(e){
			var modal = document.querySelector(".modal");
			console.log(modal);
			modal.classList.remove("open");
		}
	}
}
</script>



<style scoped>
.modal {

	transition: .3s;
	transform: scale(0);
	transform-origin: center;
	top: 50%;
	left: 50%;
	height: 0;
	width: 0;
}
.modal.open{
	display: flex;
	flex-wrap: wrap;
	position: fixed;
	transform: scale(1);
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.8);
	z-index: 999;
	height: 100%;
	width: 100%;
}
.content {
	width: 99%;
	overflow: hidden;
	border: solid;
}

.content img {
	width: 100%;
}

.container {
	width: 100%;
	padding-left: 0;
	padding-right: 0;
}

div {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
}

div figure {
	position: relative;
	max-height: 30em;
	width: 100%;
	overflow: hidden;
	order: 0;
}

figure img {
	transition: 1s;
	width: 100%;
	height: auto;
}


button {
	font-size: 2em;
	height: 2em;
	width: 2em;
	background-color: #663231;
	border: none;
	color: white;
	border-radius: 0.1em;
}

button:first-child {
	order: 0
}
button:last-child {
	order: 2
}
@media (min-width: 50em) {
	.content {
		width: auto;
		height: 85%;
		overflow: hidden;
		border: solid;
	}
	.content img {
		width: auto;
		height: 100%;
	}

	div {
		justify-content: center;
	}
	div figure {
		order: 1;
		width: 50%;
	}
	h3 {
		position: static;
	}
}

ul {
	list-style: none;
}
</style>
