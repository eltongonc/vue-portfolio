(function(){
    var header = {
        element:document.querySelector('header ul'),
        listItems: function(){
            var button = document.querySelector('ul button') || document.createElement("button");

            button.innerHTML="Menu"; button.classList.add("toggle");
            // Make it Gooey
            this.element.classList.add("blobs");
            this.element.insertAdjacentElement("afterbegin", button);

            var blobs = document.querySelectorAll('header ul > *');
            for (var i = 0; i < blobs.length; i++) {
                blobs[i].classList.add("blob");
            }
            return {button,blobs};
        }
    };


    header.listItems().button.addEventListener('click', function(){
        var menuButton = this;
        menuButton.innerHTML === "Menu" ? menuButton.innerHTML = "X": menuButton.innerHTML = "Menu"
        // Gooey effect menu
        var blobs = header.listItems().blobs;
        for (i = 0; i < blobs.length; i++) {
            console.log("transition"+i);
                blobs[i].classList.toggle("transition"+i);
        }
    });
}());


/****************
** Experimental
****************/
// (function(){
//     document.addEventListener("DOMContentLoaded", function(event) {
//         var bgImg = document.querySelector('.profile'),
//             rotX = 0,
//             rotY = 0,
//             wrapperWidth = document.querySelector('body').innerWidth,
//             wrapperHeight = document.querySelector('body').innerHeight,
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
