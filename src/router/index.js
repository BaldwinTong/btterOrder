import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        redirect: "/welcome",
        component: () =>
            import ('../views/Home.vue'),
        children: [{
            path: '/welcome',
            name: 'Welcome',
            component: () =>
                import ('../views/welcome/welcome.vue'),
            meta: { requiresAuth: true }
        }]
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

const router = new VueRouter({
    routes
})

// 解决 Vue 重复点击相同路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
    let token = store.state.token;
    if (to.meta.requiresAuth) {
        if (token) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

export default router