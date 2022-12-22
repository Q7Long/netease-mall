import { createRouter, createWebHashHistory } from 'vue-router'

export const asyncRoutes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../views/Home/index.vue'),
        meta: {
            isShowBar: true
        }
    },
    {
        path: '/category',
        component: () => import('../views/Category/index.vue'),
        meta: {
            isShowBar: true
        }
    },
    {
        path: '/cart',
        component: () => import('../views/Cart/index.vue'),
        meta: {
            isShowBar: true
        }
    },
    {
        path: '/user',
        component: () => import('../views/User/index.vue'),
        meta: {
            isShowBar: true
        }
    },
    {
        path: '/login',
        component: () => import('../views/Login/index.vue'),
        meta: {
            isShowBar: false
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...asyncRoutes,
        { path: '/:pathMatch(.*)', redirect: '/home' }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router