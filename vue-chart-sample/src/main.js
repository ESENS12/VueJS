import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false
Vue.use(VueGoogleCharts);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
