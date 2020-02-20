import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/HelloWorld'
import Login from '@/components/LoginPage'
import APIKey from '@/components/APIKey'
import Logout from '@/components/Logout'
import Profile from '@/components/Profile'
import Usage from '@/components/Usage'
import DeveloperPage from '@/components/DeveloperPage'
import Security from '@/components/Security'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  console.log('from : ' ,  from);
  console.log('to : ' , to);
  var ref = document.referrer;
  console.log('ref : ' , ref);
  
  
  next();
  // console.log(" stored accesstoken " + this.$store.getAccessToken);
  // const {accessToken} = localStorage
  // console.log("accessToken : ",accessToken);
  // if (accessToken) return next()
  // next('/login')
}

const router = new Router({
 mode: 'history',
 routes: [

  {
    path: '/',
    beforeEnter: requireAuth()
  },

   {
     path: '/keys',
     name: 'API Keys',
     component: APIKey,
     beforeEnter: requireAuth()
   },
   {
     path: '/login',
     name: 'login',
     component: Login,
     beforeEnter: requireAuth()
   },
  {
    path: '/developer',
    name: 'Developer Page',
    component: DeveloperPage,
    beforeEnter: requireAuth()
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    beforeEnter: requireAuth()
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: requireAuth()
  },
  {
    path: '/usage',
    name: 'Usage',
    component: Usage,
    beforeEnter: requireAuth()
  },
  {
    path: '/security',
    name: 'Security',
    component: Security,
    beforeEnter: requireAuth()
  },
 ]
})

export default router