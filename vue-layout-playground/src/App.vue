<template>
  <v-app>    

    <!-- <vuetify-ground/>     -->
    <!-- <StickyTopHeader/> -->
    <Carousels/>    
    <!-- <flex-box/>     -->
  </v-app>
</template>

<script>

// import VuetifyGround from './components/VuetifyGround.vue';
import Carousels from './components/Carousels.vue';
// import FlexBox from './components/FlexBox.vue';
// import MyPlayGround from './components/MyPlayGround.vue'
// import StickyTopHeader from './components/StickyTopHeader.vue'
export default {
  name: 'App',

  components: {
    // StickyTopHeader,
    // VuetifyGround,
    Carousels
    // FlexBox,
  },

  data: () => ({
    
  }),
};
</script>
