import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/HelloWorld'
import HelloWorld from '@/components/HelloWorld'
import SecondPage from '@/components/SecondPage'
Vue.use(Router)

const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'HelloWorld',
     component: HelloWorld
   },
   {
     path: '/second',
     name: 'SecondPage',
     component: SecondPage
   },
 ]
})

export default router