<script>
    import { Pie } from "vue-chartjs";
    // const { reactiveProp } = mixins
    import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";
    // import Chart from 'chart.js';

    // Chart.defaults.global.plugins.datalabels.display = true;
    export default {
        extends: Pie,
        //   mixins: [reactiveProp],
        props: {
            chartdata: {
                type: Object,
                default: null
            }
            // options: {
            //     type: Object,
            //     default: null
            // }
        },

        data: () => ({
            datacollections: {
                //Data to be represented on x-axis
                labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
                datasets: [
                    {
                        label: "January",
                        backgroundColor: [
                            "#41B883",
                            "#E46651",
                            "#00D8FF",
                            "#DD1B16"
                        ],
                        data: [40, 20, 80, 10]
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                pieceLabel: {
                    mode: "percentage",
                    precision: 1
                },
                showAllTooltips: true,
                plugins: {
                    labels: {
                        render: "percentage"
                    },
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            let dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage =
                                ((value * 100) / sum).toFixed(2) + "%";
                            return percentage;
                        },
                        anchor:'center',
                        color: "white",
                        display:'false',
                        textAlign: "center",
                        font: {
                            weight: "bold",
                            size: 16
                        }
                    }
                }
            }
        }),

        components: {
            ChartJsPluginDataLabels
        },

        mounted() {
            this.addPlugin(ChartJsPluginDataLabels);
            this.renderChart(this.datacollections, this.options);
        },

        watch: {
            datacollections(to, from) {
                console.log(to, from);
                this.renderChart(this.datacollections, this.options);
            }
        }
    };
</script>

<style></style>
