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
      <div v-for="(item,index) in items" :key="index">  
        <p>{{item.message1}}</p>
        <p>{{item.message2}}</p>
      </div>
    </div>
</div> 
</template>

<script>

var header;
var sticky;

var data = {
    items:[
      { message1 : 'Some text to enable scrolling..',
        message2 : 'Vue js is Really Fucnking Ugly' }
      ],
};

export default {
    
name: 'StickyTopheader',

beforeMount(){
    console.log('beforeMount');
},

mounted(){
    window.addEventListener('scroll', this.handleScroll);
    header = document.getElementById("myHeader");
    sticky = header.offsetTop;

    this.createMoreView();
},

beforeCreate(){
    // console.log('beforeCreate');
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
        for(let i=0;i<100; i++){
          this.items.push({ message1 : 'Some text to enable scrolling..', message2 : 'Vue js is Really Fucnking Ugly' });
        }
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