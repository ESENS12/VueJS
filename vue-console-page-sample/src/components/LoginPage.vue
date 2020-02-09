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
        xs7
        md7
        mr-1
        column
        d-flex align-content-center flex-wrap
       
      >
      <v-layout  v-if = this.b_isSignUp>
          <SignUp></SignUp>
      </v-layout>
      
      <v-layout v-else>
        
        <material-card
          color="blue"
          title="Login"
          text="Easily And Quick Login"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
              
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="First Name"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Last Name"
                    class="purple-input"/>
                </v-flex>
                <!-- <v-flex
                  xs12
                  md12
                >
                  <v-text-field
                    label="Adress"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="City"
                    class="purple-input"/>
                </v-flex> -->
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Country"
                    class="purple-input"/>
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
                    class="mx-0 font-weight-light justify-center"
                    color="success"
                  >
                    SignIn
                  </v-btn>
                  <v-btn
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
        b_isSignUp : Boolean, //회원가입인지 로그인인지 여부
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