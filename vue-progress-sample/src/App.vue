<template>
  <v-app>
    <v-content>
      <kProgress/>
    </v-content>
  </v-app>
</template>

<script>
import kProgress from './components/k-progress';

export default {
  name: 'App',

  components: {
    kProgress,
  },

  data: () => ({
    //
  }),
};
</script>
