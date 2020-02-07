import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router  from './routes'
import axios from 'axios'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  icons:{
    iconfont:'md',    
  },
  
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
