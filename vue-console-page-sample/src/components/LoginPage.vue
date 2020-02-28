<template>
    <v-container wrap pa-0 fill-height fluid grid-list-xl>
        <v-layout justify-center wrap fill-height fluid>
            <!-- Left Side(Image or Logo) -->
            <v-flex xs0 sm5 md5 pb-0 class="background-yellow">
                <v-layout justify-center wrap fill-height align-content-center>
                    <!-- <img src="@/assets/onemap_logo.jpg" /> -->
                    <img :src="require(`@/assets/${siteName}.png`)" />
                    
                </v-layout>
            </v-flex>
            <!-- Login form -->
            <v-flex
                xs12
                sm5
                md6
                column
                mx-auto
                d-flex
                align-content-center
                flex-wrap
            >
                <v-layout v-if="this.b_isSignUp">
                    <SignUp
                        @snack-event="onSnack"
                        @signup-event="signUp"
                    ></SignUp>
                </v-layout>

                <v-layout v-else>
                    <material-card
                        color="blue"
                        title="SignIn"
                        text="Easily And Quick SignIn"
                    >
                        <v-form
                            ref="form"
                            v-model="valid"
                            :lazy-validation="lazy"
                        >
                            <v-container py-0>
                                <v-layout wrap>
                                    <v-flex xs12 md12>
                                        <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            required
                                            @keyup.13="checkForm"
                                            label="Email Address"
                                            class="green-input"
                                        />
                                        <!-- purple-input은 보라색이 적용되는데..다른색은 안되는지? 파란색만나옴 -->
                                    </v-flex>

                                    <v-flex xs12 md12>
                                        <v-text-field
                                            :rules="passwordRules"
                                            required
                                            @keyup.13="checkForm"
                                            v-model="password"
                                            label="Password"
                                            type="password"
                                            class="green-input"
                                        />
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
         <loading
            :loader="dots"
            :active.sync="isLoading"
            :can-cancel="true"
            :on-cancel="false"
            :is-full-page="true"
        ></loading>
    </v-container>
</template>

