<script>
    import { Doughnut } from "vue-chartjs";
    // const { reactiveProp } = mixins

    export default {
        extends: Doughnut,
        //   mixins: [reactiveProp],
        props: {
            chartdata: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            }
        },
        mounted() {
            this.renderChart(this.chartdata, this.options);
        },
        
        watch: {
            chartdata() {
                // console.log(to,from);
                // console.log("this.chartData(watch) : " , this.chartdata);
                this.renderChart(this.chartdata, this.options);
            }
        }
    };
</script>

<style></style>
