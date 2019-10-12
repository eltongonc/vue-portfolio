import Vue from "vue";
import Router from "vue-router";

import { Work, About, Home, Detail, PageNotFound, ContactResponse } from "../components";
import projects, { getDescription } from '../assets/projects.js';

Vue.use(Router);


const router = new Router({
    mode: "history",
    history: true,
    base: __dirname,
    routes: [
        {
            path: "*",
            name: "PageNotFound",
            component: PageNotFound,
            meta: {
                title: () => '404 | Elton Gonçalves Gomes',
                description: "Unfortunately, the page you are looking for does not exist. Send me a message I you are looking for something in particular."
            }
        },
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                title: () => 'Front-End Developer | Elton Gonçalves Gomes',
                description: () => "My name is Elton Gonçalves Gomes. I'm a T-shaped Front-end developer who focusses on coding but also knows a thing or two about UI and UX"
            }
        },
        {
            path: "/about",
            name: "About",
            component: About,
            props: true,
            meta: {
                title: () => 'About Me | Elton Gonçalves Gomes',
                description: () => "My name is Elton Gonçalves Gomes I was born in Cabo Verde and moved to the Netherlands when I was six years old. I’m always working on developing myself and learning new stuff."
            }
        },
        {
            path: "/projects",
            name: "Projects",
            component: Work,
            meta: {
                title: () => 'Projects Overview | Elton Gonçalves Gomes',
                description: () => "Discover a list of various front-end related projects I have worked on."
            }
        },
        {
            path: "/projects/:slug",
            name: "DetailPage",
            component: Detail,
            props:true,
            projects,
            meta: {
                title: (route) => {
                    let title = route.params.slug.replace('-', ' ');
                    title = title[0].toUpperCase() + title.slice(1);

                    return title + ' | Elton Gonçalves Gomes'
                },
                description: (route) => getDescription(route.params.slug)
            }
        },
        {
            path: "/success",
            name: "ContactSuccess",
            component: ContactResponse,
            props:true,
            meta: {
                title: () => 'Contact Success | Elton Gonçalves Gomes',
                description: () => "Thank you for reaching out to me. I will get back to you as soon as possible."
            }
        },
        {
            path: "/failed",
            name: "ContactFail",
            component: ContactResponse,
            props:true,
            meta: {
                title: () => 'Contact Failed | Elton Gonçalves Gomes',
                description: () => "Thank you for reaching out to me. I will get back to you as soon as possible."
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title(to);
    
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', to.meta.description(to));

    console.log(meta);
    document.head.appendChild(meta);

    next()
})

export default router;