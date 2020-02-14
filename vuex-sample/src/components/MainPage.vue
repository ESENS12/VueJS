<template>
  <div>
    <div>Hello : {{userName}}</div>
  </div>
</template>

<script>
import axios from 'axios'
// const privateKey = "~!@#$THISISPRIVATEKEY";
// const jwt = require("jsonwebtoken");

export default {
  data() {
    return {
      userName : '',
    }
  },
  created() {
    // console.log('this.$store.getAccessToken:  ' + this.$store.getters.getAccessToken);
    axios.post('http://localhost:3000/auth/checkAuth', {params : this.$store.getters.getAccessToken})
      .then(({data}) => {
        console.log("return data : " , data);
        this.userName = data.accessToken.userId;
        
        })
      .catch(error => console.log("error", error));
  }
}
</script>
<style>

</style>