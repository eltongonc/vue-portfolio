import Vue from "vue";
import Router from "vue-router";

import { Work, About, Home, Detail, PageNotFound, ContactResponse } from "../components";

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
            }
        },
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                title: () => 'Front-End Developer | Elton Gonçalves Gomes',
            }
        },
        {
            path: "/about",
            name: "About",
            component: About,
            meta: {
                title: () => 'About Me | Elton Gonçalves Gomes',
            }
        },
        {
            path: "/projects",
            name: "Projects",
            component: Work,
            meta: {
                title: () => 'Projects Overview | Elton Gonçalves Gomes',
            }
        },
        {
            path: "/projects/:slug",
            name: "DetailPage",
            component: Detail,
            props:true,
            meta: {
                title: (route) => {
                    let title = route.params.slug.replace('-', ' ');
                    title = title[0].toUpperCase() + title.slice(1);

                    return title + ' | Elton Gonçalves Gomes'
                }
            }
        },
        {
            path: "/success",
            name: "ContactSuccess",
            component: ContactResponse,
            props:true,
            meta: {
                title: () => 'Contact Success | Elton Gonçalves Gomes',
            }
        },
        {
            path: "/failed",
            name: "ContactFail",
            component: ContactResponse,
            props:true,
            meta: {
                title: () => 'Contact Failed | Elton Gonçalves Gomes',
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title(to);
    next()
})

export default router;