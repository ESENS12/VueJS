<template>
    <div>Hello World this is vue {{ this.$route.path }} page</div>
</template>

<script>
    export default {
        name: "HelloWorld",



        created(){
            console.log('index page oncreated! : ', this.$route.path);
        }
    };
</script>
