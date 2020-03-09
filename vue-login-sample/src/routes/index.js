import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloWorld'
import Login from '@/components/LoginPage'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import onemap from '@/components/onemap'
// let baseUrl = "twomap"

Vue.use(Router)

const requireAuth = () => (from, to, next) => {

  const host = window.location.host;
  const parts = host.split('.');
  console.log("parts : ", parts);
  console.log('from : ', from);
  console.log('to : ', to);
  var ref = document.referrer.split('/');

  console.log("baseurl :", ref[ref.length - 1]);
  // baseUrl = ref;
  // router.base = baseUrl;
  console.log('router: ', router);
  next();

}



const router = new Router({
  mode: 'history',
  base : baseUrl,
  routes: [

    {
      path: '/',
      name: 'index',
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth(),
      component: Index

    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth(),
      component: Login
    },

    {
      path: '/first',
      name: 'first',
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth(),
      component: FirstPage
    },

    {
      path: '/second',
      name: 'second',
      beforeEnter: requireAuth(),
      beforeRouteUpdate: requireAuth(),
      component: SecondPage
    },

    {
      path: '/onemap', component: onemap,
      children: [
        {
          path: '/',
          name: 'index',
          beforeEnter: requireAuth(),
          beforeRouteUpdate: requireAuth(),
          component: Index

        },
        {
          path: 'login',
          beforeEnter: requireAuth(),
          beforeRouteUpdate: requireAuth(),
          component: Login
        },

        {
          path: '/first',
          name: 'first',
          beforeEnter: requireAuth(),
          beforeRouteUpdate: requireAuth(),
          component: FirstPage
        },

        {
          path: '/second',
          name: 'second',
          beforeEnter: requireAuth(),
          beforeRouteUpdate: requireAuth(),
          component: SecondPage
        },
      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach to :', to);
  console.log('beforeEach from :', from);
  console.log('beforeEach next :', next);
  // router.base = to.path
  next();
})

export default router