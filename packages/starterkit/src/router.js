import Vue from 'vue'
import Router from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // This is for the scroll top when click on any router link
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
    // This is for the scroll top when click on any router link
    routes: [
        {
            path: '/',
            redirect: 'starterpage',
            component: () => import('@/layouts/full-layout/Layout'),
            children: [
                {
                    name: 'StarterPage',
                    path: 'starterpage',
                    component: () => import('@/views/StarterPage'),
                },
            ]
        },

        {
            path: '/authentication',
            component: () => import('@/layouts/blank-layout/Blanklayout'),
            children: [
                {
                    name: 'BoxedLogin',
                    path: 'boxedlogin',
                    component: () => import('@/views/authentication/BoxedLogin'),
                },
                {
                    name: 'FullLogin',
                    path: 'fulllogin',
                    component: () => import('@/views/authentication/FullLogin'),
                },
                {
                    name: 'BoxedRegister',
                    path: 'boxedregister',
                    component: () => import('@/views/authentication/BoxedRegister'),
                },
                {
                    name: 'FullRegister',
                    path: 'fullregister',
                    component: () => import('@/views/authentication/FullRegister'),
                },
                {
                    name: 'Error',
                    path: 'error',
                    component: () => import('@/views/authentication/Error'),
                },
            ]
        },
    ],
})