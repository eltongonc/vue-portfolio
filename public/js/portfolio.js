/************
** vars
*************/
// var primaryColor= "#ebebeb";
// var greenAccent= "#455A64";
// var redAccent= "#607D8B";
// var darkFonts= "#5a5f70";
// var lightFonts= "#7e8c93";

// tells if page is allowed to scroll;
var scrollable = true;

var tl = new TimelineLite();

/****************
** sticky header
****************/
var header = document.querySelector('body > header');
var navItems = document.querySelector('nav ul li');
    navItems.classList.add('hidden');

window.addEventListener('scroll', function(){
    var headerOffset = window.scrollY >= 50;
    // hide the slideshow header if it's present
    if (headerOffset && header.children[2] && header.children[2].className === 'slideshow-container') {
        header.children[2].classList.add('hidden');
    }
    // make the header fixed
    if(headerOffset && scrollable){
        header.classList.add('sticky');
        navItems.classList.remove('hidden');
    }
	else{
        header.classList.remove('sticky');
        navItems.classList.add('hidden');
        header.children[2].classList.remove('hidden');
    }
});

/*************
** nav button
**************/
var menu = document.querySelector('a[href="#navigation"]');
var color = document.querySelector(".transition");

menu.addEventListener('click', function(e){
    e.preventDefault();


    var nav = document.querySelector('nav');

    nav.classList.toggle('offscreen')
	if (menu.classList.contains("close") == false) {
		scrollable = false;
		menu.innerHTML = "X";
		menu.classList.add("close");
		tl.to(color, .3, {height: "15em", opacity: 1})
		.to(["header nav ul li"], .3,{opacity: 1})
	}else {
		scrollable = true;
		document.body.classList.remove("no-scroll");
		menu.innerHTML = "Menu";
		menu.classList.remove("close");

		tl.to(["header nav ul li"], .3,{opacity: 0})
		.to(color, .3, { height: "0", opacity: 0});
	}

	//
    // // var subNav = document.createElement('ul');
    // // subNav.className = "sub-nav";
    // // subNav.innerHTML = `
    // //         <li><a href="/work">Work</a></li>
    // //         <li><a href="/blog">Blog</a></li>
    // //         <li><a href="/about">About</a></li>
    // //         <li><a href="/contact">Contact Me</a></li>
    // // `
    // // menu.parentNode.appendChild(subNav);
	// var closeButton = document.querySelector(".close");
	// closeButton.addEventListener('click',function(){
	// 	menu.classList.remove("close");
	// 	TweenMax.to('header nav', 1, {
	// 		left: "50%",
	// 		top: "50%",
	// 		width: "0",
	// 		height: "0"
	// 	});
	// })


});

/**********************************
** Experimental moving background
**********************************/
// (function(){
//     document.addEventListener("DOMContentLoaded", function(event) {
//         var bgImg = document.querySelector(".profile"),
//             rotX = 0,
//             rotY = 0,
//             wrapperWidth = document.querySelector("body").innerWidth,
//             wrapperHeight = document.querySelector("body").innerHeight,
//             bgImgWidth = bgImg.innerWidth,
//             bgImgHeight = bgImg.innerHeight,
//             moveMaxHeight = (bgImgHeight + wrapperHeight)/2,
//             moveMaxWidth = (bgImgWidth + wrapperWidth)/2;
//
//         if ( window.DeviceMotionEvent ) {
//             window.ondeviceorientation = function(event) {
//                 beta = event.beta;
//                 gamma = event.gamma;
//                 setTimeout(function(){
//                     normalizeData(gamma, beta);
//                     console.log(bgImg);
//                 }, 50);
//             };
//         }
//
//         function normalizeData(_g, _b){
//
//             b = Math.round(_b);
//             g = Math.round(_g);
//
//             rotY += (g - rotY) / 5;
//             rotX += (b - rotX) / 5;
//
//             bgImg.style.transform= `translate(${rotY}px, ${rotX}px)`;
//         }
//     });
//
//
// }());
