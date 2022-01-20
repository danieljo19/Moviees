import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        Path: "/",
        name: "dashboard",
        component: () => import ('@/views/dashboard/Main.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import ('@/views/about/Main.vue')
    },
    {
        path: '/movies',
        name: 'movies',
        component: () => import ('@/views/moviees/Main.vue')
    },
    {
        path: '/movies/:rank',
        name: 'detailMovies',
        component: () => import ('@/views/moviees/DetailMovie')
    },
    {
        path: '/trailer/:id',
        name: 'trailer',
        component: () => import ('@/views/moviees/Trailer.vue')
    },
    {
        path: '/dashboard/:rank',
        name: 'detailMovie1',
        component: () => import ('@/views/dashboard/DetailMovie1')
    }];
    
    const router = createRouter({
        history: createWebHistory(),
        routes
    });
    export default router;