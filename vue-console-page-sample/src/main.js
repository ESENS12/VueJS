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
Vue.prototype.$http = axios;
Vue.use(require('vue-chartist'));

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

new Vue({
  icons:{
    iconfont:'md',    
  },
  
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
