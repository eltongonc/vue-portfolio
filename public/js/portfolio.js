/************
** colors
*************/
var primaryColor= "#ebebeb";
var greenAccent= "#455A64";
var redAccent= "#607D8B";
var darkFonts= "#5a5f70";
var lightFonts= "#7e8c93";
/************
** menu
*************/
var menu = document.querySelector('a[href="#navigation"]');
menu.addEventListener('click', function(e){
    e.preventDefault();
    var subNav = document.createElement('ul');
    subNav.className = "sub-nav";
    subNav.innerHTML = `
            <li><a href="/work">Work</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Me</a></li>
    `
    menu.parentNode.appendChild(subNav);
});
/****************
** sticky header
****************/
var header = document.querySelector('header');
var navItems = document.querySelector('nav ul li');
    navItems.classList.add('hidden');

window.addEventListener('scroll', function(){
    var headerOffsett = window.scrollY >= 30;
    // hide the slideshow header if it's present
    if (headerOffsett && header.children[3] && header.children[3].className === 'slideshow-container') {
        header.children[3].classList.add('hidden');
    }
    // make the header fixed
    if(headerOffsett){
        header.classList.add('sticky');
        navItems.classList.remove('hidden');
    }else{
        header.classList.remove('sticky');
        navItems.classList.add('hidden');
        header.children[3].classList.remove('hidden');
    }
});


/************
** Gooey menu
*************/
(function(){
    var header = {
        element:document.querySelector("header ul"),
        createToggle: function(toggleEvent){
            var button = document.querySelector("header ul button") || document.createElement("button");

            button.innerHTML="Menu"; button.classList.add("toggle");
            this.element.insertAdjacentElement("afterbegin", button);

            button.addEventListener('click', toggleEvent);

            return button;
        },
        listItems: function(){
            // Make it Gooey
            this.element.classList.add("blobs");

            var blobs = document.querySelectorAll("header ul > *");
            for (var i = 0; i < blobs.length; i++) {
                blobs[i].classList.add("blob");
            }
            return blobs;
        }
    };


    header.createToggle(function(){
        var menuButton = this;
        menuButton.innerHTML === "Menu" ? menuButton.innerHTML = "X": menuButton.innerHTML = "Menu";
        // Gooey effect menu
        var blobs = header.listItems();
        for (var i = 0; i < blobs.length; i++) {
            blobs[i].classList.toggle("transition"+i);
        }
    });

}());


/*********
** charts
**********/
var size = {
    width : window.innerWidth,
    height : window.innerHeight,
    aspect : function() {return this.width / this.height;},
};
var canvas = d3.select('#chart');
    canvas.attr("style", "background-color:"+lightFonts);

if (canvas) {
    d3.json("/api", buildSkills);

    // responsive canvas
    window.addEventListener("resize", function() {
        size = {
            width : window.innerWidth,
            height : window.innerHeight,
            aspect : function() {return this.width / this.height;},
        };
        var targetWidth = canvas.node().getBoundingClientRect().width;
        canvas.attr("width", targetWidth);
        canvas.attr("height", targetWidth / size.aspect());
    });
}
function buildSkills(data){
    data = data.reduce(function(accum, item){

        for (var x in item) {
            console.log(x);
            console.log(item[x]);
            return accum[x] += item[x];
        }
        console.log(accum);
    },[]);
    canvas.selectAll("circle").data(data)
        .enter().append("circle")
            .attr({
                fill: greenAccent,
                r: 5,
                cx: 0,
                cy: 0
            });
    console.log(data);
}


/************
** Slideshow
*************/
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (slides) {
    showSlides(slideIndex);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


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
