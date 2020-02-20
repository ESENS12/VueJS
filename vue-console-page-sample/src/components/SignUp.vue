<template>
    <v-container pa-0 fill-height fluid grid-list-xl>
        <v-layout justify-left wrap fill-height fluid>
            <!-- Login form -->
            <v-flex xs11 md11 column d-flex align-content-center flex-wrap>
                <v-layout>
                    <material-card
                        color="blue"
                        title="SignUp"
                        text="Easily And Quick SignUp"
                    >
                        <v-container
                            class="justify-center"
                            v-if="this.b_isSendMail"
                        >
                            <v-flex xs12 md12>
                                <h2>We've Sent you a Confirmation Email</h2>
                                <h4>Time to Check Your Email</h4>
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
                        <v-form
                            v-else
                            ref="form"
                            v-model="valid"
                            :lazy-validation="lazy"
                        >
                            <v-container py-0>
                                <v-layout wrap>
                                    <v-flex xs12 md12>
                                        <v-text-field
                                            v-model="userData.company_name"
                                            label="Company Name"
                                            class="green-input"
                                            :rules="companyRules"
                                            required
                                        />
                                    </v-flex>

                                    <v-flex xs8 md8>
                                        <v-text-field
                                            v-model="userData.name"
                                            :rules="nameRules"
                                            required
                                            label="Name"
                                            class="green-input"
                                        />
                                    </v-flex>

                                    <v-flex xs4 md4>
                                        <v-text-field
                                            v-model="userData.country_code"
                                            :rules="countryRules"
                                            maxlength="2"
                                            required
                                            label="Country Code"
                                            class="green-input"
                                        />
                                    </v-flex>

                                    <v-flex xs12 md12>
                                        <v-text-field
                                            v-model="userData.email"
                                            :rules="emailRules"
                                            required
                                            label="Email Address"
                                            class="green-input"
                                        />
                                    </v-flex>

                                    <v-flex xs12 md12>
                                        <v-text-field
                                            v-model="userData.pass"
                                            :rules="passwordRules"
                                            required
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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    import config from "@/config";
    export default {
        name: "SignUp",

        beforeMount() {},

        mounted() {},

        created() {},

        beforeCreate() {},

        props: {},

        data: () => ({
            b_isSendMail: false,
            userData: {
                company_name: "",
                email: "",
                name: "",
                api_token: "",
                country_code: "",
                pass: ""
                // uri: ""
            },

            valid: false,

            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            passwordRules: [
                v => !!v || "Password is required",
                v =>
                    /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/.test(v) ||
                    "Password Must Contain (Numbers, Character) at least 6 legnth"
            ],
            nameRules: [v => !!v || "Name is required"],
            countryRules: [
                v => !!v || "CountryCode is required",
                v => /^[0-9]+$/.test(v) || "Country Code Must be Number e.g) 82"
            ],
            companyRules: [v => !!v || "Comany Name required"],

            select: null,
            lazy: true
        }),

        methods: {
            checkForm() {
                if (this.$refs.form.validate()) {

                    let ApiToken = this.$store.getters.getApiToken || "";

                    if (!ApiToken) {
                        this.$store
                            .dispatch("GETAPITOKEN")
                            .then(() => {
                                // let ApiToken = this.$store.getters.getApiToken;
                                this.userData.api_token = ApiToken;
                                this.signUp();
                            })
                            .catch(({ message }) => (this.msg = message));
                    }else{
                        this.userData.api_token = ApiToken;
                        this.signUp();
                    }
                }
            },
            signUp() {
                
                this.$http
                    .post(`${config.requestHost}/auth/addUser`, this.userData)
                    .then(({ data }) => {
                        // console.info(data);
                        // console.log("data.result : ", data.result);
                        if (data.result == "FAIL") {
                            let err_msg = data.message || "SignUp Failed!";
                            this.$emit("snack-event", "error", err_msg);
                        } else {
                            this.sendMail();
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        let err_msg = error.message || "SignUp Failed!";
                        this.$emit("snack-event", "error", err_msg);
                    });
            },

            sendMail() {
                // console.log("sendMail");

                this.$http
                    .post(
                        `${config.requestHost}/console/getEmailConfirmToken/`,
                        {
                            user_email: this.userData.email,
                            api_token: this.userData.api_token
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        // console.log(
                        //     "recieved getEmailConfirmToken data : " +
                        //         data.confirm_token
                        // );

                        this.$http
                            .post("/sendMail", {
                                email: this.userData.email,
                                api_token: data.confirm_token
                            })

                            .then( () => {
                                // $http.post('/login/signin',this.payload)
                                this.b_isSendMail = true;
                                // console.log(
                                //     "sendMail response.data : " + response.data
                                // );
                            })
                            .catch(error => {
                                console.error("sendMail Failed : " + error);
                            });

                        // axios.defaults.headers.common['Authorization'] = `Bearer ${data.api_token}`;
                    })
                    .catch(error => {
                        console.error("err: " + error);
                    });
            },

            goLoginPage() {
                //   console.log("goLoginPage!");
                this.$emit("signup-event");
            }
        }
    };
</script>

<style>
    .topbar {
        align-self: center;
    }
</style>
