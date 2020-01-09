<template>
    <div id="child-component" >
        child - click time {{clickTime}}
        <button v-on:click="addTime()" >Add Count+10!</button>

        <form v-on:submit.prevent="loginUser">
            <div>
                <label for="email">Email</label>
                <input id="email" v-model="email" type="text" ref="email">
                <!--<small>asd</small>-->
            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" type="password" ref="password">
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>

        <!--<button-counter></button-counter>-->
        <!--childComponent Test!-->
    </div>
</template>

<script>
    export default {
        name: "childComponent",

        props:{
            clickTime : Number,
            email : Text,
        },
        methods:{
          addTime(){
              //여기서 emit할때 addClick이라는 이름으로 해당 이벤트 정의 하는것
              this.$emit('addClick', this.clickTime+10)
          },
          changeClickTime(){
            alert('changeClickTime!')
          },
            loginUser(){
                alert("email : " + this.$refs.email.value + "\n" + "password : "  + this.$refs.password.value);
            },
        },
        // computed: {
        //     emailValidation: function() {
        //         return this.email.length > 10 ? `` : `Length must be over 10`;
        //     }
        // },
        watch:{
            //함수명으로 watch
          // clickTime: 'changeClickTime'
            //handler 사용
          clickTime: function handler(value,oldValue) {
                  console.log("value : " ,value);
                  console.log("oldValue : " ,oldValue);
          }
        }
    }
</script>

<style scoped>

</style>
