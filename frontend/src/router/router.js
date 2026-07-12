import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: () => import('@/components/dashboard/index.vue'),
            name: 'dashboard.index'
        }
    ]
})

export default router