<template>
  <v-container>
    <h1>THIS IS HELLOWORLD PAGE</h1>
   
  <v-btn color="red lighten-2" dark @click="confirm">
            Click Me
        </v-btn>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
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
  }
</script>
