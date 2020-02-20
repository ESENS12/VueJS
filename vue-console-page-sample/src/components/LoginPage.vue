<template>
    <v-container pa-0 fill-height fluid grid-list-xl>
        <v-layout justify-center wrap fill-height fluid>
            <!-- Left Side(Image or Logo) -->
            <v-flex xs5 md5 pb-0>
                <v-layout justify-center wrap fill-height align-content-center>
                    <img src="@/assets/fatos-logo.png" />
                </v-layout>
            </v-flex>

            <!-- Login form -->
            <v-flex xs6 md6 column d-flex align-content-center flex-wrap>
                <v-layout v-if="this.b_isSignUp">
                    <SignUp @signup-event="signUp"></SignUp>
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
                                    <v-flex xs12 md12>
                                        <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            required
                                            label="Email Address"
                                            class="green-input"
                                        />
                                        <!-- purple-input은 보라색이 적용되는데..다른색은 안되는지? 파란색만나옴 -->
                                    </v-flex>

                                    <v-flex xs12 md12>
                                        <v-text-field
                                            :rules="passwordRules"
                                            required
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
                                    <!-- <v-flex
                                        xs12
                                        text-xs-right
                                        fluid
                                        row
                                        id="#dropdown-example"
                                        class="justify-end align-end"
                                    >
                                        <v-container id="dropdown-example-2">
                                            <v-col cols="12">
                                                <v-select
                                                    ref="uri"
                                                    v-model="API_SELECTED"
                                                    :items="API_URI_LIST"
                                                    :menu-props="{
                                                        top: true,
                                                        offsetY: true
                                                    }"
                                                    label="API_URI_LIST"
                                                ></v-select>
                                            </v-col>
                                        </v-container>
                                    </v-flex> -->
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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // import SignIn from '@/components/SignIn';
    import SignUp from "@/components/SignUp";
    import config from "@/config";

    export default {
        name: "LoginPage",

        beforeMount() {
            // console.log('password : ' + password);
        },

        mounted() {},

        created() {
            this.b_isSignUp = false;
            let apitoken = this.$store.getters.getApiToken || "";
            if (!apitoken) {
                this.$store
                    .dispatch("GETAPITOKEN", {
                        userEmail: "email",
                        pass: "pass"
                    })
                    .then(() => {
                        console.log("api token 발급 성공");
                    })
                    .catch(({ message }) => (this.msg = message));
            }
        },

        beforeCreate() {},

        components: {
            SignUp
        },

        props: {},

        data: () => ({
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
            checkForm() {
                const uri = this.API_SELECTED;
                console.log("uri : ", uri);
                config.requestHost = uri;

                if (this.$refs.form.validate()) {
                    // this.snackbar = true
                    this.Login();
                }
            },

            signUp() {
                this.b_isSignUp = !this.b_isSignUp;
                // console.log("signUp");
            },

            Login() {
                const userEmail = this.email;
                const password = this.password;
                const apiToken = this.$store.getters.getApiToken;
                console.log(
                    "try login " +
                        userEmail +
                        "pass : " +
                        password +
                        ", api_token : " +
                        apiToken
                );
                this.$router.app.$emit("snack-event");
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
                        this.$emit("login-event");
                        console.log("recieved login data : ", data);
                    })
                    .catch(error => {
                        this.$emit("snack-event", "error", "Login Failed!");
                        console.error("login err", error);
                    });

                if (this.snackbar) {
                    // this.$router.replace({name:"APIKey"});
                }
            },

            async SignUp() {
                this.$http
                    .post(config.requestHost + "/auth/addUser", this.payload)
                    .then(response => {
                        console.log("response.data : " + response.data);
                    })
                    .catch(err => {
                        console.error("signup err : " + err);
                    });

                console.log("SignUp!");
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
