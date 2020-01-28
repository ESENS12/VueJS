<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>
      <v-flex xs12 sm6 md3 class="pb-2" v-for="i in 4" :key="i">
        <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs9>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text">Blah Blah</div>
                    <h3 class="headline">Some Text</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs3>
                <v-card-title primary-title>
                  <v-avatar>
                    <v-icon large >mdi-account-circle</v-icon>
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-2">
              <v-icon small color="primary">mdi-update</v-icon>
              <span class="grey--text caption font-italic">5분전</span>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout wrap row>
      <v-flex xs12 sm12 md6 class="pb-2" v-for="i in 2" :key="i">
        <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs9>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text">Blah Blah Blah Blah</div>
                    <h3 class="headline">Some Text is here..</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs3>
                <v-card-title primary-title>
                  <v-avatar>
                    <v-icon large >mdi-account-circle</v-icon>
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-2">
                <v-btn icon @click="clickIcon" :id="this" color="blue">
                    <v-icon small color="primary">mdi-update</v-icon>
                </v-btn>
              <span class="grey--text caption font-italic">5분전</span>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import 'vue-material-design-icons/styles.css';

export default {

    name: 'DashBoardSample',

    data: () => ({
        
    }),
    methods:{
        clickIcon(item){
            console.log("clickIcon" , item.srcElement);
        },
    }
}
</script>

<style>

</style>