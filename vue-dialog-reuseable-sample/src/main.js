import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router  from './routes'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

Vue.config.productionTip = false
Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
