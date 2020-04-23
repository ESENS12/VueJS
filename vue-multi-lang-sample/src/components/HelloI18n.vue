<template>
    <v-app>
        <v-content>
            <v-list>
                <v-list-tile @click="changeLocale">
                    <v-list-tile-title>{{
                        $i18n.locale === "en" ? "English" : "한글"
                    }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
            <p>{{ $t("message") }}</p>
            <v-btn @click="change">{{ $t("change_btn") }}</v-btn>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "HelloI18n",
        methods: {
            change() {
                
                if (this.$i18n.locale === "en") {
                    this.$i18n.locale = "ko";
                } else {
                    this.$i18n.locale = "en";
                }
                
            },
            changeLocale() {
                if (this.$i18n.locale === "en") this.$i18n.locale = "ko";
                else this.$i18n.locale = "en";
            }
        }
    };
</script>
