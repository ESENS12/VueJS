<template>
    <v-app>
        <v-content>
            <v-list>
                <v-list-tile @click="changeLocale">
                    <v-list-tile-title>{{
                        $i18n.locale === "en" ? "한글" : "English"
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
               if (this.$i18n.locale === "en") this.$i18n.locale = "ko";
                else this.$i18n.locale = "en";

                // this.app.$i18n.setLocaleMessage('ko', require('./ko').default)
                // console.log("change locale from :", this.$i18n.locale);
                // this.$i18n.locale = "ko";
                // console.log("locale now :", this.$i18n.locale);
            },
            changeLocale() {
                if (this.$i18n.locale === "en") this.$i18n.locale = "ko";
                else this.$i18n.locale = "en";
            }
        }
    };
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
