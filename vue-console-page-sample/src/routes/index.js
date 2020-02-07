import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloWorld'
import Login from '@/components/LoginPage'
import APIKey from '@/components/APIKey'
import Logout from '@/components/Logout'
import Profile from '@/components/Profile'
import Usage from '@/components/Usage'
import DeveloperPage from '@/components/DeveloperPage'
import Dashboard from '@/components/Dashboard'

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
    path: '/api',
    name: 'API Keys',
    component: APIKey
  },
  {
    path: '/developer',
    name: 'Developer Page',
    component: DeveloperPage
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/usage',
    name: 'Usage',
    component: Usage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
 ]
})

export default router