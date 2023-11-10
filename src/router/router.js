import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import UserPageWithStore from "@/pages/UserPageWithStore.vue";

const routes = [
    {
        path: '/',
        component:Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: UserPageWithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
