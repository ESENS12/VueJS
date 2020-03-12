<template>
    <v-container>
        <h4>hello this is child component clicked counted : {{this.clickedCount}} </h4>
        <v-btn @click="handleGlobalClick">click!</v-btn>
    </v-container>
</template>

<script>
    import { EventBus } from "@/utils/EventBus";
    export default {
        name: "ChildComponent",
        data: () => ({
            clickedCount: 0
        }),

        created() {
            EventBus.$on("use-eventbus", clickedCount => {
                this.clickedCount = clickedCount;
            });
        },

        methods: {
            handleGlobalClick() {
                this.clickedCount++;
                EventBus.$emit("use-eventbus", this.clickedCount);
            }
        }
    };
</script>
