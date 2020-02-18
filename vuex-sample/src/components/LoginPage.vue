<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title class="topbar"
                                    >Login Sample</v-toolbar-title
                                >
                            </v-toolbar>
                            <v-card-text>
                                <v-form
                                    @submit.prevent="Login(email, password)"
                                >
                                    <v-text-field
                                        v-model="email"
                                        label="Your Email"
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

                                    <v-card-actions>
                                        <v-spacer />
                                        <v-btn color="dark">
                                            <input
                                                type="submit"
                                                value="Login"
                                            />
                                        </v-btn>
                                        <v-btn @click="Logout" color="dark"
                                            >Logout</v-btn
                                        >
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    const privateKey = "~!@#$THISISPRIVATEKEY";
    const jwt = require("jsonwebtoken");
    let userToken = "";

    export default {
        name: "LoginPage",

        beforeMount() {
            // console.log('password : ' + password);
        },

        mounted() {},

        created() {},

        beforeCreate() {},
        data: () => ({
            userData:{
                email: "sjlee@fatoscorp.com",
                firstName: "sens",
                lastName: "lee",
                password: "password",
                uri : "APITOKENTEST",
            },
            email: "",
            password: "",
            msg: ""
        }),

        props: {
            source: String,
            payload: {
                userId: String,
                password: String
            }
        },

        methods: {
            Login(email, password) {
                console.log(
                    "email : " + email,
                    " , " + "password: " + password
                );
                this.$store
                    .dispatch("LOGIN", { email, password })
                    .then(() => {
                        this.$http
                            .post("http://localhost:3000/api/sendMail", this.userData)
                            .then(response => {
                                // $http.post('/login/signin',this.payload)
                                // this.b_isSendMail = true;
                                console.log("response.data : " + response.data);
                                this.redirect();
                            });
                        
                    })
                    .catch(({ message }) => (this.msg = message));
            },

            redirect() {
                console.log("redirect! ");
                // const { search } = window.location;
                // const tokens = search.replace(/^\?/, "").split("&");
                // const { returnPath } = tokens.reduce((qs, tkn) => {
                //     const pair = tkn.split("=");
                //     qs[pair[0]] = decodeURIComponent(pair[1]);
                //     return qs;
                // }, {});
                // console.log("returnPath : " + returnPath);
                this.$router.push("Main");

                // var options = {
                //     audience: "audienceSample", //발급시 넣어준 options과 하나라도 값이 다르면 exception 발생
                //     issuer: "issuerSample",
                //     subject: "subjectSample",
                //     ignoreExpiration: true //검증용 아님, 키발급 만료일 무시할것인지 여부 (false일때 발급만료시 exception발생)
                // };
                // var decoded = jwt.verify(userToken, privateKey, options);

                // //공개 클레임
                // console.log("expires : " + new Date(decoded.exp * 1000));
                // console.log("발급일자 : " + new Date(decoded.iat * 1000));
                // console.log("토큰제목 : " + decoded.sub);
                // console.log("alg : " + decoded.alg);
                // console.log("typ : " + decoded.typ);
                // console.log("kid : " + decoded.kid);
                // console.log(decoded);
                // //사용자 정의 클레임
                // this.payload = decoded.payload;
                // console.log(
                //     "UserId : " + this.payload.userId,
                //     " , password : " + this.payload.password
                // );
            },

            Logout() {
                this.$store
                    .dispatch("LOGOUT")
                    .then(() => this.$router.push("/"));
            },

            async SignUp() {
                this.$http
                    .post("/auth/signup", {
                        userId: this.userId,
                        userPassword: this.password
                    })
                    .then(response => {
                        console.log("response.token : " + response.data.token);

                        this.CheckAuth(response.data.token);
                        // this.payload = response.data
                    })
                    .catch(function(err) {
                        console.log("Exception! : " + err);
                    });

                // this.MakeToken(payload);
            },

            MakeToken(payload) {
                let options = {
                    expiresIn: 1,
                    algorithm: "HS384",
                    issuer: "issuerSample",
                    audience: "audienceSample",
                    subject: "subjectSample",
                    jwtid: "jwtIdSample",
                    keyid: "keyidSample"
                };
                jwt.sign(
                    {
                        payload
                    },
                    privateKey,
                    options,
                    (err, token) => {
                        if (err) {
                            this.CheckAuth();
                            console.log(err);
                            return;
                        }
                        userToken = token;
                        console.log("token : ", userToken);
                    }
                );
            },

            //토큰 검증용 함수
            CheckAuth(token) {
                if (!token) {
                    alert("Invalid Token");
                }

                var options = {
                    ignoreExpiration: true //검증용 아님, 키발급 만료일 무시할것인지 여부 (false일때 발급만료시 exception발생)
                };

                try {
                    var decoded = jwt.verify(token, privateKey, options);

                    console.log(decoded);

                    // this.payload = decoded.payload;
                    // console.log("Decoded UserId : " + this.payload.userId, " , password : " + this.payload.password);
                } catch (err) {
                    console.log("checkAuth Exception : " + err);
                }
            }
        }
    };
</script>

<style>
    .topbar {
        align-self: center;
    }
</style>
