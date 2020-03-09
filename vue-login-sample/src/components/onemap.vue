<template>
    <v-content>
        <router-view></router-view>
    </v-content>
</template>

<script>
    export default {
        name: "onemap",

        created() {
            console.log("onemap created");
        }
    };
</script>
