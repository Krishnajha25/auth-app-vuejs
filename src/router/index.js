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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '../components/Login')
        // components: Login
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