<template>
    <div id="child-component" >
        child - click time {{clickTime}}
        <button v-on:click="addTime()" >Add Count+10!</button>
        <!--<button-counter></button-counter>-->
        <!--childComponent Test!-->
    </div>
</template>

<script>
    export default {
        name: "childComponent",
        props:{
            clickTime : Number,
        },
        methods:{
          addTime(){
              //여기서 emit할때 addClick이라는 이름으로 해당 이벤트 정의 하는것
              this.$emit('addClick', this.clickTime+10)
          },
          changeClickTime(){
            alert('changeClickTime!')
          },
        },
        watch:{
          clickTime: 'changeClickTime'
        }
    }
</script>

<style scoped>

</style>
