import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
    import ( /* webpackChunkName: "about" */ '../views/Login.vue')

const routes = [{
        path: '/',
        redirect: {
            name: 'Home',
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router