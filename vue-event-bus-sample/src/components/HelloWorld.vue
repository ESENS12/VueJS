<template>
    <v-container>
        <h4>hello this is parent component, clicked counted : {{this.clickedCount}} </h4>
        <v-btn @click="handleGlobalClick">click!</v-btn>
        <ChildComponent></ChildComponent>
    </v-container>
</template>

<script>
    import ChildComponent from "@/components/ChildComponent";
    import {EventBus} from "@/utils/EventBus"
    export default {
        name: "HelloWorld",
        components: {
            ChildComponent
        },

        created(){
          EventBus.$on("use-eventbus", clickedCount => {
            this.clickedCount = clickedCount;
          })
        },
        data: () => ({
            clickedCount : 0,
        }),
        methods: {
            handleGlobalClick() {
                this.clickedCount++;
                EventBus.$emit("use-eventbus", this.clickedCount);
            }
        }
        
    };
</script>
