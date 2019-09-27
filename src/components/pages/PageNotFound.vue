<template>
	<main class="errorpage">
        <PosterCanvas :title="page.title" :subtitle="page.subtitle"></PosterCanvas>
        <Intro :pageData="pageData"></Intro>
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
                page: {
                    title: "Oops!",
                    subtitle: "It looks like I haven't made this page",
                },
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