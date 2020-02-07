<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title class="topbar">Login Sample</v-toolbar-title>
        
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="userId"
                    label="Your ID"
                    prepend-icon="mdi-person"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="SignUp" color="dark">SignUp</v-btn>
                <v-btn @click="Login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

// const privateKey = "~!@#$THISISPRIVATEKEY";
// const jwt = require('jsonwebtoken');
// let userToken = '';

export default {
    name: 'LoginPage',

    beforeMount(){
        // console.log('password : ' + password);
    },

    mounted(){
       
    },

    created () {
    // 컴포넌트가 생성될 때, backend에 data 요청 샘플
    // this.$http.post('/login/signin',this.payload)
    //     .then((response) => {
    //       console.log("response.data : " + response.data);
    //       // this.payload = response.data
    //     })
    },

    beforeCreate(){
       
    },

    props: {
        source: String,
        payload : {
            userId : String,
            password : String,
        },
    },

    methods:{
        Login(){
          console.log("login!");
        },

        async SignUp(){
            console.log("SignUp!");
        },

        MakeToken(){
            console.log("MakeToken!");
        },
        
        CheckAuth(){
            console.log("CheckAuth!");
        },
    }

}


</script>

<style>
.topbar{
    align-self: center,
}

</style>