import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.loadScript("https://maps.googleapis.com/maps/api/js")

new Vue({
  render: h => h(App),
}).$mount('#app')
