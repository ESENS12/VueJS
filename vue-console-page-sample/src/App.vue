<template>
    <v-app>
        <v-snackbar
            :color="snackColor"
            :bottom="true"
            :right="true"
            v-model="snackbar"
            dark
        >
            <v-icon color="white" class="mr-3">
                mdi-bell-plus
            </v-icon>
            <div>{{ this.snackContent }}</div>
            <v-icon size="16" @click="snackbar = false">
                mdi-close-circle
            </v-icon>
        </v-snackbar>

        <loading
            :loader="dots"
            :active.sync="isLoading"
            :can-cancel="true"
            :on-cancel="false"
            :is-full-page="true"
        ></loading>

        <loginPage
            v-if="!this.isLogin"
            @snack-event="onSnack"
            @login-event="onLogin"
        ></loginPage>

        <v-app id="keep" v-else>
            <!-- <v-app-bar app clipped-left color="amber">
                <v-app-bar-nav-icon @click="this.onDrawer" />
                <span class="title ml-3 mr-5"
                    >FATOS&nbsp;<span class="font-weight-light"
                        >Console</span
                    ></span
                >
                <v-spacer />
            </v-app-bar> -->
            <v-btn
                v-if="responsive"
                class="default v-btn--simple"
                dark
                icon
                @click.stop="onDrawer"
            >
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
            <!-- Navigation Drawer -->
            <v-navigation-drawer
                v-model="drawer"
                app
                floating
                persistent
                mobile-break-point="991"
            >
                <v-img
                    class="ma-10 mt-2"
                    :src="require(`@/assets/${siteName}.png`)"
                />
                <v-list dense>
                    <!-- Itmes -->
                    <template v-for="(item, i) in items" class="transparent">
                        <v-divider
                            v-if="item.divider"
                            :key="i"
                            dark
                            class="my-4"
                        />

                        <v-list-item
                            @click="onItemClick(i)"
                            v-else
                            :key="i"
                            link
                        >
                            <v-list-item-action v-if="item.needAlert">
                                <v-badge
                                    color="error"
                                    bordered
                                    overlap
                                    :content="badgeCnt"
                                >
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-badge>

                                <!-- <v-icon>{{ item.icon }}</!-->
                            </v-list-item-action>

                            <v-list-item-action v-else>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title
                                    v-if="i === selected"
                                    class="blue--text font-weight-bold"
                                >
                                    {{ item.text }}
                                </v-list-item-title>

                                <v-list-item-title
                                    v-else
                                    class="grey--text font-weight-bold"
                                >
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action> </v-list-item-action>
                        </v-list-item>
                    </template>
                </v-list>
                <v-layout class="justify-center align-end mt-12">
                    <v-btn
                        href="https://onemap.fatos.biz"
                        color="accent"
                        target="_blank"
                        minHeight="60px"
                        minWidth="220px"
                        class="font-weight-bold mx-auto mt-12"
                    >
                        DEVELOPER PAGE
                        <v-icon large right dark
                            >mdi-arrow-right-bold-box-outline</v-icon
                        >
                        
                    </v-btn>
                </v-layout>
            </v-navigation-drawer>

            <v-content class="pt-0">
                <router-view
                    @loading-event="onLoading"
                    @security-event="onSecurityEvent"
                    @snack-event="onSnack"
                ></router-view>
            </v-content>
        </v-app>
    </v-app>
</template>

