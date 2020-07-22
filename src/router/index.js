import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
// import Login from '../components/Login'
// import { mapGetters, Store } from 'vuex'
// import store from '../store'

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
        component: () => import(/* webpackChunkName: "auth" */ '../components/Auth'),
        beforeEnter: (to, from, next) => {
            if(localStorage.loggedIn){
                // console.log("Logged in")
                next({
                    name: 'Home'
                })
            }else{
                // console.log("Not logged in")
                next()
            }

            // console.log(store.getters.user.loggedIn)
        }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../components/Welcome'),
        beforeEnter: (to, from, next) => {
            if(!localStorage.loggedIn){
                next({
                    name: 'Login'
                })
            } else{
                next()
            }
        }
        
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '../components/Profile'),
        beforeEnter: (to, from, next) => {
            if(!localStorage.loggedIn){
                next({
                    name: 'Login'
                })
            } else{
                next()
            }
        },
        children: [
            {
                path: 'changePassword',
                name: 'ChangePassword',
                component: () => import(/* webpackChunkName: "change-password" */ '../components/ChangePassword'),
                beforeEnter: (to, from, next) => {
                    if(!localStorage.loggedIn){
                        next({
                            name: 'Login'
                        })
                    } else{
                        next()
                    }
                }
            }
        ]
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