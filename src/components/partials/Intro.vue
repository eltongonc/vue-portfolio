<template>
    <section id="about" class="about">
        <div v-if="!pageData" class="intro__text">
            <h2 class="text__title">Let me introduce myself</h2>
            <p class="text__paragraph">I’m a T-shaped Frontend developer who focusses on coding but also knows a thing or two about UI and UX. I love to mess around with web related technologies. During my career as a frontend developer I developed a well-balanced knowledge in coding for client-side and server-side.</p>
            <a href="/#skills" v-on:click.native="scrollTo" class="text__link">But wait there is more</a>
        </div>
        <div class="intro__text" v-else>
            <h2 class="text__title">{{pageData.title}}</h2>
            <p class="text__paragraph" v-html="pageData.summary"></p>
        </div>
	</section>
</template>

<script>
import { TweenLite as tl, } from 'gsap';
import ScrollToPlugin from 'gsap/src/uncompressed/plugins/ScrollToPlugin';

export default {
    name: "Intro",
    props: ['pageData'],
    mounted() {
        console.log(this.pageData);
    },
    methods: {
        scrollTo(e) {
            e.preventDefault();

            const menu = this.$refs.nav;
            menu.classList.remove('nav--open');

            const el = document.querySelector(e.target.hash)
            let yPos = el.offsetTop - el.scrollTop + el.clientTop;
            const target = el.getBoundingClientRect();

            window.setTimeout(()=>{
                tl.to(window, 1, {
                    scrollTo: yPos,
                });
            }, 100)
        }
    }
}
</script>

<style lang="scss">
    $grid-large: 80rem;
    $grid-medium: 32rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;
    $light_grey: #ededed;

    $dark_boxshadow: 0 0 10rem -2rem #000;

    .about {
        padding: 5em 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background-color: #ededed;
        max-width: $grid-large;
        margin: 0 auto;
        transform: translateY(-50%);
        border-radius: .3rem;
        box-shadow: $dark_boxshadow;

        .figure {
            width: 10rem;
            height: 10rem;
            margin: auto;
            overflow: hidden;
            &.figure--circle {
                border-radius: 100%;
                border-radius: 100%;
                .figure__image {
                    width: 100%;
                    height: auto;
                }
            }
        }

        .intro__text {
            max-width: $grid-medium;
            margin: 0 auto;
            color: #333;
            padding: 2rem;
            .text__title {
                font-style: normal;
                text-align: center;
                margin-top: 0;
                text-transform: uppercase;
            }
            .text__paragraph {
                font-style: normal;
                text-align: left;
            }
            .text__link {
                text-align: center;
                font-style: normal;
                color: $red;
                text-decoration: none;
                font-weight: bold;
                transition: .3s;
                padding: 1rem;
                display: block;
                &:hover {
                    color: $green;
                }
            }
        }

        @media (min-width:50em) {
            .intro {
                padding: 10em 0;
                flex-wrap: nowrap;
                .intro__image {
                    width: 20em;
                }
                .intro__text {
                    max-width: 32em;
                    margin: auto;
                }
            }
        }
    }
</style>
