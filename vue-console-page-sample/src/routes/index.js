import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloWorld'
import Login from '@/components/LoginPage'
import Main from '@/components/MainPage'
// import FirstPage from '@/components/FirstPage'
// import SecondPage from '@/components/SecondPage'

Vue.use(Router)

const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'index',
     component: Index
   },
   {
     path: '/login',
     name: 'login',
     component: Login
   },
   {
    path: '/main',
    name: 'main',
    component: Main
  },
 ]
})

export default router