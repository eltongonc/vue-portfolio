/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
(function(){
    var homeContent = {
        nav:document.querySelectorAll('section ul li a')
    };

    var header = {
        element:document.querySelector('header'),
        button: function(){
            var button = document.createElement("button");
            button.innerHTML="Menu";
            this.element.appendChild(button);
            return button;
        },


    };

    header.element.classList.add("off-screen");

    header.button().addEventListener('click', function(){
        header.element.classList.toggle("off-screen");
    });

    console.log(homeContent.nav);



}());


(function(){
    document.addEventListener("DOMContentLoaded", function(event) {
  var bgImg = document.querySelector('body'),
      rotX = 0,
      rotY = 0,
      wrapperWidth = document.querySelector('body').innerWidth,
      wrapperHeight = document.querySelector('body').innerHeight,
      bgImgWidth = bgImg.innerWidth,
      bgImgHeight = bgImg.innerHeight,
      moveMaxHeight = (bgImgHeight - wrapperHeight)/2,
      moveMaxWidth = (bgImgWidth - wrapperWidth)/2;

    if ( window.DeviceMotionEvent ) {
        window.ondeviceorientation = function(event) {
            beta = event.beta;
            gamma = event.gamma;
            setTimeout(function(){
                normalizeData(gamma, beta);
                console.log(bgImg);
            }, 50);
        };
    }

    function normalizeData(_g, _b){

        b = Math.round(_b);
        g = Math.round(_g);

        rotY += (g - rotY) / 5;
        rotX += (b - rotX) / 5;

        bgImg.style.transform= `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    }
 });


}());
