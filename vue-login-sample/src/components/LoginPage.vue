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

const privateKey = "~!@#$THISISPRIVATEKEY";
const jwt = require('jsonwebtoken');
let userToken = '';

export default {
    name: 'LoginPage',

    beforeMount(){
        // console.log('password : ' + password);
    },

    mounted(){
       
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
            var decoded = jwt.verify(userToken, privateKey);
            this.payload = decoded.payload;
            console.log("UserId : " + this.payload.userId, " , password : " + this.payload.password);
        },
        //node express 로그인 하면 토큰을 발급해주고, 그다음부터는 해당토큰이 맞는지 validate
        async SignUp(){
            const payload = {
                userId : this.userId,
                password : this.password,
            };

            this.MakeToken(payload);
            
        },

        MakeToken(payload){
            jwt.sign({ 
                 payload
              }, privateKey, { expiresIn: '7d' }, (err, token) => {

                if(err) {
                    this.CheckAuth();
                    console.log(err);
                    return;
                }

                alert('회원가입 성공!');
                userToken = token;
                console.log("token : ",userToken);
            });
        },

        CheckAuth(token){

            if(!token){
                alert('Invalid Token');
            }

        },
    }

}


</script>

<style>
.topbar{
    align-self: center,
}

</style>