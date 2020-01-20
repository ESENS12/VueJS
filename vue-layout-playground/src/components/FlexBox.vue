<template>
    <div class="parent">
        <div class="box">
            <div class="one">One</div>
            <div class="two">Two</div>
            <div class="three">Three</div>
        </div>
        <div class="box">
            <div class="one">mid-One</div>
            <div class="two">mid-Two</div>
            <div class="three">mid-Three</div>
        </div>
    </div>
</template>

<script>
export default {
name: 'FlexBox',
  props: {
    msg: String
  },
  methods:{

  }
}
</script>

<style>

.parent{
    align-items: stretch;
    background-color: rgb(140, 240, 140);
    display: flex;
    width:  100%;
    height: 100%;
    flex:1;
    flex-direction: column;
    justify-content: space-around;
};

.box{
    align-items: stretch;
    background-color: cadetblue;
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: space-around;

};


.box-top {
    align-items: stretch;
    background-color: cadetblue;
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: space-around;

};

.box-middle{
     align-items: stretch;
    background-color: cadetblue;
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: space-around;

};

.one {
flex: 1 1 auto;
};

.two {
flex: 1 1 auto;
};

.three {
flex: 1 1 auto;
};
</style>