import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from "@/views/dataBinding/List";
import Event from '@/views/event/Click';
import ComputedWatch from '@/views/computedandwatch/Watch';

/**
 * Home과 About의 차이
 * - Home은 vue 파일을 미리 import를 해서 사용
 * - About은 상용자가 /about Path에 접근하기 전까지는
 *   import를 하지않음
 */
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/databinding',
        name: 'DataBinding',
        component: DataBinding
    },
    {
        path: '/event',
        name: 'Event',
        component: Event
    },
    {
        path: '/computed&watch',
        name: 'Computed&Watch',
        component: ComputedWatch
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
