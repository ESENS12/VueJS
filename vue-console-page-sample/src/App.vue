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
                <v-img class="ma-10 mt-2" src=@/assets/fatos-logo.png />
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
                            <v-list-item-action>
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
                        </v-list-item>
                    </template>
                </v-list>
            </v-navigation-drawer>

            <v-content>
                <router-view @snack-event="onSnack"></router-view>
            </v-content>
        </v-app>
    </v-app>
</template>

<script>
    import LoginPage from "@/components/LoginPage";
    // import config from "@/config";
    //var ref = document.referrer;

    export default {
        beforeMount() {
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
            let app_token = sessionStorage.app_token || "";
            if (app_token) {
                this.isLogin = true;
            }
            //console.log("mounted!" , ref);
            // console.log("requestHost : ", this.$store.getters.getConfig.requestHost);
            // console.log("config host : ", config.requestHost);
            //개발중에는 로그인된걸로 치고 작업하자
            // this.onLogin();
        },

        name: "App",
        components: {
            LoginPage
        },

        props: {
            source: String
        },
        data: () => ({
            snackColor: "error",
            snackContent: "Something wrong!",
            drawer: null,
            isLogin: false,
            selected: 0,
            responsive: false,
            snackbar: false,
            //navigation drawer item list
            items: [
                { icon: "mdi-key", text: "API Keys" },
                { icon: "mdi-xml", text: "Developer Page" },
                { divider: true },
                { icon: "mdi-shield-lock", text: "Security" },
                { icon: "mdi-chart-bar", text: "Usage" },
                { divider: true },
                { icon: "mdi-account", text: "Profile" },
                { icon: "mdi-door", text: "Logout" }

                // { icon: 'chat_bubble', text: 'Trash' },
                // { icon: 'help', text: 'Help' },
                // { icon: 'phonelink', text: 'App downloads' },
                // { icon: 'keyboard', text: 'Keyboard shortcuts' },
            ]
        }),
        methods: {
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
