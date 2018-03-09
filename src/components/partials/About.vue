<template>
    <section class="about">
        <section id="skills" class="description">
            <h2 class="section-header">Skills</h2>
            <section>
                <h3>My prefered tools and language</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Vanilla JS</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Photoshop</li>
                </ul>
            </section>
            <section>
                <h3>Basic knowledge of</h3>
                <ul>
                    <li>Vue / React</li>
                    <li>jQuery</li>
                    <li>Indesign</li>
                    <li>Python</li>
                    <li>PHP</li>
                </ul>
            </section>
            <section>
                <h3>Things I want to learn</h3>
                <ul>
                    <li>Portuguese</li>
                    <li>Web of Things</li>
                    <li>Backend development</li>
                    <li>Web-App development</li>
                </ul>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>
/*green #97dcac*/
/*red #663231*/
    #about {
        padding: 5em 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background-color: #ededed;
    }
    #about img{
        width: 10em;
        margin: auto;
        border-radius: 100%
        /*border-radius: 100%;*/
    }
    #about h2{
        font-weight: normal;
        text-align: left;
        font-style: italic;
        padding: 1em;
        color: #888
    }

    .description {
        padding: 5em 0;
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
    }
	.description section {
        box-shadow: 0 0 2em #ccc;
        overflow: hidden;
        background: #97dcac;
        margin: auto;
        margin-bottom: 1em;
        border-radius: .3em;
        width: 75%;
        height: 100%;
	}
    .description h3 {
        font-size: 1em;
        margin: 0;
        padding: 1.5em 0;
        display: block;
        background-color: white;
        text-transform: uppercase
    }
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: center;
    }
    li {
        font-size: 1em;
        font-weight: bold;
        /*color:white;*/
        margin: .25em;
        width: 100%;
        padding: 1em;
        background-color: rgba(255,255,255,0.3);

        /*border: 1px solid white;*/
    }
    li:last-child {
        border-radius: 0 0 .3em .3em;
    }
    @media (min-width:50em) {
        #about {
            padding: 10em 0;
            flex-wrap: nowrap;
        }
        #about img {
            width: 20em;
        }
        #about h2 {
            max-width: 32em;
            margin: auto;
        }
        .description h3 {
            height: 2em;
        }
        .description section {
            width: 25em;
            /*height: 26.5em;*/
        }
        li {
            margin: .5em;
            width: 100%;
            padding: 1em;
            border: solid white;
        }
        li:last-child {
            border-radius: 0;
        }
    }
</style>
