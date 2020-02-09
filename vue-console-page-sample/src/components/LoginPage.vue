<template>

  <v-container
    pa-0
    fill-height
    fluid
    grid-list-xl>
    
    <v-layout
      justify-center
      wrap
      fill-height fluid
    >


    <!-- Left Side(Image or Logo) --> 
    <v-flex
      xs5
      md5
      pb-0
      >

     <v-layout
      justify-center
      wrap
      fill-height
      align-content-center
     >
      <img src="@/assets/fatos-logo.png"/>
     </v-layout>
     </v-flex>
    

    <!-- Login form --> 
      <v-flex
        xs6
        md6
        column
        d-flex align-content-center flex-wrap
       
      >
      <v-layout  v-if = this.b_isSignUp>
          <SignUp @signup-event="signUp" ></SignUp>
      </v-layout>
      
      <v-layout v-else>
        
        <material-card
          color="blue"
          title="Login"
          text="Easily And Quick Login"
        >
          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
          >
            <v-container py-0>
              <v-layout wrap>
              
              
                <v-flex
                  xs12
                  md12
                >
                  <v-text-field

                    v-model="email"
                    :rules="emailRules"
                    required
                    label="Email Address"
                    class="green-input"/> <!-- purple-input은 보라색이 적용되는데..다른색은 안되는지? 파란색만나옴 --> 
                </v-flex>

                <v-flex
                  xs12
                  md12
                >
                  <v-text-field
                    :rules="passwordRules"
                    required
                    label="Password"
                    type="password"
                    class="green-input"/>
                </v-flex>
              
               
                <!-- Bottom Button(Signin, signUp..) layout -->
                <v-flex
                  xs12
                  text-xs-right
                  fluid
                  row
                  class="justify-end align-end"
                >
                
                  <v-btn
                    @click="checkForm"
                    class="mx-0 font-weight-light justify-center"
                    color="success"
                  >
                    SignIn
                  </v-btn>
                  <v-btn
                    @click="signUp"
                    class="ml-5 font-weight-light justify-center"
                    color="blue"
                  >
                    SignUp
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
 
// const privateKey = "~!@#$THISISPRIVATEKEY";
// const jwt = require('jsonwebtoken');
// let userToken = '';
// import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';

export default {
    name: 'LoginPage',

    beforeMount(){
        // console.log('password : ' + password);
    },

    mounted(){
       
    },

    created () {
      this.b_isSignUp = false;
    // 컴포넌트가 생성될 때, backend에 data 요청 샘플
    // this.$http.post('/login/signin',this.payload)
    //     .then((response) => {
    //       console.log("response.data : " + response.data);
    //       // this.payload = response.data
    //     })
    },

    beforeCreate(){
       
    },

    components:{
      SignUp,
    },

    props: {

    },

    data: () => ({
      b_isSignUp : false, //회원가입인지 로그인인지 여부
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      select: null,
      lazy: true,
    }),


    methods:{

        checkForm(){
          // console.log('validate' , this.$refs);
          if (this.$refs.form.validate()) {
            // this.snackbar = true
            this.Login();
          }
        },

        signUp(){
          this.b_isSignUp = !this.b_isSignUp;
          // console.log("signUp");
        },

        Login(){
          this.$emit('login-event');
          //todo   axios http post로 암호화된 id,password 보내고 응답처리
          //현재는 우선 oK 됐다고 치고 다음화면으로.  
          if(this.snackbar){
            // this.$router.replace({name:"APIKey"});
          }
          
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