const colors = [
    '#1abc9c', // turquoise
    '#2ecc71', // emerald
    '#16a085', // green tea
    '#27ae60', // nephritis
]

let i = 0;


export class Circle {
    draw(){
        // draw the circles and add some styling
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.c.fillStyle = this.color;
        this.c.globalAlpha = 0.5;

        this.c.fill();
    }

    update(mousePos){
        // uncomment to enable movement
        this.movement(this);

        // uncomment to enable mouse interactivity
        if (mousePos) {
            // this.interactivity(mousePos);
        }

        this.draw();
    }

    movement(object){

        // the movement
        object.x += object.dx, object.y+= object.dy;

        // bounce horizontaly
        if (object.x + object.radius + object.dx > innerWidth || object.x - object.radius < 0){
            object.dx = -object.dx;
        }
    }

    interactivity(mousePos) {
        // if ( (this.x > mousePos.x - mousePos.range && this.x < mousePos.x + mousePos.range) && this.radius < this.radiusMax  ) {
        // }
        //
        // if ( (this.y > mousePos.y - mousePos.range && this.y < mousePos.y + mousePos.range) && this.radius < this.radiusMax  ) {
        //     this.radius += 1
        // }
        //
        // if(this.radius > (this.radiusMin + 1)){
        //     this.radius -= 1
        // }
    }


    constructor(c, props){
        this.gravity = 0;
        this.friction = 1;
        this.c = c;
        this.radiusMin = props.radius
        this.radiusMax = 30;
        this.x = props.x;
        this.y = props.y;
        this.dx = props.dx;
        this.dy = props.dy;
        this.radius = props.radius;

        this.color = props.color || colors[Math.floor(Math.random() * colors.length)];
        this.grayScale = props.grayscale;

    }
}
