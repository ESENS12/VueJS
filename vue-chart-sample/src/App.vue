<template>
    <v-app>
        <v-layout>
            <v-content>
                <v-row>
                    <v-col>
                        <div class="container">
                            <h3>Line Chart</h3>
                            <line-chart
                                :chartdata="datacollectionForLine"
                                :options="options"
                            ></line-chart>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="container">
                            <h3>Bar Chart</h3>
                            <bar-chart
                                :chartdata="datacollection"
                                :options="options"
                            ></bar-chart>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="container">
                            <h3>PolarArea Chart</h3>
                            <PolarAreaChart
                                :chartdata="datacollectionForPolar"
                                :options="options"
                            ></PolarAreaChart>
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <div class="container">
                            <h3>Horizontal Bar Chart</h3>
                            <horizontal-bar-chart
                                :chartdata="datacollection"
                                :options="options"
                            ></horizontal-bar-chart>
                        </div>
                    </v-col>

                    <v-col>
                        <div class="container">
                            <h3>Doughnut Chart</h3>
                            <DoughnutChart
                                :chartdata="datacollectionForDouhnut"
                                :options="options"
                            ></DoughnutChart>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="container">
                            <h3>Bubble Chart</h3>
                            <BubbleChart
                                :chartdata="datacollectionForBubble"
                                :options="options"
                            ></BubbleChart>
                        </div>
                    </v-col>
                </v-row>
            </v-content>
        </v-layout>
    </v-app>
</template>

<script>
    // import HelloWorld from './components/HelloWorld';
    import LineChart from "./components/LineChart";
    import BarChart from "./components/BarChart";
    import HorizontalBarChart from "./components/HorizontalBarChart";
    import DoughnutChart from "./components/DoughnutChart";
    import BubbleChart from "./components/BubbleChart";
    import PolarAreaChart from "./components/PolarAreaChart";

    export default {
        name: "App",

        components: {
            LineChart,
            BarChart,
            HorizontalBarChart,
            DoughnutChart,
            BubbleChart,
            PolarAreaChart
        },

        data: () => ({
            textInside: "Doughnut Chart",
            datacollection: {
                //Data to be represented on x-axis
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill:false,
                        borderColor:"#3e8787",
                        showLine:true,
                        pointBorderColor: "#249EBF",
                        //Data to be represented on y-axis
                        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                    },

                    {
                        borderColor:"rgba(255, 0, 0, 0.5)",
                        label: "Data Two",
                        backgroundColor: "#36A2EB",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill:false,
                        showLine:true,
                        pointBorderColor: "rgba(255, 0, 0,0.55)",
                        //Data to be represented on y-axis
                        data: [25, 10, 44, 62, 10, 15, 20, 40, 25, 70, 44, 10]
                    }
                ]
            },

            datacollectionForLine: {
                //Data to be represented on x-axis
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        label: "Data One",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill:false,
                        borderColor:"#3e8787",
                        showLine:true,
                        pointBorderColor: "#249EBF",
                        //Data to be represented on y-axis
                        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                    },

                    {
                      label: "Data Two",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill:false,
                        borderColor:"#36A2EB",
                        showLine:true,
                        pointBorderColor: "#36A2EB",
                        //Data to be represented on y-axis
                        data: [25, 10, 2, 23, 10, 15, 20, 12, 25, 3, 32, 10]
                    }
                ]
            },

            datacollectionForBubble: {
                //Data to be represented on x-axis
                labels: ["January", "February"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        pointBackgroundColor: "white",
                        borderWidth: 1,
                        pointBorderColor: "#249EBF",
                        //Data to be represented on y-axis
                        data: [{ x: 40, y: 1, r: 10 }]
                    },

                    {
                        label: "Data Two",
                        backgroundColor: "#36A2EB",
                        pointBackgroundColor: "white",
                        borderWidth: 1,
                        pointBorderColor: "#249EBF",
                        //Data to be represented on y-axis
                        data: [{ x: 25, y: 10, r: 15 }]
                    },
                    {
                        label: "Data Three",
                        backgroundColor: "#579aac",
                        pointBackgroundColor: "white",
                        borderWidth: 1,
                        pointBorderColor: "#249EBF",
                        //Data to be represented on y-axis
                        data: [{ x: 36, y: 3.5, r: 9 }]
                    },
                    {
                        label: "Data Four",
                        backgroundColor: "#3e8787",
                        pointBackgroundColor: "white",
                        borderWidth: 1,
                        pointBorderColor: "#249EBF",
                        //Data to be represented on y-axis
                        data: [{ x: 32, y: 5, r: 7 }]
                    }
                ]
            },

            datacollectionForDouhnut: {
                //Data to be represented on x-axis
                labels: ["January", "February", "March"],
                datasets: [
                    {
                        data: [40, 30, 20],
                        backgroundColor: [
                            "#a2d6c4",
                            "#36A2EB",
                            "#3e8787",
                            "#579aac"
                        ]
                    }
                ]
            },

            datacollectionForPolar: {
                //Data to be represented on x-axis
                labels: ["Android", "iOS", "Window", "Linux"],
                datasets: [
                    {
                        data: [45, 80, 27, 10, 4, 11, 5, 22],
                        backgroundColor: [
                            "rgba(255, 0, 0, 0.5)",
                            "rgba(100, 255, 0, 0.5)",
                            "rgba(0, 100, 255, 0.5)",
                            "rgba(200, 50, 255, 0.5)",
                            "rgba(255, 0, 0, 0.5)",
                            "rgba(100, 255, 0, 0.5)",
                            "rgba(0, 100, 255, 0.5)",
                            "rgba(200, 50, 255, 0.5)"
                        ]
                    }
                ]
            }

            // options: {
            //     elements: {
            //         center: {
            //             text: this.textInside
            //         }
            //     },
            //     responsive: true,
            //     legend: false,
            //     legendCallback: function(chart) {
            //         var legendHtml = [];
            //         legendHtml.push("<ul>");
            //         var item = chart.data.datasets[0];
            //         for (var i = 0; i < item.data.length; i++) {
            //             legendHtml.push("<li>");
            //             legendHtml.push(
            //                 '<span class="chart-legend" style="background-color:' +
            //                     item.backgroundColor[i] +
            //                     '"></span>'
            //             );
            //             legendHtml.push(
            //                 '<span class="chart-legend-label-text">' +
            //                     item.data[i] +
            //                     " person - " +
            //                     chart.data.labels[i] +
            //                     " times</span>"
            //             );
            //             legendHtml.push("</li>");
            //         }

            //         legendHtml.push("</ul>");
            //         return legendHtml.join("");
            //     },
            //     tooltips: {
            //         enabled: true,
            //         mode: "label",
            //         callbacks: {
            //             label: function(tooltipItem, data) {
            //                 var indice = tooltipItem.index;
            //                 return (
            //                     data.datasets[0].data[indice] +
            //                     " person visited " +
            //                     data.labels[indice] +
            //                     " times"
            //                 );
            //             }
            //         }
            //     }
            // }
        }),

        mounted() {
            // console.log(this.dataset);
            // this.chartData is created in the mixin.
            // If you want to pass options please create a local options object
        },
        created() {
            // console.log(this.dataset);
        }
    };
</script>
