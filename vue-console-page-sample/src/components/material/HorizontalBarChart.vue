
<script>
import { HorizontalBar } from 'vue-chartjs'
// const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,
//   mixins: [reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null,
       responsive: true,
         aspectRatio:2,
    },

     data(){
    return {
      option:{
         responsive: true,
         aspectRatio:2,
      }
    }
     }
  },
  
  mounted () {
      console.log(this.chartdata);
    this.renderChart(this.chartdata, this.option)
  },
  watch: {
  'chartdata' (to, from) {
      console.log(to,from);
    this.renderChart(this.chartdata, this.option)
  }
},
}
</script>

<style>
</style>