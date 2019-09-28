<template>
	<main class="errorpage">
        <PosterCanvas>
            <h1>Oops!</h1>
            <h2>It looks like I haven't made this page</h2>
            <router-link to="/about" class="button">Contact me</router-link>
        </PosterCanvas>
	</main>
</template>

<script>
    import { PosterCanvas, Intro } from '../partials';

    export default {
        components: {
            PosterCanvas,
            Intro,
        },
        data() {
            return {
                pageData: {
                    title: "Try one of these pages",
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