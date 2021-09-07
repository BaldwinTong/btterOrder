import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () =>
    import ( /* webpackChunkName: "about" */ '../views/Login.vue')

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Home.vue')
        }, {
            path: '/404',
            name: 'notFound',
            component: () =>
                import ('../views/404.vue')
        }, {
            path: "*",
            redirect: "/404"
        }
    ]
})



// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') return next();
//     const tokenStr = localStorage.getItem('token');
//     if (!tokenStr) return next('/login');
// })

export default router