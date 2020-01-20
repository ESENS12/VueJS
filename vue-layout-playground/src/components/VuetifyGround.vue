<template>
  <v-app>
    <v-app-bar
      app
      color="dark"
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
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="VerticalDiv">
        <div class="HorizontalDiv">
            <v-hover
                v-slot:default="{ hover }"
                disabled
            >
            <v-btn @mouseover="onMouseOver" @mouseleave="onMouseLeave" >
              LEFT</v-btn>
             </v-hover>
             <div v-show="HoverActivation">Hover Message!</div>
            <v-spacer></v-spacer>
            <v-btn>RIGHT</v-btn>
        </div>        
        <p>this is veutify</p>
    </v-content>
  </v-app>
</template>

<script>

let data = {
    HoverActivation : Boolean,
}

export default {

mounted(){
  this.HoverActivation = false;  
},

    name: 'VuetifyGround',
    props: {
        
    },

    data:function(){
        return data
    },
    methods:{
        onMouseOver:function() {
            // console.log("onMouseOver!");
            this.HoverActivation = true;
        },
        onMouseLeave:function(){
            this.HoverActivation = false;
        }
    } 
}
</script>

<style>
.HorizontalDiv{
    display: flex;
    flex-direction: row;
}
.VerticalDiv{
    display: flex;
    flex-direction: row-reverse;
}

</style>