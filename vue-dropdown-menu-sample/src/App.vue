<template>
  <div id="app">
    <simple-menu/>
    <slide-menu/>
  </div>
</template>

<script>
import SimpleMenu from './components/SimpleMenu.vue'
import SlideMenu from './components/SlideMenu.vue'

export default {
  name: 'app',
  components: {
    SimpleMenu,
    SlideMenu,
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
  margin-top: 60px;
}
</style>
