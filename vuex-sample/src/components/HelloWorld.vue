<template>
  <v-container>
    <h2>IndexPage</h2>
    <div>{{greeting}}</div>
  </v-container>
</template>

<script>

  import axios from 'axios'

  export default {
    name: 'HelloWorld',

    data: () => ({
      greeting : "",
    }),
    created() {
      axios.get('http://localhost:3000/home')
      .then(result => this.greeting = result.data.greeting);
    }
  }
</script>
