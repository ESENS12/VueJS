import Vue from 'vue'
import App from './App.vue'

import VueStripeMenu from 'vue-stripe-menu'

Vue.use(VueStripeMenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
