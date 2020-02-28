<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex lg12 xs12 md12>
                <v-layout row wrap justify-end class="justify-end">
                    <v-flex md12 xs12 lg12>
                        <DatePicker
                            startDate="this.start_date"
                            endDate="this.end_date"
                            @date-changed="dateChanged"
                            class="myCalendar"
                        ></DatePicker>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!-- 카드 레이아웃 -->
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="green"
                    icon="mdi-web"
                    title="WebUsage"
                    v-model="this.web_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Total Usage"
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
                    sub-text="Total Usage"
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
                    sub-text="Total Usage"
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
                    sub-text="Total Usage"
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
                                        v-if="
                                            datacollectionForMobile.datasets
                                                .data
                                        "
                                        :width="200"
                                        :height="150"
                                        :styles="myStyles"
                                        :chartdata="datacollectionForMobile"
                                        :options="optionsForLine"
                                    ></doughnut-chart>
                                    <div v-else>
                                        <v-layout
                                            class="justify-center text-center"
                                        >
                                            <v-text class="h3">
                                                No data has been used for the
                                                selected period.
                                            </v-text>
                                        </v-layout>
                                    </div>
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
                                        v-if="
                                            datacollectionForWeb.datasets.data
                                        "
                                        :width="200"
                                        :height="150"
                                        :styles="myStyles"
                                        :chartdata="datacollectionForWeb"
                                        :options="optionsForLine"
                                    ></doughnut-chart>

                                    <div v-else>
                                        <v-layout
                                            class="justify-center text-center"
                                        >
                                            <v-text class="h3">
                                                No data has been used for the
                                                selected period.
                                            </v-text>
                                        </v-layout>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </material-card>
                    </v-flex>
                </v-row>
            </v-flex>

            <!-- 차트 레이아웃 -->
            <v-flex md12 sm12 lg12>
                <material-card
                    color="info"
                    title="Total Service Usage"
                    class="wrap py-0"
                >
                    <v-row class="justify-end mx-auto">
                        <v-tabs right class="justify-end mx-auto">
                            <v-tab class="tab" @click="changeTab(0)">Day</v-tab>
                            <v-tab class="tab" @click="changeTab(1)"
                                >Month</v-tab
                            >
                            <v-tab class="tab" @click="changeTab(2)"
                                >Year</v-tab
                            >
                        </v-tabs>
                    </v-row>

                    <div class="container align-center fill-height">
                        <v-layout class="align-center justify-center">
                            <line-chart
                                v-if="this.total_service_data.datasets.data"
                                :width="450"
                                :height="300"
                                :styles="total_service_usage"
                                :chartdata="total_service_data"
                                :options="optionsForLine"
                            ></line-chart>
                            <div v-else>
                                <v-layout class="justify-center text-center">
                                    <v-text class="h3">
                                        No data has been used for the selected
                                        period.
                                    </v-text>
                                </v-layout>
                            </div>
                        </v-layout>
                    </div>
                </material-card>
            </v-flex>
            <v-flex md12 sm12 lg12>
                <material-card
                    color="red"
                    title="Top Service Usage"
                    class="pt-0"
                >
                    <div class="container align-center">
                        <v-layout class="align-center justify-center">
                            <v-flex lg8 sm12 md8 pa-0>
                                <horizontal-bar-chart
                                    v-if="TopServiceData.datasets.data"
                                    :width="450"
                                    :height="300"
                                    :styles="myStyles"
                                    :chartdata="TopServiceData"
                                    :options="optionsForLine"
                                ></horizontal-bar-chart>
                                <div v-else>
                                    <v-layout
                                        class="justify-center text-center"
                                    >
                                        <v-text class="h3">
                                            No data has been used for the
                                            selected period.
                                        </v-text>
                                    </v-layout>
                                </div>
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
    import DatePicker from "@/components/material/DatePicker";
    import config from "@/config";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    export default {
        name: "Usage",
        data() {
            return {
                showStartPicker: false,
                showEndPicker: false,
                start_date: null, //조회 시작일
                end_date: null, //조회 종료일
                dateFormatted: null,
                usageServiceType: 2, //조회 옵션(0:일, 1:월, 2:연)

                datacollectionForMobile: {
                    labels: ["Android", "iOS", "Windows", "Other"],
                    datasets: [
                        {
                            data: [],
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
                    labels: [
                        "Chrome",
                        "FireFox",
                        "Safari",
                        "IE",
                        "edge",
                        "other"
                    ],
                    datasets: [
                        {
                            data: [],
                            backgroundColor: [
                                "#a2d6c4",
                                "#36A2EB",
                                "#3e8787",
                                "#579aac",
                                "#A436FF",
                                "#d600ff"
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
                            data: []
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
                        }
                    }
                },
                other_usage: "0",
                total_usage: "0",
                web_usage: "0",
                mobile_usage: "0",

                total_service_data: {
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
                                87,

                                //라스트데이터가 조금 더 크면 graph scale이 좀 더 괜찮아보임
                                100
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
                            borderColor: "#ff9100",
                            showLine: true,
                            pointBorderColor: "#ff9100",
                            //Data to be represented on y-axis
                            data: [11, 7, 2, 5, 22, 4, 37, 55, 25, 2, 58, 10]
                        }
                    ]
                }
            };
        },
        components: {
            LineChart,
            HorizontalBarChart,
            DoughnutChart,
            DatePicker
        },

        created() {
            this.$emit("loading-event", true);
            this.getToday();
            this.getRegisteredKeyByUser();
        },

        methods: {

            getToday() {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, "0");
                var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
                var yyyy = today.getFullYear();

                this.end_date = yyyy + "-" + mm + "-" + dd;
                this.start_date = yyyy - 1 + "-" + mm + "-" + dd;
            },

            dateChanged(start_date, end_date) {
                // console.log(
                //     "dateChanged(usage) : ",
                //     start_date,
                //     ", ",
                //     end_date
                // );
                this.start_date = start_date;
                this.end_date = end_date;
                this.getUsageServiceType();
            },

            complete(index) {
                this.list[index] = !this.list[index];
            },

            changeTab(index) {
                // console.log("changeTab :", index);
                this.usageServiceType = index;
                this.getUsageServiceType();
                // switch (index) {
                //     case 0:
                //         {

                //             // DAY
                //         }
                //         break;
                //     case 1:
                //         {
                //             // MONTH
                //         }
                //         break;
                //     case 2:
                //         {
                //             // YEAR
                //         }
                //         break;
                // }
            },

            formatDate(date) {
                if (!date) return null;

                const [year, month, day] = date.split("-");
                return `${month}/${day}/${year}`;
            },

            //userKey값 받아온다. apptoken은 router에서 항상 받아서 넘어오므로..
            getRegisteredKeyByUser() {
                this.$http
                    .post(
                        `${config.requestHost}/console/getRegisteredKeybyUser`,
                        {
                            app_token: this.$store.getters.getAppToken
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        // console.log(
                        //     "recieved getRegisteredKeybyUser data : ",
                        //     data.data.length
                        // );

                        if (data.data.length == 0) {
                            //등록된 키가 없으면 ..? 로그아웃? 키 만료일 체크?
                            // this.userData = {};
                            this.$emit(
                                "snack-event",
                                "error",
                                "You don't have Key.."
                            );
                        } else {
                            // console.log(
                            //     "key Token : ",
                            //     data.data[data.data.length - 1].id
                            // );
                            this.$store
                                .dispatch("GETKEYTOKEN", {
                                    key_token:
                                        data.data[data.data.length - 1].id || ""
                                })
                                .then(() => {
                                    this.getUsageDeviceType();
                                    this.getUsageServiceType();
                                    this.getUsageMobile();
                                    this.getUsageBrowser();
                                })
                                .catch(({ message }) => (this.msg = message));
                        }
                    })
                    .catch(error => {
                        console.error("getRegistredKeybyUser err", error);
                    });
            },

            /** /console/getUsageDevice
             * @pathParam end_date : string 
             * @pathParam start_date : string 
             * @pathParam app_token : string 
             * @pathParam key : string 
             * 
             * @returns
                {
                    "result": "OK",
                    "data": {
                        "isDesktop": 0,
                        "isMobile": 0,
                        "Other": 0,
                        "total": 0
                    }
                }
             */

            getUsageDeviceType() {
                this.$http
                    .get(
                        `${config.requestHost}/console/getUsageDeviceType?end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        this.other_usage = data.data.Other;
                        this.web_usage = data.data.isDesktop;
                        this.mobile_usage = data.data.isMobile;
                        this.total_usage = data.data.total;

                        // console.log("getUsageDevice data :", data.data);
                    })
                    .catch(error => {
                        console.error("getUsageDevice Failed : " + error);
                    })
                    .then(() => {
                        this.$emit("loading-event", false);
                    });
            },

            /** /console/getUsageServiceType
             * @pathParam end_date : string 
             * @pathParam start_date : string 
             * @pathParam app_token : string 
             * @pathParam date_type : number    //0:일별, 1:월별, 2:년 
             * @pathParam key : string 
             * 
             * @returns
                {
                    "result": "OK",
                    "data": [
                        {
                            "date": "2020-02-25",
                            "sum": "11392",
                            "service_id": "1"
                        },
                        {
                            "date": "2020-02-26",
                            "sum": "350",
                            "service_id": "1"
                        }
                    ]
                }
             */

            getUsageServiceType() {
                this.$http
                    .get(
                        `${config.requestHost}/console/getUsageServiceType?date_type=${this.usageServiceType}&end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        console.log("getUsageServiceType data :", data);
                        // labels 에 날짜 , year,month,day...
                        // date....
                        this.total_service_data = {};
                        // this.total_service_data;
                        //total_service_data: {
                        //     labels: [
                        //         "January",
                        //         "February",
                        //         "March",
                        //         "April",
                        //         "May",
                        //         "June",
                        //         "July",
                        //         "August",
                        //         "September",
                        //         "October",
                        //         "November",
                        //         "December"
                        //     ],
                        //         {
                        //             label: "MAP",
                        //             pointBackgroundColor: "white",
                        //             borderWidth: 3,
                        //             fill: false,
                        //             borderColor: "#4E36FF",
                        //             showLine: true,
                        //             pointBorderColor: "#4E36FF",
                        //             //Data to be represented on y-axis
                        //             data: [2, 9, 2, 23, 10, 15, 20, 12, 42, 31, 32, 41]
                        //         },
                        //}
                    });
            },

            /** /console/getUsageMobile
             * @pathParam end_date : string 
             * @pathParam start_date : string 
             * @pathParam app_token : string 
             * @pathParam key : string 
             * 
             * @returns
                {
                    "result": "OK",
                    "data": {
                        "android": 0,
                        "ios": 0,
                        "window": 0,
                        "other": 0,
                        "total": 0
                    }
                }
             */

            getUsageMobile() {
                this.$http
                    .get(
                        `${config.requestHost}/console/getUsageMobile?end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,

                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        this.datacollectionForMobile.datasets.data[0] =
                            data.data.android;
                        this.datacollectionForMobile.datasets.data[1] =
                            data.data.ios;
                        this.datacollectionForMobile.datasets.data[2] =
                            data.data.window;
                        this.datacollectionForMobile.datasets.data[3] =
                            data.data.other;

                        // console.log("getUsageMobile data :", data.data);
                    });
            },

            /** /console/getUsageBrowser
             * @pathParam end_date : string 
             * @pathParam start_date : string 
             * @pathParam app_token : string 
             * @pathParam key : string 
             * 
             * @returns
                {
                    "result": "OK",
                    "data": {
                        "chrome": "6506",
                        "firefox": "5077",
                        "safari": "763",
                        "explor": 0,
                        "edge": 0,
                        "other": 0,
                        "total": 12346
                    }
                }
             */

            getUsageBrowser() {
                this.$http
                    .get(
                        `${config.requestHost}/console/getUsageBrowser?end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        // console.log("getUsageBrowser data :", data.data);

                        this.datacollectionForWeb.datasets.data[0] =
                            data.data.android;
                        this.datacollectionForWeb.datasets.data[1] =
                            data.data.ios;
                        this.datacollectionForWeb.datasets.data[2] =
                            data.data.window;
                        this.datacollectionForWeb.datasets.data[3] =
                            data.data.other;
                    });
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
            },
            computedDateFormatted() {
                return this.formatDate(this.date);
            }
        },
        watch: {
            date() {
                this.dateFormatted = this.formatDate(this.date);
            }
        }
    };
</script>
<style scoped>
    .chartcard {
        height: 10%;
    }

    .myCalendar td {
        padding: 4px 0 !important;
        height: unset !important;
    }
    .myCalendar th {
        padding: 4px 0 !important;
        height: unset !important;
    }

    .myCalendar td button {
        padding: 4px 0 !important;
        height: unset !important;
    }

    .myCalendar td button div {
        height: unset !important;
        color: black;
    }

    .myCalendar tr {
        height: unset !important;
    }

    .myCalendar tr:hover {
        background: #fff !important;
    }
</style>
