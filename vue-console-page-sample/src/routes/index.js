import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/HelloWorld'
import Login from '@/components/LoginPage'
import APIKey from '@/components/APIKey'
import Profile from '@/components/Profile'
import Usage from '@/components/Usage'
import Security from '@/components/Security'
import store from '@/store'
// import config from "@/config";

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  // console.log('from : ' ,  from);
  // console.log('to : ' , to);
  // var ref = document.referrer;
  // console.log('ref : ' , ref);
  // console.log('requireAuth');
  let hours = 1
  let saved = sessionStorage.getItem('saved')

  if (saved && (new Date().getTime() - saved > hours * 60 * 60 * 1000)) {
    // if (saved && (new Date().getTime() - saved > 1000)) {
    //로그아웃 처리해주는게 좋음
    store
      .dispatch("LOGOUT")
      .then(() => {
        // console.log("api token 발급 성공");
        router.go();
      })
      .catch(({ message }) => (this.msg = message));
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

  const getToken = function () {
    return new Promise(function (resolve) {
      let refToken = store.getters.getRefToken || sessionStorage.ref_token;
      // console.log('reftoken  : ' , refToken);

      store
        .dispatch("refreshAppToken", { refToken: refToken, resolve: resolve })
        .then(() => {
          // resolve(true);
          // console.log("refreshAppToken end");
        })
        .catch(({ message }) => (
          this.msg = message

        ));
    });
  }

  getToken().then(function (result) {
    if (result === true) {
      // console.log('getToken success[route resolve]');
      next();
    }
  });



  // urlMapping(from, to);


  // let refToken = store.getters.getRefToken || sessionStorage.ref_token;
  // // console.log('reftoken  : ' , refToken);

  // if (refToken) {
  //   store
  //     .dispatch("refreshAppToken", { refToken })
  //     .then(() => {
  //       // console.log("refreshAppToken end");
  //     })
  //     .catch(({ message }) => (this.msg = message));
  // }


  // next();
  // console.log(" stored accesstoken " + this.$store.getAccessToken);
  // const {accessToken} = localStorage
  // console.log("accessToken : ",accessToken);
  // if (accessToken) return next()
  // next('/login')
}

// const urlMapping = (from, to) => {
//   const host = window.location.host;
//   const parts = host.split('.');
//   console.log("parts : ", parts);
//   console.log("urlMapping");
//   console.log('from : ', from);
//   console.log('to : ', to);
//   var ref = document.referrer;
//   console.log("ref :", ref);
//}


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