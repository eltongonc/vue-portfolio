import Vue from "vue";
import Router from "vue-router";

import { Work, About, Home, Detail, PageNotFound, ContactResponse } from "../components";

Vue.use(Router);

export default new Router({
    mode: "history",
    history: true,
    base: __dirname,
    routes: [
        {
            path: "*",
            name: "PageNotFound",
            component: PageNotFound
        },
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/projects",
            name: "Projects",
            component: Work
        },
        {
            path: "/portfolio/:slug",
            name: "DetailPage",
            component: Detail,
            props:true
        },
        {
            path: "/succes",
            name: "ContactSucces",
            component: ContactResponse,
            props:true
        },
        {
            path: "/failed",
            name: "ContactSucces",
            component: ContactResponse,
            props:true
        },
    ]
});
