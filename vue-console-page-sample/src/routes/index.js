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
import store from '@/store'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {



  // console.log('from : ' ,  from);
  // console.log('to : ' , to);
  // var ref = document.referrer;
  // console.log('ref : ' , ref);

  let hours = 2
  let saved = sessionStorage.getItem('saved')
  if (saved && (new Date().getTime() - saved > hours * 60 * 60 * 1000)) {
    sessionStorage.clear()
  }

  let apitoken = store.getters.getApiToken || "";
  if (!apitoken) {
    store
      .dispatch("GETAPITOKEN")
      .then(() => {
        // console.log("api token 발급 성공");
      })
      .catch(({ message }) => (this.msg = message));
  }

  let refToken = store.getters.getRefToken || "";
  if (refToken) {
    store
      .dispatch("refreshAppToken", { refToken })
      .then(() => {
        // console.log("refreshAppToken end");
      })
      .catch(({ message }) => (this.msg = message));
  }

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
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },

    {
      path: '/keys',
      name: 'API Keys',
      component: APIKey,
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },
    {
      path: '/developer',
      name: 'Developer Page',
      component: DeveloperPage,
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },
    {
      path: '/usage',
      name: 'Usage',
      component: Usage,
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },
    {
      path: '/security',
      name: 'Security',
      component: Security,
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth()
    },
  ]
})

export default router