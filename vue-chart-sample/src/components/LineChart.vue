
<script>
import { Line } from 'vue-chartjs'
// const { reactiveProp } = mixins

export default {
  extends: Line,
//   mixins: [reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    },
    data(){
    return {
      option:{
         fill: false,
      }
    }
  },
  },
  mounted () {
      console.log(this.chartdata);
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartdata, this.option)
  },
  watch: {
  'chartdata' (to, from) {
      console.log(to,from);
    this.renderChart(this.chartdata, this.options)
  }
},
}
</script>

<style>
</style>