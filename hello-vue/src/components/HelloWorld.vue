<template>
  <div class="hello">
    <span v-bind:title="data">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
    <button v-bind:style="a" v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  data:function () {
    return {
      data : "Components Test",
      count: 0,
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
