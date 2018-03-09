<template>
    <section id="portfolio" class="card-container">
        <h2 class="section-header">Portfolio</h2>
        <article v-for="item in list">
            <figure>
                <img :src="item.image_small" alt="" :title="item.title" />
            </figure>
            <figcaption>
                <h2>{{item.title}}</h2>
                <p>{{item.summary}}</p>
                <a :href="'/work/'+ item.urlTitle">Read more</a>
            </figcaption>
        </article>
        <article>
            <figure>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 viewBox="0 0 32.6 31.8" style="enable-background:new 0 0 32.6 31.8;" xml:space="preserve">
                <path class="st0" fill-rule="evenodd;clip-rule:evenodd" fill="#FFFFFF" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8
                	c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4
                	c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7
                	c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4
                	c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5
                	C32.6,7.3,25.3,0,16.3,0z"/>
                </svg>
            </figure>
            <figcaption>
                <h2>View more projects</h2>
                <p>I have more project om my github page</p>
                <a href="https://github.com/eltongonc">View projects</a>
            </figcaption>
        </article>
    </section>
</template>

<script>
import workList from "../../assets/allWork.js";

export default {
    name: "Portfolio",
    data: function(){
        return { list:workList}
    }
}
</script>

<style scoped>
/*green #97dcac*/
/*red #663231*/

    #portfolio {
        padding: 5em 0;
        align-items: center;
        background-color: #ededed;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    h2 {
        width: 100%;
    }

    article {
        background-color: white;
        border-radius: .3em;
        display: inline-block;
        overflow: hidden;
        width: 20em;
        margin: 1em;
        box-shadow: 0 0 2em #ccc;
    }

    figure {
        margin: 0;
        padding: 0;
        height: 12em;
        overflow: hidden;
        background: #97dcac
    }
    figcaption {
        padding: 1em
    }

    p {
        display: none;
        font-size: 1em;
        line-height: 1.7;
        letter-spacing: 2;
        text-align: left;
        height: 8em;
    }

    img{
        width: 100%;
        margin: auto;
    }

    svg {
        height: 75%;
        padding: 1em;
    }


    a {
        background-color: #663231;
        color: white;
        padding: 1em;
        display: inline-block;
        border-radius: .3em;
        text-decoration: none;
    }
</style>
