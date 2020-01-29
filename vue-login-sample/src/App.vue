<template>
  <v-app>
    <v-content>
          <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import LoginPage from './components/LoginPage';

export default {
  name: 'App',

  components: {
    // LoginPage,
  },

  data: () => ({
    //
  }),
};
</script>
