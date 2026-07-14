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
            path: '/products',
            component: () => import('@/view/product/Index.vue'),
            name: 'products.index'
        },
        {
            path: '/products/add',
            component: () => import('@/view/product/Add.vue'),
            name: 'products.add'
        },
        {
            path: '/products/:id',
            component: () => import('@/view/product/Show.vue'),
            name: 'products.show'
        },
    ]
})

export default router