<script>
    import LoginPage from "@/components/LoginPage";
    import config from "@/config";
    import Loading from "vue-loading-overlay";
    import "vue-loading-overlay/dist/vue-loading.css";
    //var ref = document.referrer;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    export default {
        beforeMount() {
            this.siteName = config.siteName;
            // this.isLogin = true;
        },
        mounted() {
            //console.log("query : " , this.$route.query);

            this.onResponsiveInverted();
            window.addEventListener("resize", this.onResponsiveInverted);
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.onResponsiveInverted);
        },

        created() {
            // console.log("document: ",document);
            this.developerUri = config.developerHost;
            // console.log("developerUri : ", this.developerUri);
            let app_token = sessionStorage.ref_token || "";
            if (app_token) {
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }

            this.getKeyData();

            this.URL_item = [""];

            this.IP_item = [""];

            this.Bundle_item = [""];

            //app토큰은 있는데 keyToken이 없을때(refresh한 경우)
            // if (
            //     this.$store.getters.getAppToken &&
            //     !this.$store.getters.getKeyToken
            // ) {
            //     this.$http
            //         .post(
            //             `${config.requestHost}/console/getRegisteredKeybyUser`,
            //             {
            //                 app_token: this.$store.getters.getAppToken
            //             },
            //             `${myHeaders}`
            //         )
            //         .then(({ data }) => {
            //             //key token 재발급

            //             if (data.data.length == 0) {
            //                 // todo 키가 없을 수 없는데(로그인시 발급 하도록 되어있음)... 없을때 처리?
            //                 // this.GenerateNewKey();
            //                 // this.userData = {};
            //             } else {
            //                 this.$store
            //                     .dispatch("GETKEYTOKEN", {
            //                         key_token:
            //                             data.data[data.data.length - 1].id
            //                     })
            //                     .then(() => {
            //                         //데이터 세팅
            //                         this.requestGetServiceUrl();
            //                         this.requestGetServiceIpAddr();
            //                         this.requestGetServiceAppId();
            //                     })
            //                     .catch(({ message }) => (this.msg = message));
            //             }
            //         })
            //         .catch(error => {
            //             console.error("getRegistredKeybyUser err", error);
            //         });
            // } else {
            //     this.requestGetServiceUrl();
            //     this.requestGetServiceIpAddr();
            //     this.requestGetServiceAppId();
            // }
           
        },

        goDeveloper() {
            //config.uri 를 사용해야할지..
        },

        watch: {
            // $route(to) {
            // document.title = "FATOS Console";
            // }
        },

        name: "App",
        components: {
            LoginPage,
            Loading
        },

        props: {
            source: String
        },
        data: () => ({
            URL_item: [],
            IP_item: [],
            Bundle_item: [],
            siteName: "fatos",
            badgeCnt: 0,
            isLoading: false,
            developerUri: "",
            snackColor: "error",
            snackContent: "Something wrong!",
            drawer: null,
            isLogin: false,
            selected: 0,
            responsive: false,
            snackbar: false,
            //navigation drawer item list
            items: [
                { icon: "mdi-key", text: "API Keys", needAlert: false },
                { icon: "mdi-shield-lock", text: "Security", needAlert: false },
                { icon: "mdi-chart-bar", text: "Usage", needAlert: false },
                { divider: true },
                { icon: "mdi-account", text: "Profile", needAlert: false },
                { icon: "mdi-door", text: "Logout", needAlert: false }

                // { icon: 'chat_bubble', text: 'Trash' },
                // { icon: 'help', text: 'Help' },
                // { icon: 'phonelink', text: 'App downloads' },
                // { icon: 'keyboard', text: 'Keyboard shortcuts' },
            ]
        }),
        methods: {
            //로딩이벤트
            onLoading(bIsLoading) {
                // console.log("onLoading : ", bIsLoading);
                this.isLoading = bIsLoading;
            },
            //Security 설정 여부(경고 뱃지 show/hide 용)
            onSecurityEvent(index) {
                // console.log("onSecurity Event!" + index);
                if (index > 0) {
                    this.items[1].needAlert = true;
                } else {
                    this.items[1].needAlert = false;
                }
                this.badgeCnt = index;
            },
            onSnack(type, msg) {
                this.snackColor = type;
                this.snackContent = msg;
                this.snackbar = true;
            },
            onDrawer() {
                // console.log('onDrawer Click! : ' + this.drawer);
                this.drawer = !this.drawer;
            },

            onLogin() {
                this.isLogin = true;
                //첫페이지
                this.$router.replace({ name: this.items[0].text });

                if (
                this.$store.getters.getAppToken &&
                !this.$store.getters.getKeyToken
            ) {
                this.$http
                    .post(
                        `${config.requestHost}/console/getRegisteredKeybyUser`,
                        {
                            app_token: this.$store.getters.getAppToken
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        //key token 재발급

                        if (data.data.length == 0) {
                            // todo 키가 없을 수 없는데(로그인시 발급 하도록 되어있음)... 없을때 처리?
                            // this.GenerateNewKey();
                            // this.userData = {};
                        } else {
                            this.$store
                                .dispatch("GETKEYTOKEN", {
                                    key_token:
                                        data.data[data.data.length - 1].id
                                })
                                .then(() => {
                                    //데이터 세팅
                                    this.requestGetServiceUrl();
                                    this.requestGetServiceIpAddr();
                                    this.requestGetServiceAppId();
                                })
                                .catch(({ message }) => (this.msg = message));
                        }
                    })
                    .catch(error => {
                        console.error("getRegistredKeybyUser err", error);
                    });
            } else {
                this.requestGetServiceUrl();
                this.requestGetServiceIpAddr();
                this.requestGetServiceAppId();
            }
            },
            onItemClick(index) {
                // console.log('onItemCLick : ' + index);
                if (this.items[index].text === "Logout") {
                    this.confirm();
                } else {
                    this.selected = index;
                    this.$router.push({ name: this.items[index].text });
                }
            },

            onLogout() {
                this.$store
                    .dispatch("LOGOUT")
                    .then(() => {
                        this.isLogin = false;
                        this.$router.replace({ name: "Login" });
                    })
                    .catch(({ message }) => (this.msg = message));
            },

            confirm: async function() {
                const res = await this.$dialog.confirm({
                    title: "Logout",
                    text: "Do you really want to Logout?",
                    icon: "warning"
                });

                if (!res) return;
                else this.onLogout();

                // this.$dialog.notify.error("Error!", {
                //     position: "bottom-right"
                // });
            },

            // onClickBtn() {
            //     this.setDrawer(!this.$store.state.app.drawer);
            // },
            onResponsiveInverted() {
                if (window.innerWidth < 991) {
                    this.responsive = true;
                } else {
                    this.responsive = false;
                }
            },

            //key token 재발급
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
                        // console.log(
                        //     "recieved getRegisteredKeybyUser data : ",
                        //     data.data.length
                        // );

                        if (data.data.length == 0) {
                            // 현재 키가 없으면 새로 생성 요청(site는 config에 있는놈으로 자동 세팅)
                        } else {
                            // console.log(
                            //     "used key : ",
                            //     data.data[data.data.length - 1].id
                            // );
                            this.$store
                                .dispatch("GETKEYTOKEN", {
                                    key_token:
                                        data.data[data.data.length - 1].id
                                })
                                .then(() => {
                                    // console.log("after getKeyToken[store]");
                                    this.$emit("login-event");
                                })
                                .catch(({ message }) => (this.msg = message));
                        }
                    })
                    .catch(error => {
                        console.error("getRegistredKeybyUser err", error);
                    });
            },

            /** /console/requestGetServiceUrl
             * @pathParam key : string
             * @pathParam app_token : string
             * 
             * @returns
             *  {
                "result": "OK",
                "service_url": [
                    "fatos.biz",
                    "google.com",
                    "example.com"
                ]
                }
             */
            requestGetServiceUrl() {
                // console.log(
                //     "requestGetServiceUrl ",
                //     this.$store.getters.getKeyToken
                // );

                this.$http
                    .get(
                        `${config.requestHost}/console/getServiceUrl?key=${this.$store.getters.getKeyToken}&app_token=${this.$store.getters.getAppToken}`
                    )
                    .then(response => {
                        if (response.data.result === "OK") {
                            // console.log("url response.data : ", response.data);
                            this.URL_item = this.checkResultIsEmpty(
                                response.data.service_url
                            );
                            this.CheckSecurityAlert();
                            // this.URL_item = response.data.service_url;
                        } else {
                            console.error(
                                "requestGetServiceUrl error : ",
                                response
                            );
                        }
                    })
                    .catch(err => {
                        console.error("request Item failed : ", err);
                    });
            },

            /** /console/requestGetServiceIpAddr
             * @pathParam key : string
             * @pathParam app_token : string
             * 
             * @returns
             *  {
                "result": "OK",
                "service_ipaddr": [
                    "1.1.1.1",
                    "2.2.2.2",
                    "3.3.3.3"
                ]
                }
             */
            requestGetServiceIpAddr() {
                // console.log("requestGetServiceIpAddr");
                this.$http
                    .get(
                        `${config.requestHost}/console/getServiceIpAddr?key=${this.$store.getters.getKeyToken}&app_token=${this.$store.getters.getAppToken}`
                    )
                    .then(response => {
                        if (response.data.result === "OK") {
                            // console.log("ip response.data : ", response.data);
                            this.IP_item = this.checkResultIsEmpty(
                                response.data.service_ipaddr
                            );
                            this.CheckSecurityAlert();
                            // this.IP_item = response.data.service_ipaddr;
                        } else {
                            console.error(
                                "requestGetServiceIpAddr error : ",
                                response
                            );
                        }
                    })
                    .catch(err => {
                        console.error("requestGetServiceIpAddr failed : ", err);
                    });
            },

            /** /console/getServiceAppId
             * @pathParam key : string
             * @pathParam app_token : string
             * 
             * @returns
             *  {
               "result": "OK",
                "service_appid": [
                    "biz.fatos.testapp",
                    "biz.fatos.testapp1",
                    "biz.fatos.testapp2"
                ]
                }
             */
            requestGetServiceAppId() {
                // console.log("requestGetServiceAppId");
                this.$http
                    .get(
                        `${config.requestHost}/console/getServiceAppId?key=${this.$store.getters.getKeyToken}&app_token=${this.$store.getters.getAppToken}`
                    )
                    .then(response => {
                        if (response.data.result === "OK") {
                            // console.log("appId response.data : ", response.data);
                            this.Bundle_item = this.checkResultIsEmpty(
                                response.data.service_appid
                            );
                            this.$emit("loading-event", false);
                            this.CheckSecurityAlert();
                        } else {
                            console.error(
                                "requestGetServiceAppId error : ",
                                response
                            );
                        }
                    })
                    .catch(error => {
                        console.error("requestGetServiceAppId err", error);
                    });
            },

            //경고 알림 뱃지 체크
            CheckSecurityAlert() {
                // console.log("CheckSecurityAlert");
                let cnt = 0;
                if (this.URL_item.length < 1) {
                    cnt += 1;
                }
                if (this.IP_item.length < 1) {
                    cnt += 1;
                }
                if (this.Bundle_item.length < 1) {
                    cnt += 1;
                }
                this.onSecurityEvent(cnt);
                // this.$emit("security-event", cnt);
            },

            //getserviceUrl, getserviceIpAddr, getServiceAppId 의 초기값 result가 공백 배열로 오기떄문에 검증
            checkResultIsEmpty(array) {
                if (array.length == 1) {
                    if (array[0] === "") {
                        return [];
                    }
                }
                return array; //검증 이상 없으면 그대로 리턴
            },

        }
    };
</script>

<style lang="scss">
    @import "@/styles/index.scss";
</style>
