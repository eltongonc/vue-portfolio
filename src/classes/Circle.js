const colors = [
  "#1abc9c", // Turquoise
  "#2ecc71", // Emerald
  "#16a085", // Green tea
  "#27ae60" // Nephritis
];

export class Circle {
  draw() {
    // Draw the circles and add some styling
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.c.fillStyle = this.color;
    this.c.globalAlpha = 0.5;

    this.c.fill();
  }

  update(mousePos) {
    // Uncomment to enable movement
    this.movement(this);

    // Uncomment to enable mouse interactivity
    // if (mousePos) {
    // This.interactivity(mousePos);
    // }

    this.draw();
  }

  movement(object) {
    // The movement
    (object.x += object.dx), (object.y += object.dy);

    // Bounce horizontaly
    if (
      object.x + object.radius + object.dx > innerWidth ||
      object.x - object.radius < 0
    ) {
      object.dx = -object.dx;
    }

    // Bounce verticaly
    if (
      object.y + object.radius + object.dy > innerWidth ||
      object.y - object.radius < 0
    ) {
      object.dy = -object.dy;
    }
  }

  constructor(c, props) {
    this.gravity = 0;
    this.friction = 1;
    this.c = c;
    this.radiusMin = props.radius;
    this.radiusMax = 30;
    this.x = props.x;
    this.y = props.y;
    this.dx = props.dx;
    this.dy = props.dy;
    this.radius = props.radius;

    this.color =
      props.color || colors[Math.floor(Math.random() * colors.length)];
    this.grayScale = props.grayscale;
  }
}
