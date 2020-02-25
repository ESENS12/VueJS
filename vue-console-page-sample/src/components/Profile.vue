<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex xs12 md8>
                <material-card
                    color="green"
                    title="Edit Profile"
                    text="Complete your profile"
                >
                    <!-- <v-container class="justify-center" v-if="true">
                        <v-flex xs12 md12>
                            <h5>Input your Password</h5>
                            <v-text-field
                                v-model="user_pass"
                                class="purple-input"
                                label="Password"

                            />
                        </v-flex>

                        <v-flex
                            xs12
                            text-xs-right
                            fluid
                            row
                            class="justify-center"
                        >
                            <v-btn
                                @click="confirmPassword"
                                class="mx-0 font-weight-light justify-center"
                                color="success"
                            >
                                Submit
                            </v-btn>
                        </v-flex>
                    </v-container> -->
                    <v-form>
                        <v-container py-0>
                            <v-layout wrap>
                                <v-flex xs12 md6>
                                    <v-text-field
                                        v-model="this.memo.company"
                                        label="Company"
                                    />
                                </v-flex>
                                <v-flex xs12 md6>
                                    <v-text-field
                                        class="purple-input"
                                        v-model="this.memo.user_name"
                                        label="User Name"
                                    />
                                </v-flex>
                                <v-flex xs12 md12>
                                    <v-text-field
                                        v-model="this.memo.user_mail"
                                        label="Email Address(Can't Edit)"
                                        disabled
                                        class="purple-input"
                                    />
                                </v-flex>

                                <v-flex xs12 md12>
                                    <v-text-field
                                        v-model="this.memo.develop_mails"
                                        label="Development Team Email e.g) test@gmail.com, test2@gmail.com"
                                        class="purple-input"
                                    />
                                </v-flex>

                                <v-flex xs12 text-xs-right>
                                    <v-layout>
                                        <v-btn
                                            @click="updateProfile"
                                            class="mx-auto font-weight-light align-end justify-end"
                                            color="success"
                                        >
                                            Update Profile
                                        </v-btn>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // import Archive from '@/contents/Archive';
    import config from "@/config";
    export default {
        name: "Profile",

        created() {
            this.getUserInfo();
        },
        components: {
            // Archive,
        },
        props: {
            //   source: String,
        },
        data: () => ({
            memo: {
                company: "",
                user_name: "",
                user_mail: "",
                develop_mails: ""
                
            }
        }),
        methods: {
            confirmPassword(password) {
                password = password || "";
                console.log("confirm Password ", password);
                // if(password){

                // }
            },

            //사용자 정보 조회
            getUserInfo() {
                let app_token = this.$store.getters.getAppToken || "";
                if (app_token) {
                    this.$http
                        .post(
                            `${config.requestHost}/auth/getUserInfo/`,
                            { app_token: app_token },
                            `${myHeaders}`
                        )
                        .then(({ data }) => {
                            let result = data.result || "";
                            if (result === "OK") {
                                let userData = data.data[0];
                                console.log("userData : ", userData);
                                this.memo.company = userData.company_name || "";
                                this.memo.user_name = userData.name || "";
                                this.memo.user_mail = userData.email || "";
                            }
                        })
                        .catch(error => {
                            console.error("err: " + error);
                        });
                } else {
                    console.log("apptoken not valid", app_token);
                    //오류 처리 (앱 토큰 없는경우가....??)
                }
            },

            /** /auth/setUser
             * @bodyParam memo : json (optional)
             * @bodyParam app_token : string
             * @bodyParam api_token : string 
             * 
             * @returns
             *  {
                    "result": "OK"
                }

                or 

                {
                    "result": "FAIL",
                    "message": "User authentication failed"
                }
             */
            updateProfile() {
                
                // let user = this.user;
                this.$http
                    .put(
                        `${config.requestHost}/auth/setUser/`,
                        {
                            app_token: this.$store.getters.getAppToken,
                            api_token: this.$store.getters.getApiToken,
                            memo : this.memo
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        console.log("Data : ", data);
                        let result = data.result || "";

                        if (result === "OK") {
                            this.getUserInfo();
                            //  let userData = data.data[0];
                            //   this.company = userData.company_name || '';
                            //   this.user_name = userData.name || '';
                            //   this.user_mail = userData.email || '';
                        }
                    })
                    .catch(error => {
                        console.error("err: " + error);
                    });
            }
        }
    };
</script>

<style>
    #keep .v-navigation-drawer__border {
        display: none;
    }

    .contents {
        background-color: blue;
    }
</style>
