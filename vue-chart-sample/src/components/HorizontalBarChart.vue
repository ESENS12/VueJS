<script>
    import { HorizontalBar } from "vue-chartjs";
    // const { reactiveProp } = mixins
    import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";

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
                default: null
            }
        },

        components: {
            ChartJsPluginDataLabels
        },

        mounted() {
            console.log("mounted : ",ChartJsPluginDataLabels);
            this.addPlugin(ChartJsPluginDataLabels);
            this.renderChart(this.chartdata, this.options);
        },
        watch: {
            chartdata(to, from) {
                console.log(to, from);
                this.renderChart(this.chartdata, this.options);
            }
        }
    };
</script>

<style></style>
