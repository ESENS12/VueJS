<template>
  <div class="hello">
    <span v-bind:title="data">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
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

  method:{
    ChangeData(){
      this.data = this.count;
    }
  }


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
