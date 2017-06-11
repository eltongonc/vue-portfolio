/************
** colors
*************/
var primaryColor= "#ebebeb";
var greenAccent= "#455A64";
var redAccent= "#607D8B";
var darkFonts= "#5a5f70";
var lightFonts= "#7e8c93";

/****************
** sticky header
****************/
var header = document.querySelector('header');
var navItems = document.querySelector('nav ul li');
    navItems.classList.add('hidden');

window.addEventListener('scroll', function(){
    var headerOffsett = window.scrollY >= 30;
    // hide the slideshow header if it's present
    if (headerOffsett && header.children[2] && header.children[2].className === 'slideshow-container') {
        header.children[2].classList.add('hidden');
    }
    // make the header fixed
    if(headerOffsett){
        header.classList.add('sticky');
        navItems.classList.remove('hidden');
    }else{
        header.classList.remove('sticky');
        navItems.classList.add('hidden');
        console.log(header.children[2]);
        header.children[2].classList.remove('hidden');
    }
});

/*************
** nav button
**************/
var menu = document.querySelector('a[href="#navigation"]');
menu.addEventListener('click', function(e){
    e.preventDefault();

    var nav = document.querySelector('nav');

    nav.classList.toggle('offscreen')
    // var subNav = document.createElement('ul');
    // subNav.className = "sub-nav";
    // subNav.innerHTML = `
    //         <li><a href="/work">Work</a></li>
    //         <li><a href="/blog">Blog</a></li>
    //         <li><a href="/about">About</a></li>
    //         <li><a href="/contact">Contact Me</a></li>
    // `
    // menu.parentNode.appendChild(subNav);
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
