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
                <v-img class="ma-10 mt-2" :src="require(`@/assets/${siteName}.png`)" />
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
                        v-bind:href="this.developerUri"
                        color="accent"
                        target="_blank"
                        @click="goDeveloper"
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

    export default {
        beforeMount() {
             this.siteName = config.siteName
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
            let app_token = sessionStorage.ref_token || "";
            if (app_token) {
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }
            //console.log("mounted!" , ref);
            // console.log("requestHost : ", this.$store.getters.getConfig.requestHost);
            // console.log("config host : ", config.requestHost);
            //개발중에는 로그인된걸로 치고 작업하자
            // this.onLogin();
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
            siteName : "fatos",
            badgeCnt : 0,
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
                if(index>0){
                    this.items[1].needAlert=true;
                }else{
                    this.items[1].needAlert=false;
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
            }
        }
    };
</script>

<style lang="scss">
    @import "@/styles/index.scss";
</style>
