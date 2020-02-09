<template>

  <v-container
    pa-0
    fill-height
    fluid
    grid-list-xl>
    
    <v-layout
      justify-left
      wrap
      fill-height fluid
    >
    <!-- Login form --> 
      <v-flex
        xs11
        md11
        column
        d-flex align-content-center flex-wrap
      >

      <v-layout>
        
        <material-card
          color="blue"
          title="SignUp"
          text="Easily And Quick SignUp"
        >

        <v-container  v-if="this.b_isSendMail"> 
            <v-flex
                xs12
                md12
            >
            <h1>Check Your Email And Confirm Please</h1>
            </v-flex>

            <v-flex
                xs12
                text-xs-right
                fluid
                row
                class="justify-center"
                >
                
                  <v-btn
                    @click="goLoginPage"
                    class="mx-0 font-weight-light justify-center"
                    color="success"
                  >
                    Okay!
                  </v-btn>
            </v-flex>
        </v-container>
          <v-form v-else
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
                    label="Company Name(Optional)"
                    class="green-input"/>
                </v-flex>

                  <v-flex
                  xs6
                  md6
                >
                  <v-text-field
                    v-model="userData.firstName"
                    :rules="nameRules"
                    required
                    label="FirstName"
                    class="green-input"/>
                </v-flex>

                    <v-flex
                  xs6
                  md6
                >
                  <v-text-field
                    v-model="userData.lastName"
                    :rules="nameRules"
                    required
                    label="LastName"
                    class="green-input"/>
                </v-flex>
                
                <v-flex
                  xs12
                  md12
                >

                  <v-text-field

                    v-model="userData.email"
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
                    v-model="userData.password"
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
                    SignUp
                  </v-btn>
                  <v-btn
                    @click="goLoginPage"
                    class="ml-5 font-weight-light justify-center"
                    color="blue"
                  >
                    GoBack
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
export default {
    name: 'SignUp',

    beforeMount(){
        // console.log('password : ' + password);
    },

    mounted(){
       
    },

    created () {
    },

    beforeCreate(){
       
    },

    props: {

    },

    data: () => ({
        b_isSendMail : false,
        userData:{
            email : '',
            firstName: '',
            lastName: '',
            password: '',
        },

        valid: false,
        // firstName: '',
        // lastName:'',
        // email: '',      //검증용 
        // password : '', //검증용
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
        ],

        nameRules: [
            v => !!v || 'Name is required',
        ],

        select: null,
        lazy: true,
    }),


    methods:{

        checkForm(){
          // console.log('validate' , this.$refs);
          if (this.$refs.form.validate()) {
            // this.snackbar = true
            
            this.sendMail();
          }
        },

        sendMail(){
            this.$http.get('/sendMail')
                .then((response) => {
                this.b_isSendMail = true;
                console.log("response.data : " + response.data);
                })
        },
        

        goLoginPage(){
        //   console.log("goLoginPage!");
          this.$emit('signup-event');
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
    },
}



</script>

<style>
.topbar{
    align-self: center,
}

</style>