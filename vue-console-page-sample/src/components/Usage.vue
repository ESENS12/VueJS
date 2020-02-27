<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <!-- 카드 레이아웃 -->
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="green"
                    icon="mdi-web"
                    title="WebUsage"
                    v-model="this.web_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Last 24 Hours"
                />
            </v-flex>
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="orange"
                    icon="mdi-cellphone"
                    title="Mobile usage"
                    v-model="this.mobile_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Last 24 Hours"
                />
            </v-flex>
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="red"
                    icon="mdi-dots-horizontal"
                    title="Other usage"
                    v-model="this.other_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Last 24 Hours"
                />
            </v-flex>
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="info"
                    icon="mdi-content-copy"
                    title="Total usage"
                    v-model="this.total_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Last 24 Hours"
                />
            </v-flex>

            <v-flex md12 sm12 lg12>
                <!-- mobile usage -->
                <v-row>
                    <v-flex md6 sm12 lg6>
                        <material-card color="green" title="Mobile Usage">
                            <v-layout class="align-center justify-center">
                                <v-flex>
                                    <doughnut-chart
                                        :width="200"
                                        :height="150"
                                        :styles="myStyles"
                                        :chartdata="datacollectionForMobile"
                                        :options="optionsForLine"
                                    ></doughnut-chart>
                                </v-flex>
                            </v-layout>
                        </material-card>
                    </v-flex>

                    <!-- web usage -->
                    <v-flex md6 sm12 lg6 class="justify-center">
                        <material-card color="blue" title="Web Usage">
                            <v-layout class="align-center ">
                                <v-flex>
                                    <doughnut-chart
                                        :width="200"
                                        :height="150"
                                        :styles="myStyles"
                                        :chartdata="datacollectionForWeb"
                                        :options="optionsForLine"
                                    ></doughnut-chart>
                                </v-flex>
                            </v-layout>
                        </material-card>
                    </v-flex>
                </v-row>
            </v-flex>

            <!-- 차트 레이아웃 -->
            <v-flex md9 sm12 lg9>
                <material-card color="info" title="Total Service Usage" class="wrap py-0">
                    <div class="container align-center fill-height">
                        <v-layout class="align-center justify-center">
                                <line-chart
                                    
                                    :styles="total_service_usage"
                                    :chartdata="datacollectionForLine"
                                    :options="optionsForLine"
                                ></line-chart>
                        </v-layout>
                    </div>
                </material-card>
            </v-flex>
            <v-flex md9 sm12 lg9>
                <material-card color="red" title="Top Service Usage" class="pt-0">
                    <div class="container align-center">
                        <v-layout class="align-center justify-center">
                            <v-flex lg8 sm12 md8 pa-0>
                                <horizontal-bar-chart
                                    :width="450"
                                    :height="300"
                                    :styles="myStyles"
                                    :chartdata="TopServiceData"
                                    :options="optionsForLine"
                                ></horizontal-bar-chart>
                            </v-flex>
                        </v-layout>
                    </div>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import LineChart from "@/components/material/LineChart";
    import DoughnutChart from "@/components/material/DoughnutChart";
    import HorizontalBarChart from "@/components/material/HorizontalBarChart";

    export default {
        name: "Usage",
        data() {
            return {
                datacollectionForMobile: {
                    labels: ["Android", "iOS", "Windows", "Other"],
                    datasets: [
                        {
                            data: [50, 23, 15, 32],
                            backgroundColor: [
                                "#a2d6c4",
                                "#36A2EB",
                                "#3e8787",
                                "#579aac"
                            ]
                        }
                    ]
                },

                datacollectionForWeb: {
                    labels: ["Chrome", "FireFox", "Safari", "IE", "Other"],
                    datasets: [
                        {
                            data: [50, 23, 15, 32, 22],
                            backgroundColor: [
                                "#a2d6c4",
                                "#36A2EB",
                                "#3e8787",
                                "#579aac",
                                "#A436FF"
                            ]
                        }
                    ]
                },

                TopServiceData: {
                    //Data to be represented on x-axis
                    labels: [
                        "MAP",
                        "Search",
                        "Routing",
                        "Analyze",
                        "Advanced Map"
                    ],
                    datasets: [
                        {
                            label: "Total",
                            backgroundColor: "#f87979",
                            pointBackgroundColor: "white",
                            fill: false,
                            showLine: true,
                            //Data to be represented on y-axis
                            data: [3333, 1521, 33, 952, 2300]
                        }
                    ]
                },

                optionsForLine: {
                    layout: {
                        padding: {
                            left: 50,
                            right: 0,
                            top: 0,
                            bottom: 0
                        },
                    }
                },
                other_usage: "1,203",
                total_usage: "2,423",
                web_usage: "839",
                mobile_usage: "612",

                datacollectionForLine: {
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
                            label: "Total",
                            pointBackgroundColor: "white",
                            borderWidth: 3,
                            fill: false,
                            borderColor: "#3e8787",
                            showLine: true,
                            pointBorderColor: "#249EBF",
                            //Data to be represented on y-axis
                            data: [
                                40,
                                20,
                                30,
                                44,
                                90,
                                10,
                                21,
                                40,
                                48,
                                70,
                                86,
                                87
                            ]
                        },

                        {
                            label: "MAP",
                            pointBackgroundColor: "white",
                            borderWidth: 3,
                            fill: false,
                            borderColor: "#4E36FF",
                            showLine: true,
                            pointBorderColor: "#4E36FF",
                            //Data to be represented on y-axis
                            data: [2, 9, 2, 23, 10, 15, 20, 12, 42, 31, 32, 41]
                        },
                        {
                            label: "Search",
                            pointBackgroundColor: "white",
                            borderWidth: 3,
                            fill: false,
                            borderColor: "#36FFDA",
                            showLine: true,
                            pointBorderColor: "#36FFDA",
                            //Data to be represented on y-axis
                            data: [
                                11,
                                10,
                                2,
                                46,
                                10,
                                15,
                                44,
                                12,
                                25,
                                32,
                                52,
                                77
                            ]
                        },

                        {
                            label: "Geofencing",
                            pointBackgroundColor: "white",
                            borderWidth: 3,
                            fill: false,
                            borderColor: "#A922EB",
                            showLine: true,
                            pointBorderColor: "#36A2EB",
                            //Data to be represented on y-axis
                            data: [14, 22, 2, 32, 10, 12, 20, 12, 52, 3, 32, 77]
                        },
                        {
                            label: "Routing",
                            pointBackgroundColor: "white",
                            borderWidth: 3,
                            fill: false,
                            borderColor: "#76FF36",
                            showLine: true,
                            pointBorderColor: "#76FF36",
                            //Data to be represented on y-axis
                            data: [21, 32, 2, 23, 44, 4, 11, 12, 62, 3, 12, 2]
                        },
                        {
                            label: "Analyze",
                            pointBackgroundColor: "white",
                            borderWidth: 3,
                            fill: false,
                            borderColor: "#FF5733",
                            showLine: true,
                            pointBorderColor: "#FF5733",
                            //Data to be represented on y-axis
                            data: [1, 2, 3, 10, 22, 33, 20, 12, 7, 3, 2, 1]
                        },
                        {
                            label: "Advanced Map",
                            pointBackgroundColor: "white",
                            borderWidth: 3,
                            fill: false,
                            borderColor: "#A436FF",
                            showLine: true,
                            pointBorderColor: "#A436FF",
                            //Data to be represented on y-axis
                            data: [11, 7, 2, 5, 22, 4, 37, 55, 25, 2, 58, 10]
                        }
                    ]
                },

                dailySalesChart: {
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        series: [[12, 17, 7, 17, 23, 18, 38]]
                    },
                    options: {
                        lineSmooth: this.$chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                dataCompletedTasksChart: {
                    data: {
                        labels: [
                            "12am",
                            "3pm",
                            "6pm",
                            "9pm",
                            "12pm",
                            "3am",
                            "6am",
                            "9am"
                        ],
                        series: [[230, 750, 450, 300, 280, 240, 200, 190]]
                    },
                    options: {
                        lineSmooth: this.$chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                emailsSubscriptionChart: {
                    data: {
                        labels: [
                            "Ja",
                            "Fe",
                            "Ma",
                            "Ap",
                            "Mai",
                            "Ju",
                            "Jul",
                            "Au",
                            "Se",
                            "Oc",
                            "No",
                            "De"
                        ],
                        series: [
                            [
                                542,
                                443,
                                320,
                                780,
                                553,
                                453,
                                326,
                                434,
                                568,
                                610,
                                756,
                                895
                            ]
                        ]
                    },
                    options: {
                        axisX: {
                            showGrid: false
                        },
                        low: 0,
                        high: 1000,
                        chartPadding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 0
                        }
                    },
                    responsiveOptions: [
                        [
                            "screen and (max-width: 640px)",
                            {
                                seriesBarDistance: 5,
                                axisX: {
                                    labelInterpolationFnc: function(value) {
                                        return value[0];
                                    }
                                }
                            }
                        ]
                    ]
                },
                headers: [
                    {
                        sortable: false,
                        text: "ID",
                        value: "id"
                    },
                    {
                        sortable: false,
                        text: "Name",
                        value: "name"
                    },
                    {
                        sortable: false,
                        text: "Salary",
                        value: "salary",
                        align: "right"
                    },
                    {
                        sortable: false,
                        text: "Country",
                        value: "country",
                        align: "right"
                    },
                    {
                        sortable: false,
                        text: "City",
                        value: "city",
                        align: "right"
                    }
                ],
                items: [
                    {
                        name: "Dakota Rice",
                        country: "Niger",
                        city: "Oud-Tunrhout",
                        salary: "$35,738"
                    },
                    {
                        name: "Minerva Hooper",
                        country: "Curaçao",
                        city: "Sinaai-Waas",
                        salary: "$23,738"
                    },
                    {
                        name: "Sage Rodriguez",
                        country: "Netherlands",
                        city: "Overland Park",
                        salary: "$56,142"
                    },
                    {
                        name: "Philip Chanley",
                        country: "Korea, South",
                        city: "Gloucester",
                        salary: "$38,735"
                    },
                    {
                        name: "Doris Greene",
                        country: "Malawi",
                        city: "Feldkirchen in Kārnten",
                        salary: "$63,542"
                    }
                ],
                tabs: 0,
                list: {
                    0: false,
                    1: false,
                    2: false
                }
            };
        },
        components: {
            LineChart,
            HorizontalBarChart,
            DoughnutChart
        },
        methods: {
            complete(index) {
                this.list[index] = !this.list[index];
            }
        },
        computed: {
            myStyles() {
                return {
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    marginLeft: "auto",
                    marginRight: "auto"
                };
            },
            total_service_usage() {
                return {
                    width: "65%",
                    height: "50%",
                    position: "relative",
                    marginLeft: "auto",
                    marginRight: "auto"
                };
            }
        }
    };
</script>
<style scoped>
    .chartcard {
        height: 10%;
    }
</style>
