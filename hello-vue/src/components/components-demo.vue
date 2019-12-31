<template>
    <div id="components-demo">
        <!--<button-counter></button-counter>-->
        <button v-bind:style="a" v-on:click="count++">You clicked me {{ count }} times.</button>
        <!--{{//자식컴포넌트와의 prop 데이터 동기화를 위한 이벤트 공유, addClick이 자식컴포넌트 이벤트로 등록해서 발생시켜주면 됨}-->
        <childComponent v-bind:clickTime= "count" v-on:addClick="count = $event" ></childComponent>

    </div>
</template>


<script>

    import childComponent from './child-component.vue'

    export default {
        name: "ComponentsDemo",

        data: function () {
            return {
                count: 0
            }
        },

        components: {
            childComponent,
        },

        methods:{
          ShowAlert(){
              alert('Show Alert!')
              // this.count = this.count+1;
          }
        }
    }

</script>

<style scoped>

</style>
