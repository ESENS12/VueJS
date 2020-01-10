import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../components/NotFound.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '*', component: NotFound }
    ]
});

export default router
