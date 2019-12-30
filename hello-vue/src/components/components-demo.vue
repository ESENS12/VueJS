<template>
    <div id="components-demo">
        <!--<button-counter></button-counter>-->
        <span>component test</span>
    </div>
</template>

<script>
    export default {
        name: "ComponentsDemo",

        data: function () {
            return {
                count: 0
            }
        },
    }

    // Vue.component('button-counter', {
    //     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // });

</script>

<style scoped>

</style>
