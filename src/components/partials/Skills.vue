<template>
    <section id="skills" class="skills">
        <h2 class="title">Skills</h2>
            <Flickity ref="carousel" class="carousel" :options="flickOptions">
                <p class="carousel-cell" id="html" v-on:click="moreInfo">HTML</p>
                <p class="carousel-cell" id="node" v-on:click="moreInfo">Node.js</p>
                <p class="carousel-cell" id="js" v-on:click="moreInfo">Vanilla JS</p>
                <p class="carousel-cell" id="css" v-on:click="moreInfo">CSS</p>
                <p class="carousel-cell" id="ps" v-on:click="moreInfo">Photoshop</p>
                <p class="carousel-cell" id="indesign" v-on:click="moreInfo">Indesign</p>
                <p class="carousel-cell" id="react" v-on:click="moreInfo">React</p>
                <p class="carousel-cell" id="vue" v-on:click="moreInfo">Vue</p>
                <p class="carousel-cell" id="angular" v-on:click="moreInfo">Angular</p>
                <p class="carousel-cell" id="python" v-on:click="moreInfo">Python</p>
                <p class="carousel-cell" id="" v-on:click="moreInfo">PHP</p>
                <p class="carousel-cell" id="" v-on:click="moreInfo">Web of Things</p>
                <p class="carousel-cell" id="" v-on:click="moreInfo">Backend development</p>
                <p class="carousel-cell" id="" v-on:click="moreInfo">Web-App development</p>
            </Flickity>
    </section>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
    name: "Skills",
    components: {
        Flickity
    },
    data() {
        return {
            flickOptions: {
                cellAlign: 'center',
                contain: false,
                resize: false,
                pageDots: false,
                groupCells: 6,
            },
            skills: [
                {name: 'html', img: "/static/html.png"}
            ]
        }
    },
    methods: {
        moreInfo(e){
            console.log(e);
        }
    }
}
</script>

<style lang="scss">
    $grid-medium: 32rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;
    $light_grey: #ededed;
    .skills {
        padding: 5em 0;
        width: 100%;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: .21rem;
            width: $grid-medium;
            background: $light_grey;

        }
        .title {
            width: 100%;
            font-weight: bold;
            text-align: center;
            color: $red;
            margin: 2rem 0;
            text-transform: uppercase;
        }

        .carousel {
            outline: 0;
            padding: 1rem;

            width: 100%;
            height: 100%;
            box-sizing: border-box;
            overflow: hidden;

            cursor: grab;

            .carousel-cell {
                margin: 0 .5rem;
                box-shadow: 0 0 1.5rem 0rem $light_grey;
                width: 10rem;
                height: 6rem;
                border-radius: .3rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                color: white;
                font-weight: bold;
                // text-transform: uppercase;

                background: $green;
                transition: .3s;
                opacity: 0.5;
                transform: scale(0.8);
                &.is-selected {
                    opacity: 1;
                    transform: scale(1);
                  // background: $gr;
                }
            }
            .flickity-viewport {
              transition: height 0.2s;
              margin-bottom: 1rem;
            }
            .flickity-page-dots {
              bottom: -22px;
            }
            /* dots are lines */
            .flickity-page-dots .dot {
              height: 4px;
              width: 40px;
              margin: 0;
              border-radius: 0;
            }
            .flickity-page-dots .dot.is-selected {
              background: white;
            }
            .flickity-prev-next-button {
                display: none;
            }
        }
    }
</style>
