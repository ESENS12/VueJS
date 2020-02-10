import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloWorld'
import Main from '@/components/MainPage'
import Login from '@/components/LoginPage'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  
    const {accessToken} = localStorage
    console.log("accessToken : ",accessToken);
    if (accessToken) return next()
    next('/login')
}


const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'Index',
     component: Index
   },
   {
     path: '/main',
     name: 'Main',
     component: Main,
     beforeEnter: requireAuth()
   },
   {
    path: '/login',
    name: 'Login',
    component: Login
  },
 ]
})

export default router