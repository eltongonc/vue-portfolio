<template>
	<main class="errorpage">
        <Poster :title="page.name" :subtitle="page.subtitle"></Poster>
        <Intro :pageData="pageData"></Intro>
	</main>
</template>

<script>
    import { Poster, Intro } from '../partials';

    export default {
        components: {
            Poster,
            Intro,
        },
        data() {
            return {
                page: {
                    name: "Oops!",
                    subtitle: "It looks like I haven't made this page",
                },
                pageData: {
                    title: "Try one of these pages instead",
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
            };
        },
    };
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
                        text-align: center;
                        background-color: $green;
                        margin-bottom: .3rem;
                        border-radius: .3rem;
                        transition: .3s;
                        box-shadow: $dark_boxshadow;
                    a {
                        display: block;
                        font-weight: bold;
                        font-size: 1.3rem;
                        text-decoration: none;
                        color: $dark_grey;
                        padding: .5rem;
                    }
                    &:last-child {
                        background-color: $light_grey;
                    }
                    &:hover {
                        background-color: darken($green, 10%);
                    }
                }
            }
        }
    }
</style>
