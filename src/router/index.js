import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
// import Login from '../components/Login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "auth" */ '../components/Auth')
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../components/Welcome')
    },
    {
        path: '*',
        name: 'Not found',
        component: () => import(/* webpackChunkName: "notfound" */ '../components/Notfound')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router