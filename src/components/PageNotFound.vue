<template>
	<main class="errorpage">
        <Poster name="Oops!" subtitle="It looks like I haven't made this page"></Poster>
        <Intro :pageData="pageData"></Intro>
	</main>
</template>

<script>
    import Poster from './partials/Poster';
    import Intro from './partials/Intro';

    export default {
        components: {
            Poster,
            Intro,
        },
        data() {
            return {
                pageData: {
                    title: 'Try one of these pages instead',
                    summary: `
                    <nav class="errorpage__nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#app">About</a></li>
                            <li><a href="/#skills">Skills</a></li>
                            <li><a href="/#portfolio">Portfolio</a></li>
                            <li><a href=":mailto:eltongonc@gmail.com">Or send me an email instead</a></li>
                        </ul>
                    </nav>`
                }
            }
        },
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

    .errorpage {
        .errorpage__nav {
            ul {
                padding: 0;
                list-style: none;
                li {
                    a {
                        display: inline-block;
                        font-weight: bold;
                        font-size: 1.3rem;
                        text-decoration: none;
                        transition: .3s;
                        color: $red;
                        margin: .4rem 0;
                        &:hover {
                            color: $green;
                        }
                    }
                }
            }
        }
    }
</style>
