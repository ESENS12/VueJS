import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/HelloWorld'
import Login from '@/components/LoginPage'
import APIKey from '@/components/APIKey'
import Logout from '@/components/Logout'
import Profile from '@/components/Profile'
import Usage from '@/components/Usage'
import DeveloperPage from '@/components/DeveloperPage'

Vue.use(Router)

const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/api',
     name: 'API Keys',
     component: APIKey
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
 ]
})

export default router