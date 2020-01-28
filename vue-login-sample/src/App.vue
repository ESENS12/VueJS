<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    />
    <v-content>
      <login-page/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import LoginPage from './components/LoginPage';

export default {
  name: 'App',

  components: {
    LoginPage,
  },

  data: () => ({
    //
  }),
};
</script>
