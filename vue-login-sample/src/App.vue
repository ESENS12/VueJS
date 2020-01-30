<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >
     <span class="mr-2"> Vuetify Sample </span>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

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