<script>
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // import SignIn from '@/components/SignIn';
    import SignUp from "@/components/SignUp";
    import config from "@/config";

    import Loading from "vue-loading-overlay";
    import "vue-loading-overlay/dist/vue-loading.css";

    export default {
        name: "LoginPage",

        beforeMount() {
            this.siteName = config.siteName
            // this.$emit("loading-event",true);
            // console.log('password : ' + password);
            // this.isLoading = true;
        },

        mounted() {},

        created() {
            this.b_isSignUp = false;
        },

        beforeCreate() {},

        components: {
            SignUp,
            Loading
        },

        props: {},

        data: () => ({
            siteName : "fatos",
            isLoading : false,
            API_SELECTED: "https://betamaps.fatos.biz",
            API_URI_LIST: [
                { text: "https://betamaps.fatos.biz" },
                { text: "http://localhost:8080" },
                { text: "http://localhost:3000" }
            ],
            b_isSignUp: false, //회원가입인지 로그인인지 여부
            valid: false,
            email: "",
            password: "",
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            passwordRules: [v => !!v || "Password is required"],
            select: null,
            lazy: true
        }),

        methods: {
            getIconSrc(){
                console.log("siteName : ",config.iconPath);
                return config.iconPath; 
            },
            checkForm() {
                const uri = this.API_SELECTED;
                // console.log("uri : ", uri);
                config.requestHost = uri;

                if (this.$refs.form.validate()) {
                    let ApiToken = this.$store.getters.getApiToken || "";
                    this.isLoading = true;
                    if (!ApiToken) {
                        this.$store
                            .dispatch("GETAPITOKEN")
                            .then(() => {
                                
                                this.Login();
                                
                            })
                            .catch(({ message }) => (this.msg = message));
                    } else {
                        this.Login();
                    }

                    // this.snackbar = true
                    // this.Login();
                }
            },

            signUp() {
                this.b_isSignUp = !this.b_isSignUp;
                // console.log("signUp");
            },

            Login() {
                // this.$emit("loading-event",true);

                const userEmail = this.email;
                const password = this.password;
                const apiToken = this.$store.getters.getApiToken;

                this.$http
                    .post(
                        `${config.requestHost}/auth/login`,
                        {
                            email: userEmail,
                            pass: password,
                            api_token: apiToken
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                       
                        // console.log("recieved login data : ", data);

                        var app_token = data.app_token;
                        var ref_token = data.ref_token;

                        this.$store
                            .dispatch("LOGIN", {
                                appToken: app_token,
                                refToken: ref_token
                            })
                            .then(() => {
                                //app token 생성 후 key Data 확인
                                this.getKeyData();
                            })
                            .catch(({ message }) => (this.msg = message));
                    })
                    .catch(error => {
                        this.$emit(
                            "snack-event",
                            "error",
                            "Login Failed Check Your Email or Password"
                            
                        );
                        this.isLoading = false;
                        // this.$emit("loading-event",false);
                        console.error("login err", error);
                    });

                if (this.snackbar) {
                    // this.$router.replace({name:"APIKey"});
                }
            },

            getKeyData() {
                this.$http
                    .post(
                        `${config.requestHost}/console/getRegisteredKeybyUser`,
                        {
                            app_token: this.$store.getters.getAppToken
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        console.log(
                            "recieved getRegisteredKeybyUser data : ",
                            data.data.length
                        );

                        if (data.data.length == 0) {    // 현재 키가 없으면 새로 생성 요청(site는 config에 있는놈으로 자동 세팅)
                            this.GenerateNewKey();
                            this.userData = {};
                        } else {
                            console.log('used key : ',data.data[data.data.length-1].id );
                            this.$store
                                .dispatch("GETKEYTOKEN", {
                                    key_token: data.data[data.data.length-1].id
                                })
                                .then(() => {
                                    console.log("after getKeyToken[store]");
                                    this.isLoading = false;
                                    this.$emit("login-event");
                                })
                                .catch(({ message }) => (this.msg = message));
                                
                        }
                    })
                    .catch(error => {
                        console.error("getRegistredKeybyUser err", error);
                    });
            },

            GenerateNewKey() {
                let siteId = -1; //site id
                if (config.developerHost.includes("onemap")) {
                    siteId = "34"; //onemap(sla)
                } else if (config.developerHost.includes("nostramap")) {
                    siteId = "26"; //nostramap(CDG)
                } else {
                    siteId = "1"; //fatos
                }
                this.$http
                    .post(
                        `${config.requestHost}/console/generateNewKey?site_id=${siteId}&app_token=${this.$store.getters.getAppToken}`,
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        console.log("generateNewKey Success : ", data);
                        this.$store
                            .dispatch("GETKEYTOKEN", {
                                key_token: data.key
                            })
                            .then(() => {
                                console.log("after generateNewKey[store]");
                                this.$emit("login-event");
                            })
                            .catch(({ message }) => (this.msg = message));
                    })
                    .catch(err => {
                        console.error("generateNew Key Error! : ", err);
                    });
            },

            async SignUp() {
                this.$http
                    .post(config.requestHost + "/auth/addUser", this.payload)
                    .then(() => {
                        // console.log("response.data : " + response.data);
                    })
                    .catch(err => {
                        console.error("signup err : " + err);
                    });

                // console.log("SignUp!");
            },

            keyEvent(e) {
                console.log("keyEvent ", e);
                if (e.keyCode === 13) {
                    this.checkForm();
                }
            },
            onSnack(type, msg) {
                this.$emit("snack-event", type, msg);
            },

            MakeToken() {
                console.log("MakeToken!");
            },

            CheckAuth() {
                console.log("CheckAuth!");
            }
        }
    };
</script>

<style>
    .topbar {
        align-self: center;
    }
</style>
