<template>
    <v-container>
        <h1>THIS IS SecondPage PAGE</h1>

        <v-btn color="red lighten-2" dark @click="confirm">
            Click Me
        </v-btn>

        <!-- <Dialog v-model="modalOpen" dialog="this.modalOpen" /> -->
    </v-container>
</template>

<script>
    // import Dialog from "@/components/Dialog";

    export default {
        name: "SecondPage",
        components: {
        },
        data: () => ({
            modalOpen: false
        }),
        methods: {

            confirm: async function() {

                const r = await this.$dialog.confirm({
                    title: "Dangerous",
                    text: "Are you Sure?"
                });

                if (!r) return this.$dialog.notify.info("Cancel!");

                this.$dialog.notify.error("Error !", {
                    position: "bottom-right"
                });
            }
        }
    };
</script>
