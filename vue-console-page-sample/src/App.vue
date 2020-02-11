<template>
    <v-app>
        <loginPage v-if="!this.isLogin" @login-event="onLogin"></loginPage>

        <v-app id="keep" v-else>
            <v-app-bar app clipped-left color="amber">
                <!-- <v-app-bar-nav-icon @click="drawer = !drawer" /> -->
                <v-app-bar-nav-icon @click="this.onDrawer" />
                <span class="title ml-3 mr-5"
                    >FATOS&nbsp;<span class="font-weight-light"
                        >Console</span
                    ></span
                >
                <!-- <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="md-search"
      /> -->

                <v-spacer />
            </v-app-bar>

            <!-- Navigation Drawer -->
            <v-navigation-drawer v-model="drawer" app clipped>
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
                <router-view></router-view>
            </v-content>
        </v-app>
    </v-app>
</template>

<script>
    import LoginPage from "@/components/LoginPage";

    export default {
        beforeMount() {
            // this.isLogin = true;
        },

        created() {
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
            drawer: null,
            isLogin: false,
            selected: 0,
            //navigation drawer item list
            items: [
                { icon: "mdi-key", text: "API Keys" },
                { icon: "mdi-xml", text: "Developer Page" },
                { divider: true },
                { icon: "mdi-shield-lock", text: "Security" },
                { icon: "mdi-chart-bar", text: "Usage" },
                { divider: true },
                { icon: "mdi-account", text: "Profile" },
                { icon: "mdi-door", text: "Logout" },

                // { icon: 'chat_bubble', text: 'Trash' },
                // { icon: 'help', text: 'Help' },
                // { icon: 'phonelink', text: 'App downloads' },
                // { icon: 'keyboard', text: 'Keyboard shortcuts' },
            ]
        }),
        methods: {
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

                if (this.items[index].text === "Logout") {
                    this.confirm();
                } else {
                    this.selected = index;
                    this.$router.replace({ name: this.items[index].text });
                }
            },

            onLogout(){
              this.isLogin = false;
              this.$router.replace({ name: "Login" });
            },

            confirm: async function() {
              
                const res = await this.$dialog.confirm({
                    title: "Logout",
                    text: "Do you really want to Logout?",
                    icon: 'warning'
                });

                if (!res) return 
                else this.onLogout();

                // this.$dialog.notify.error("Error!", {
                //     position: "bottom-right"
                // });
            }
        }
    };
</script>

<style lang="scss">
    @import "@/styles/index.scss";
</style>
