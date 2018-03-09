<template>
    <section class="intro">
        <!-- <div class="figure figure--circle">
            <img src="/static/profile.jpg" alt="profile" class="figure__image">
        </div> -->
        <div class="intro__text">
            <h2 class="text__title">Let me introduce myself</h2>
            <p class="text__paragraph">I’m a T-shaped Frontend developer who focusses on coding but also knows a thing or two about UI and UX. I developed a well-balanced knowledge in coding for client-side and server-side.</p>
            <a href="#" class="text__link">But wait there is more</a>
        </div>
	</section>
</template>

<script>
export default {
    name: "Intro"
}
</script>

<style lang="scss">
    $grid-medium: 32rem;
    $red: #663231;
    $green: #97dcac;
    $dark_grey: #3D3D49;
    $light_grey: #ededed;

    .intro {
        padding: 5em 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background-color: #ededed;

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
