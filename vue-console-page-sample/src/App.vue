<template>
  <v-app>
    <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer" /> -->
      <v-app-bar-nav-icon @click=this.onDrawer />
      <span class="title ml-3 mr-5">Sample&nbsp;<span class="font-weight-light">Console</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="md-search"
      />

      <v-spacer />
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped 
      color="dark-grey lighten-4"
    >
      <v-list
        dense
        class="dark-grey lighten-4"
      >

      <!-- Itmes -->
        <template v-for="(item, i) in items">
          
          <v-divider
            v-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />

          <v-list-item @click="onItemClick(i)"
            v-else
            :key="i"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text font-weight-bold">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

     <v-content>
      <router-view></router-view>
    </v-content>

    </v-app>
  </v-app>
</template>

<script>

// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      //navigation drawer item list
      items: [

        { icon: 'mdi-key', text: 'API Keys' },
        { icon: 'mdi-xml', text: 'Developer Page' },
        { divider: true },
        { icon: 'mdi-chart-bar', text: 'Usage' },
        { icon: 'mdi-account', text: 'Profile' },
        { icon: 'mdi-door', text: 'Logout' },

        // { icon: 'chat_bubble', text: 'Trash' },
        // { icon: 'help', text: 'Help' },
        // { icon: 'phonelink', text: 'App downloads' },
        // { icon: 'keyboard', text: 'Keyboard shortcuts' },
      ],
    }),
    methods:{
        onDrawer(){
            // console.log('onDrawer Click! : ' + this.drawer);
            this.drawer = !this.drawer;
        },
        onItemClick(index){
          console.log("onItemClick : " , this.items[index].text);
            this.$router.replace({name:this.items[index].text});
            
        }
    }
};
</script>
