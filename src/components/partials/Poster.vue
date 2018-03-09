<template>
    <section class="poster">
        <div class="poster__inner">
            <figcaption class="poster__intro">
                <h1>Hi, I'm Elton Gonçalves Gomes</h1>
                <h2>Frontend developer</h2>
                <a href="#about" class="button">Get to know me</a>
            </figcaption>
        </div>
        <canvas ref=canvas id="canvas"></canvas>
    </section>
</template>

<script>
    import { Circle } from '../../classes/Circle';

    export default {
        name: 'Poster',
        data() {
            return {
                canvas: document.getElementById('canvas'),
                ctx:null,
                circles: {
                    container: [],
                    amount: 100,
                },
                mousePos: {
                    range: 15,
                    x: 0,
                    y: 0,
                },
                radius: {
                    max: 100,
                    min: 5,
                },
                colors: [
                    '#1abc9c', // turquoise
                    '#2ecc71', // emerald
                    '#16a085', // green tea
                    '#27ae60', // nephritis
                ]
            }
        },
        methods: {
            setup() {
                this.ctx = this.$refs.canvas.getContext('2d');

                // prevents re-adding circles on resize
                this.circles.container = [];

                // creates circles based on the given amount
                for (var i = 0; i < this.circles.amount; i++) {
                    this.circles.container.push(
                        new Circle(this.ctx, {
                            x: Math.random() * (this.$refs.canvas.width - this.radius.min * 2) + this.radius.min,
                            y: Math.random() * (this.$refs.canvas.height - this.radius.min * 2) + this.radius.min,
                            dx: (Math.random() - 0.4) * 1,
                            dy:(Math.random() - 0.4) * 1,
                            radius:  Math.floor(Math.random() * this.radius.min),
                        })
                    );
                }

                this.resize();
            },

            animate() {
                const mouse = this.mousePos;
                // clear the canvas
                this.ctx.clearRect(0,0, this.$refs.canvas.width, this.$refs.canvas.height);

                // updates the circles
                this.circles.container.forEach(circle =>{circle.update(mouse)})

                // creates a loop for this animate function
                requestAnimationFrame(this.animate);
            },

            input(){
                // const mouse = this.mousePos;
                //
                // this.$refs.canvas.addEventListener('mousemove',function(e){
                //     if(e) {
                //         mouse.x = e.x;
                //         mouse.y = e.y;
                //     }
                // });
                //
                // this.$refs.canvas.addEventListener('mouseleave',function(e){
                //     mouse.x = undefined;
                //     mouse.y = undefined;
                // })
                //
                // this.mousePos = mouse;
                // // updates the circles
                // this.circles.container.forEach(circle =>{circle.update(mouse)})
            },

            startCanvas() {
                // call the settings once
                this.setup();

                // start the animation loop
                this.animate();

                // allow input
                this.input();
            },

            resize() {
                console.log(this.$refs.canvas);
                this.$refs.canvas.width = this.$refs.canvas.parentNode.clientWidth;
                this.$refs.canvas.height = this.$refs.canvas.parentNode.clientHeight;
            },
        },
        beforeMount() {
        },
        mounted() {
            window.addEventListener('resize', this.resize)
            this.resize();
            this.startCanvas();
        },
    }
</script>

<style lang="scss">
    $grid-large: 80rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;

    .poster {
        height: 45rem;

        background-color: $dark_grey;
        // background-image: url("/static/header-small.jpg");
        // background-size: contain;
        // background-repeat: no-repeat;

        canvas {
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            z-index: 0;
        }
        .poster__inner {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            box-sizing: border-box;
            position: relative;
            .poster__intro {
                transition: .3s;
                padding: 1em;
                box-sizing: border-box;
                max-width: 30rem;
                position: absolute;
                z-index: 1;
                h1,
                h2 {
                    text-align: left;
                    color: white;
                    text-shadow: 0 0 10px #333;
                    text-transform: uppercase;
                    transform: scale(1.5);
                }

                h1 {
                    width: 21rem;
                }
                h2 {
                    max-width: 30em;
                    margin: auto;
                    margin-top: 1em;
                    margin-bottom: 1em;
                    font-weight: normal;
                    font-style: italic;
                    transition: 1s;
                    position: relative;
                    z-index: 1;
                }
                .button {
                    display: block;
                    margin: 2rem auto;
                    padding: 1rem;
                    text-decoration: none;
                    color: white;
                    width: 10em;
                    text-transform: uppercase;
                    border: 0.2rem solid white;
                    background-color: transparent;
                    border-radius: .3rem;
                    transition: .3s;
                    font-weight: bold;
                    &:hover {
                        background: white;
                        color: #333;
                    }
                }
            }
        }
        @media (max-width:50em) {
        	height: 20rem;
            .poster__intro {
                h1,
                h2 {
                    transform: scale(1);
                }

            }
        }
    }


</style>
