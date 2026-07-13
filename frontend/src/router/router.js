import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: () => import('@/view/Dashboard.vue'),
            name: 'dashboard.index'
        },
        {
            path: '/products/add',
            component: () => import('@/view/product/Add.vue')
        }
    ]
})

export default router