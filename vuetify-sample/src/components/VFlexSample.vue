<template>
  <v-container>
    <v-layout
      text-center
      wrap
      
    >
      <!-- xs이하 사이즈는 12만큼(max) , marginbottom-12 -->
      <v-flex xs12 mb-12 >    

        <v-flex>
          <div class="red"> xs12 </div>
        </v-flex>

        <v-flex xs6>
          <div  class="blue"> xs12 > xs6 </div>
        </v-flex>

        <v-flex xs3>
          <div class="green"> xs12 > xs3 </div>
        </v-flex>

      </v-flex>

      <v-flex xs3 >
        <v-flex>
          <div class="red"> xs3 >  </div>
        </v-flex>

        <v-flex xs9>
          <div  class="blue"> xs3 > xs9 </div>
        </v-flex>

        <v-flex xs12>
          <div class="green"> xs3 > xs12 </div>
        </v-flex>
      </v-flex>

      <v-spacer></v-spacer>

      <v-flex xs3>
        <div class="yellow"> Right </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VFlexSample',
  data: () => ({
    
  }),
};
</script>

<style scoped>
#green{
 clear: both; 
}
</style>



