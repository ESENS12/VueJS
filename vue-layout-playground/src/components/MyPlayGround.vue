<template>
  <div class="parent"> 
    <div class="topbar">this is topbar</div>
    <div class="contents">
      <div class="content">{{msg}}</div>
    </div>
  
    <footer class="footer">this is footer</footer>
  </div>
</template>

<script>

export default {
  name: 'MyPlayGround',
  props: {
    msg: String
  },
  methods:{

  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.top-container {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

.header {
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
}

.content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky + .content {
  padding-top: 102px;
}
.topbar{
  background-color:teal;
  color: white;
  position: fixed;
  width:100%;
}
.content{
  height : 1000px;
}
.contents{
  position: relative;
}
.footer{
  /* position: absolute;
  bottom:0;
  left: 0;
  right:0;
  justify-self: stretch; */
  height:24px;
  width: 100%;
  background-attachment: scroll;
  background-position: 0% 0%;
  position: fixed;
  bottom: 0pt;
  left: 0pt;
  background-color: yellowgreen;
  color: white;
}
.parent{
    display: flex;
    flex:auto;
    flex-direction: column;
    min-height: 100%;
}
</style>
