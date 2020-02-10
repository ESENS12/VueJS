import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router  from './routes'
import axios from 'axios'
import Vuex from 'vuex'

import store from './store'

Vue.use(Vuex);
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router:router,
  vuetify,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
