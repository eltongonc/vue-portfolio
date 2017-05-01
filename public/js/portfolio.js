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
    console.dir(menu.children[0])
    console.dir(subNav);
    menu.parentNode.appendChild(subNav);
});
/************
** Slideshow 
*************/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

(function(){
    var header = {
        element:document.querySelector("header ul"),
        createToggle: function(toggleEvent){
            var button = document.querySelector("header ul button") || document.createElement("button");

            button.innerHTML="Menu"; button.classList.add("toggle");
            this.element.insertAdjacentElement("afterbegin", button);

            button.addEventListener(toggleEvent);

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
