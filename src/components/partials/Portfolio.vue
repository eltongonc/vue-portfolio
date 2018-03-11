<template>
    <section id="portfolio" class="portfolio">
        <h2 class="title">Portfolio</h2>
        <div class="portfolio__inner">
            <a v-for="item in workList" class="item" :href="'/work/'+ item.urlTitle">
                <div class="item__image" :style="`background-image: url(${item.image_small})`"></div>
                <!-- <img :src="item.image_small" :alt="item.title"> -->
                <div class="item__summary">
                    <h3 class="summary__title">{{item.title}}</h3>
                    <p class="summary__text">{{item.summary}}</p>
                </div>
            </a>
            <a href="https://github.com/eltongonc" class="item">
                <!-- <div class="item__image" :style="`background-image: url(${'../../assets/github.svg'})`"></div> -->

                <img src="../../assets/github.svg" alt="">

                <div class="item__summary">
                    <h3 class="summary__title">View more projects</h3>
                    <p class="summary__text">I have more project om my github page</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
    import workList from "../../assets/allWork.js";

    export default {
        name: "Portfolio",
        data: function(){
            return { workList}
        }
    }
</script>

<style lang="scss">
    $grid-large: 65rem;
    $grid-medium: 50rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;
    $light_grey: #ededed;

    $dark_boxshadow: 0 0 10rem -2rem #000;
    $dark_boxshadow_large: 0 0 1rem 0rem #000;
    $dark_boxshadow_medium: 0 0 5rem -2rem #000;

    .portfolio {
        padding: 5em 0;
        .portfolio__inner {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            min-height: auto;
            max-width: $grid-large;
            margin: 0 auto;
            // padding: .2rem;
            box-sizing: border-box;
            .item {
                box-shadow: $dark_boxshadow_medium;
                display: block;
                align-self: flex-start;
                margin: .2rem;
                min-width: 20rem;
                height: 15rem;
                overflow: hidden;
                flex-grow: 1;
                overflow: hidden;
                position: relative;
                border-radius: .3rem;
                background: $green;
                list-style: none;
                color: #333;

                .item__image,
                img {
                    display: block;
                    height: 100%;
                    width: 100%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    transition: .3s
                }

                .item__summary{
                    width: 100%;
                    background-color: $green;

                    line-height: 5rem;
                    position: absolute;
                    margin: 0;

                    transition: .5s;
                    height: inherit;

                    opacity: 0;
                    bottom: 0;
                    transform: translateY(5rem);
                    .summary__text {
                        text-align: left;
                        padding: 0 2rem;
                    }
                    h3,
                    p {
                        max-width: $grid-medium;
                        margin: 0 auto;
                    }
                }

                &:first-child {
                    min-width: 30rem;
                    flex-grow: 20;
                }
                &:nth-child(6) {
                    min-width: 30rem;
                }
                &:last-child {
                    min-width: 2rem;
                }
                &:hover {
                    .item__image,
                    img {
                        transform: translateY(-5rem);
                    }
                    .item__summary {
                        opacity: 1;
                        transform: translateY(0rem);
                    }
                }
            }
        }
    }


</style>
