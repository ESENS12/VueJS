<template>
  <div id="app">
    <!-- <my-play-ground msg="Welcome to Your Vue.js App"/> -->
    <sticky-top-header/>
  </div>
</template>

<script>

// import MyPlayGround from './components/MyPlayGround.vue'
import StickyTopHeader from './components/StickyTopHeader.vue'

export default {
  
  name: 'app',
  components: {
    // MyPlayGround,
    StickyTopHeader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
