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
        path: '/user',
        // name: 'User',
        component: () => import(/* webpackChunkName: "user" */ '../components/User'),
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
                path: '',
                // name: 'Profile',
                component: () => import(/* webpackChunkName: "orders" */ '../components/Profile/Profile'),
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
                path: 'orders',
                name: 'Orders',
                component: () => import(/* webpackChunkName: "orders" */ '../components/Profile/Orders'),
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
                path: 'address',
                name: 'Address',
                component: () => import(/* webpackChunkName: "address" */ '../components/Profile/Address'),
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
                path: 'changePassword',
                name: 'ChangePassword',
                component: () => import(/* webpackChunkName: "change-password" */ '../components/Profile/ChangePassword'),
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
    linkExactActiveClass: 'is-active',
    routes
})

export default router