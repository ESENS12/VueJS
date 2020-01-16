<template>
<div>
    <div class="top-container">
    <h1>Scroll Down</h1>
    <p>Scroll down to see the sticky effect.</p>
    </div>

    <div class="header" id="myHeader">
    <h2>My Header</h2>
    </div>

    <div class="content">
    <h3>On Scroll Sticky Header</h3>
    <p>The header will stick to the top when you reach its scroll position.</p>
    <p v-for="(item) in items" :key="item"> ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</p>
    <!-- {{createMoreView()}} -->
    </div>
</div> 
</template>

<script>

var header;
var sticky;

// var data = ["data!","data!","data!","data!"];
var data = [{
    items:['item1','item2'],
}];

export default {
    
name: 'StickyTopheader',

beforeMount(){
    console.log('beforeMount');
},

mounted(){
    window.addEventListener('scroll', this.handleScroll);
    // console.log('mounted!');
    header = document.getElementById("myHeader");
    sticky = header.offsetTop;
},

beforeCreate(){
    console.log('beforeCreate');
},

data: function () {      
    return data;
},


methods:{
    handleScroll : function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    },
    createMoreView : function () {
        // content
        var viewTag = "<p v-html>Some text to enable scrolling.. Vue js is Really Fucnking Ugly</p>";
        for(let i=0;i<10; i++){
            viewTag += viewTag;
        }
        return viewTag;

    }
}
}
</script>

<style>
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
</style>