<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
      dark
    >
     <p> Vuetify Sample </p>

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
      <!-- <HelloWorld/> -->
      <!-- <v-flex-sample/> -->
      <dash-board-sample/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import VFlexSample from './components/VFlexSample';
import DashBoardSample from './components/DashBoardSample';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    // VFlexSample,
    DashBoardSample,
  },

  data: () => ({
    //
  }),
};
</script>
