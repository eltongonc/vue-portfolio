<template>
    <section id="skills" class="skills">
        <h2 class="title">Skills</h2>
        <p class="subtitle">{{skillDesc[descriptionIndex]}}</p>
        <Flickity ref="carousel" class="carousel" :options="flickOptions">
            <div v-for="skill in skills" class="carousel-cell">
                <div :id="skill.id"></div>
                <span>{{skill.name}}</span>
            </div>
        </Flickity>
    </section>
</template>

<script>
    import Flickity from 'vue-flickity';

    import skills from "../../assets/skills.js";

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
                    resize: true,
                    pageDots: false,
                    groupCells: false,
                    autoPlay: true,
                    prevNextButtons: false
                },
                descriptionIndex: 0,
                skillDesc: [],
                skills,
            }
        },
        mounted () {
            let dragPosition = 0;
            this.$refs.carousel.on('dragEnd', () => {
                this.descriptionIndex = this.$refs.carousel.selectedIndex();
            });
            this.$refs.carousel.on('select', () => {
                this.descriptionIndex = this.$refs.carousel.selectedIndex();
            });

            this.skills.forEach((skill) => {
                const element = document.getElementById(skill.id);
                element.outerHTML = skill.svg;
                switch (skill.category) {
                    case 0:
                        this.skillDesc.push('These are my prefered tools and languages I prefere whenever I start a project');
                        break;
                    case 1:
                        this.skillDesc.push('I also have a basic knowledge of the following tools');
                        break;
                    case 2:
                        this.skillDesc.push('These are the things I realy want to learn');
                        break;
                    case 3:
                        this.skillDesc.push('I own a Windows machine but I am not affraid of IOS or Linux');
                        break;

                }
            })
        },
        methods: {
            next(){
                this.$refs.carousel.next();
            },
            previous() {
                this.$refs.carousel.previous();
            },
        }
    }
</script>

<style lang="scss">
    $grid-medium: 32rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;
    $light_grey: #ededed;

    .hidden {
        opacity: 0 !important;
    }
    .skills {
        padding: 5em 0;
        width: 100%;
        position: relative;
        background: $light_grey;
        transition: 3s;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: .21rem;
            width: $grid-medium;
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

                color: white;
                font-weight: bold;
                // text-transform: uppercase;

                background: $green;
                transition: .3s;
                opacity: 0.5;
                transform: scale(0.8);

                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                padding: 1rem;

                span {
                    margin-top: 1rem;
                }
                &.is-selected {
                    opacity: 1;
                    transform: scale(1);
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
        }
    }
</style>
