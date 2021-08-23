<template>
    <v-app>
        <!-- <v-app-bar app color="dark" dark>
            <span class="mr-2"> Vuetify Sample </span>

            <v-spacer></v-spacer>

            <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar> -->
        <!-- 
        <loading
            :active.sync="isLoading"
            :can-cancel="true"
            :on-cancel="false"
            :is-full-page="true"
        ></loading> -->

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    // import HelloWorld from './components/HelloWorld';
    // import LoginPage from './components/LoginPage';
    // import Loading from "vue-loading-overlay";
    // import "vue-loading-overlay/dist/vue-loading.css";

    export default {
        name: "App",

        components: {
            //   Loading,
            // LoginPage
        },

        data: () => ({
            // isLoading: true
        }),

        created() {
            // this.doAjax();
        },

        methods: {
            // doAjax() {
            //     this.isLoading = true;
            //     // simulate AJAX
            //     setTimeout(() => {
            //         this.isLoading = false;
            //     }, 5000);
            // },
            onCancel() {
                console.log("User cancelled the loader.");
            }
        }
    };
</script>
