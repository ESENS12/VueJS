<template>
  <div>FirstPage! `{{this.$route.params.id}}`</div>
</template>

<script>
export default {
  name: 'FirstPage',

  created(){
    console.log("firstpage created");
  },

};
</script>
