
<template>
   <v-container
        fluid
        class="grey lighten-4 fill-height container--fluid"
      >
        <v-row
          justify="center"
          align="center"
        > 
          <h1>THIS IS APIKey PAGE</h1>
        </v-row>
      </v-container>
</template>

<script>

// import Archive from '@/contents/Archive';

  export default {

    beforeMount(){
        // console.log('password : ' + password);
    },

    mounted(){
       
    },

    created () {
      
    // 컴포넌트가 생성될 때, backend에 data 요청 샘플
    // this.$http.get('/sendMail')
    //     .then((response) => {
    //       console.log("response.data : " + response.data);
    //       // this.payload = response.data
    //     })
    },

    beforeCreate(){
       
    },

    name:"APIKey",
    components:{
        // Archive,
    },
    props: {
    //   source: String,
    },
    data: () => ({
      
    }),
    methods:{
        
    }
  }
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}

.contents{
    background-color: blue;
}

</style>