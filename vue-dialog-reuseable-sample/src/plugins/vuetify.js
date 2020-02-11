import Vue from 'vue';
import Vuetify, {
    VSnackbar,
    VIcon,
    VDialog,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VSpacer,
    VBtn,
    VToolbar,
    VToolbarTitle,
    VAlert
  } from 'vuetify/lib';
//   import 'vuetify/src/stylus/app.styl'

  Vue.use(Vuetify, {
    iconfont: 'md',
    components: {
      VSnackbar,
      VIcon,
      VDialog,
      VCard,
      VCardTitle,
      VCardText,
      VCardActions,
      VSpacer,
      VBtn,
      VToolbar,
      VToolbarTitle,
      VAlert
    }
  })

export default new Vuetify({
});
