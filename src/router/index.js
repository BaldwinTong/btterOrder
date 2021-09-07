import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () =>
    import ( /* webpackChunkName: "about" */ '../views/Login.vue')
const routes = [{
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

const router = new VueRouter({
    routes
})

// 解决 Vue 重复点击相同路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') return next();
//     const tokenStr = localStorage.getItem('token');
//     if (!tokenStr) return next('/login');
// })

export default router