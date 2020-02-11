<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      
      <v-spacer></v-spacer>
      <v-btn
      @click="changePage(0)"
        text
      >
        <span class="mr-2">Go MainPage</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

       <v-btn
       @click="changePage(1)"
        text
      >
        <span class="mr-2">Go SecondPage</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>


    </v-app-bar>

    <v-content>
          <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    items:[
      {
        text : "HelloWorld"
      },
    
      {
        text : "SecondPage"
      }
    ]
  }),

  methods:{
    changePage(pageIndex){
      
      this.$router.push({name:this.items[pageIndex].text});
      
    }
  }
  
};
</script>
