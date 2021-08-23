import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router  from './routes'
import axios from 'axios'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'chartist/dist/chartist.min.css'

import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vuex from 'vuex'
import store from '@/store'
import config from '@/config'
import '@mdi/font/css/materialdesignicons.css'


var agent = navigator.userAgent.toLowerCase();

 

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

  alert("인터넷 익스플로러 브라우저 입니다.");

}

console.log("ua : ",window.navigator.userAgent);
document.title="FATOS Console"
const requireComponent = require.context(
  '@/components', true, /\.vue$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
});
Vue.config.productionTip = false;
Vue.config.silent = true;

Vue.prototype.$http = axios;
Vue.use(require('vue-chartist'));
Vue.use(Vuex);

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

new Vue({
  icons:{
    iconfont:'md',    
  },
  store,
  router:router,
  vuetify,
  Vuex,
  config,
  render: h => h(App)
}).$mount('#app')
