<template>
  <v-app>
    <v-content>
      <Helloi18n/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Helloi18n from './components/HelloI18n';

export default {
  name: 'App',

  components: {
    Helloi18n,
  },

  data: () => ({
    //
  }),
};
</script>
