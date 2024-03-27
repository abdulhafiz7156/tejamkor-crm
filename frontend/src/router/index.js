import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../components/Home/Home.vue";
import cookie from "vue-cookies";
const routes = [
    {
        path: '/',
        component: Home,
        meta: { requiresAuth: true },
        name: 'home',
        children: [
            // {
            //     path: '/dashboard',
            //     name: 'e-commerce',
            //     meta: {breadcrumb: ['Home']},
            //     component: () => import('@/views/dashboards/Ecommerce.vue'),
            // },
            // {
            //     path: '/products',
            //     name: 'Products',
            //     component: () => import('@/views/e-commerce/ProductList.vue'),
            // },
            // {
            //     path: '/credit',
            //     name: 'Credit',
            //     component: () => import('@/views/pages/Crud.vue')
            // },
            // {
            //     path: '/finish_credit',
            //     name: 'Finish-Credit',
            //     meta: {
            //         breadcrumb: ['Finish-Credit']
            //     },
            //     component: () => import('@/views/uikit/Table.vue')
            // },
            // {
            //     path: '/create_user',
            //     name: 'Create-User',
            //     meta: {
            //         breadcrumb: ['Create-User']
            //     },
            //     component: () => import('@/views/e-commerce/CreateUser.vue')
            // },
        ],
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('../components/Singin.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: "active",
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const token = cookie.get('token');
    if (to.meta.requiresAuth) {
        if (!token) {
            next('/auth/login');
        } else {
            next();
        }
    } else {
        if (to.name === 'login' && token) {
            next('/');
        } else {
            next();
        }
    }
})

export default router;