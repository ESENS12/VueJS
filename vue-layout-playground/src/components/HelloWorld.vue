<template>
  <div class="hello">
    <div class="topbar">this is topbar</div>
    <div class="contents">{{msg}}</div>
    <div class="footer">this is footer</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.topbar{
  margin: 40px 40px 40px;
  background-color:teal;
  color: white;
}
.footer{
  margin: 40px 40px 40px;
  background-color: yellowgreen;
  color: white;
}
.hello{
  margin: 40px 40px 40px;
  background-color: #42b983;
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
