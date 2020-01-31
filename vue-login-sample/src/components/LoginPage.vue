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

          var options = {
            "audience"   : "audienceSample",
            "issuer" : "issuerSample",   //발급시 넣어준 options과 값이 다르면 exception 발생
            "subject" : "subjectsample",  
            "ignoreExpiration" : true
          }
            var decoded = jwt.verify(userToken, privateKey,options);
            
            //공개 클레임
            console.log("expires : " + new Date(decoded.exp * 1000));
            console.log("발급일자 : " + new Date(decoded.iat * 1000));
            console.log("토큰제목 : " + decoded.sub);
            console.log("alg : " + decoded.alg);
            console.log("typ : " + decoded.typ);
            console.log("kid : " + decoded.kid);
            console.log(decoded);
            //사용자 정의 클레임
            this.payload = decoded.payload;
            console.log("UserId : " + this.payload.userId, " , password : " + this.payload.password);

            // try {
            //   var decoded = jwt.verify(userToken, privateKey, {
            //       ignoreExpiration: true //handled by OAuth2 server implementation
            //   });
              
            //   callback(null, {
            //     accessToken: bearerToken,
            //     clientId: decoded.sub,
            //     userId: decoded.user,
            //     expires: new Date(decoded.exp * 1000)
            //   });

            // } catch(e) {    
            //   callback(e);
            // }

        },
        //node express 로그인 하면 토큰을 발급해주고, 그다음부터는 해당토큰이 맞는지 validate
        async SignUp(){
            const payload = {
                userId : this.userId,
                password : this.password,
            };

            // this.$http.post('/login/signin',{
            //   user:payload
            //   })
            //   .then((response) => {
            //     console.log("response.data : " + response.data);
            //     // this.payload = response.data
            //   })

            this.MakeToken(payload);
            
        },

        MakeToken(payload){

          let options = {
            "expiresIn" : 1,
            "algorithm": "HS384", 
            "issuer" : "issuerSample" , 
            "audience": "audienceSample",
            "subject" : "subjectSample",
            "jwtid" : "jwtIdSample",
            "keyid" : "keyidSample"
          }
            jwt.sign({ 
                 payload
              }, privateKey, options, (err, token) => {

                if(err) {
                    this.CheckAuth();
                    console.log(err);
                    return;
                }
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