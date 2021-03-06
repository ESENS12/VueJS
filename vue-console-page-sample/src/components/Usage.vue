<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex lg12 xs12 md12>
                <v-layout row wrap justify-end class="justify-end">
                    <v-flex md12 xs12 lg12>
                        <v-row>
                            <v-col>
                                <v-select
                                    v-model="selectedKey"
                                    :items="keys"
                                    label="Select Key"
                                    v-on:change="changeKey"
                                    solo
                                ></v-select>
                            </v-col>
                            <v-col>
                                <DatePicker
                                    startDate="this.start_date"
                                    endDate="this.end_date"
                                    @date-changed="dateChanged"
                                    class="myCalendar"
                                ></DatePicker>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
            </v-flex>

            <!-- WebUsage usage -->
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="green"
                    icon="mdi-web"
                    title="WebUsage"
                    v-model="web_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Total Usage"
                />
            </v-flex>

            <!-- Mobile usage -->
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="orange"
                    icon="mdi-cellphone"
                    title="Mobile usage"
                    v-model="mobile_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Total Usage"
                />
            </v-flex>

            <!-- Other usage -->
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="red"
                    icon="mdi-dots-horizontal"
                    title="Other usage"
                    v-model="other_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Total Usage"
                />
            </v-flex>

            <!-- Total usage -->
            <v-flex sm6 xs12 md6 lg3>
                <material-stats-card
                    color="info"
                    icon="mdi-content-copy"
                    title="Total usage"
                    v-model="total_usage"
                    small-value="calls"
                    sub-icon="mdi-calendar"
                    sub-text="Total Usage"
                />
            </v-flex>

            <!-- doughnut chart -->
            <v-flex md12 sm12 lg12>
                <v-row>
                    <!-- web(doughnut) usage -->
                    <v-flex md6 sm12 lg6 class="justify-center">
                        <material-card color="green" title="Web Usage">
                            <v-layout class="align-center ">
                                <v-flex>
                                    <web-doughnut
                                        v-model="this.start_date"
                                        v-if="
                                            isWebData &&
                                                start_date &&
                                                end_date &&
                                                selectedKey
                                        "
                                        v-bind:selectedKey="this.selectedKey"
                                        v-bind:start_date="this.start_date"
                                        v-bind:end_date="this.end_date"
                                        @isnotwebdata="web_update"
                                        :width="200"
                                        :height="150"
                                        :styles="myStyles"
                                        :options="optionsForLine"
                                    ></web-doughnut>
                                    <div v-else>
                                        <v-layout
                                            class="justify-center text-center pa-3"
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

                    <!-- mobile(doughnut) usage -->
                    <v-flex md6 sm12 lg6>
                        <material-card color="orange" title="Mobile Usage">
                            <v-layout class="align-center justify-center">
                                <v-flex>
                                    <mobile-doughnut
                                        v-if="
                                            isMobileData &&
                                                start_date &&
                                                end_date &&
                                                selectedKey
                                        "
                                        v-bind:selectedKey="this.selectedKey"
                                        v-bind:start_date="this.start_date"
                                        v-bind:end_date="this.end_date"
                                        @isnotmobiledata="mobile_update"
                                        :width="200"
                                        :height="150"
                                        :styles="myStyles"
                                        :options="optionsForLine"
                                    ></mobile-doughnut>
                                    <div v-else>
                                        <v-layout
                                            class="justify-center text-center pa-3"
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

            <!-- line chart -->

            <!-- total service usage -->
            <v-flex md12 sm12 lg12>
                <material-card
                    color="info"
                    title="Total Service Usage"
                    class="wrap py-0"
                >
                    <v-row class="justify-end mx-auto mb-1">
                        <v-tabs right class="justify-end mx-auto mt-2">
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
                                class="mt-3"
                                v-if="
                                    isTotalData &&
                                        start_date &&
                                        end_date &&
                                        selectedKey
                                "
                                v-bind:selectedKey="this.selectedKey"
                                v-bind:usageServiceType="this.usageServiceType"
                                v-bind:start_date="this.start_date"
                                v-bind:end_date="this.end_date"
                                @isnottotaldate="total_update"
                                :width="450"
                                :height="300"
                                :styles="total_service_usage"
                                :options="optionsForLine"
                            ></line-chart>
                            <div v-else>
                                <v-layout
                                    class="justify-center text-center pa-3"
                                >
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

            <!-- top service usage -->
            <v-flex md12 sm12 lg12>
                <material-card
                    color="red"
                    title="Top Service Usage"
                    class="pt-0"
                >
                    <div>
                        <v-data-table
                            :headers="headers"
                            :items="desserts"
                            :sort-by.sync="sortBy"
                            :sort-desc.sync="sortDesc"
                            class="elevation-1"
                        ></v-data-table>
                    </div>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import LineChart from "@/components/material/LineChart";
    // import DoughnutChart from "@/components/material/DoughnutChart";
    import MobileDoughnut from "@/components/material/MobileDoughnut";
    import WebDoughnut from "@/components/material/WebDoughnut";
    // import HorizontalBarChart from "@/components/material/HorizontalBarChart";
    import DatePicker from "@/components/material/DatePicker";
    import config from "@/config";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    export default {
        name: "Usage",
        data: () => ({
            sortBy: "fat",
            sortDesc: false,
            headers: [
                {
                    text: "Dessert (100g serving)",
                    align: "start",
                    value: "name"
                },
                { text: "Calories", value: "calories" },
                { text: "Fat (g)", value: "fat" },
                { text: "Carbs (g)", value: "carbs" },
                { text: "Protein (g)", value: "protein" },
                { text: "Iron (%)", value: "iron" }
            ],
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: "1%"
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: "1%"
                },
                {
                    name: "Eclair",
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: "7%"
                },
                {
                    name: "Cupcake",
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: "8%"
                },
                {
                    name: "Gingerbread",
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: "16%"
                },
                {
                    name: "Jelly bean",
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: "0%"
                },
                {
                    name: "Lollipop",
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: "2%"
                },
                {
                    name: "Honeycomb",
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: "45%"
                },
                {
                    name: "Donut",
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: "22%"
                },
                {
                    name: "KitKat",
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: "6%"
                }
            ],

            showStartPicker: false,
            showEndPicker: false,
            start_date: null, //조회 시작일
            end_date: null, //조회 종료일
            dateFormatted: null,
            usageServiceType: 0, //조회 옵션(0:일, 1:월, 2:연)

            datacollectionForMobile: {
                labels: ["Android", "iOS", "Windows", "Other"],
                datasets: [
                    {
                        data: [10, 10, 10, 10],
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
                labels: ["Chrome", "FireFox", "Safari", "IE", "edge", "other"],
                datasets: [
                    {
                        data: [10, 10, 10, 10, 10, 10],
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
                labels: ["MAP", "Search", "Routing", "Analyze", "Advanced Map"],
                datasets: [
                    {
                        label: "Total",
                        backgroundColor: "#f87979",
                        pointBackgroundColor: "white",
                        fill: false,
                        showLine: true,
                        //Data to be represented on y-axis
                        data: [10, 23423, 10, 10, 10]
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
            other_usage: 0,
            total_usage: 0,
            web_usage: 0,
            mobile_usage: 0,

            total_service_data: {
                labels: [],
                datasets: []
            },

            //user key data
            keys: [],
            selectedKey: "",

            isMobileData: true,
            isWebData: true,
            isTotalData: true,
            isTopData: true
        }),

        components: {
            LineChart,
            // HorizontalBarChart,
            // DoughnutChart,
            MobileDoughnut,
            WebDoughnut,
            DatePicker
        },

        created() {
            this.$emit("loading-event", true);
            this.getRegisteredKeyByUser();
        },

        methods: {
            dateChanged(start_date, end_date) {
                let start = new Date(start_date);
                let end = new Date(end_date);

                if (start > end) {
                    this.$emit(
                        "snack-event",
                        "error",
                        "End Date Can't Be Less Than Start Date"
                    );
                } else {
                    this.start_date = start_date;
                    this.end_date = end_date;
                    this.getUsageDeviceType();
                }
            },

            complete(index) {
                this.list[index] = !this.list[index];
            },

            changeTab(index) {
                // console.log("changeTab :", index);
                this.usageServiceType = index;
            },

            formatDate(date) {
                if (!date) return null;

                const [year, month, day] = date.split("-");
                return `${month}/${day}/${year}`;
            },

            //userKey값 받아온다. apptoken은 router에서 항상 받아서 넘어오므로..
            getRegisteredKeyByUser() {
                let store = this.$store;

                const getToken = function() {
                    return new Promise(function(resolve) {
                        let refToken =
                            store.getters.getRefToken ||
                            sessionStorage.ref_token;
                        // console.log('reftoken  : ' , refToken);

                        store
                            .dispatch("refreshAppToken", {
                                refToken: refToken,
                                resolve: resolve
                            })
                            .then(() => {
                                // resolve(true);
                                // console.log("refreshAppToken end");
                            })
                            .catch(({ message }) => (this.msg = message));
                    });
                };

                let obj = this;

                getToken().then(function(result) {
                    if (result === true) {
                        // console.log("getToken success[resolve]");
                        // next();
                        obj.getKeyList();
                    }
                });
            },

            getKeyList() {
                this.$http
                    .post(
                        `${config.requestHost}/console/getRegisteredKeybyUser`,
                        {
                            app_token: this.$store.getters.getAppToken
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
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

                            // service_ids = return_data.data.map(x => x.service_id);

                            this.keys = data.data.map(x => x.id);
                            this.selectedKey = this.keys[0];
                            // console.log("this.keys : ", this.keys);

                            //초기값은 기존대로 마지막 인덱스 키값(최초생성된놈)으로 데이터 조회
                            this.$store
                                .dispatch("GETKEYTOKEN", {
                                    key_token: this.selectedKey
                                })
                                .then(() => {
                                    this.getUsageDeviceType();
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
                        // console.log('getUsageDeviceType data : ' , data);
                        this.other_usage = data.data.Other || 0;
                        this.web_usage = data.data.isDesktop || 0;
                        this.mobile_usage = data.data.isMobile || 0;
                        this.total_usage = data.data.total || 0;
                    })
                    .catch(error => {
                        console.error("getUsageDevice Failed : " + error);
                        this.$emit("snack-event", "error", error);
                    })
                    .then(() => {
                        this.$emit("loading-event", false);
                    });
            },

            mobile_update() {
                // console.log('mobile_update!');
                this.isMobileData = false;
            },

            web_update() {
                // console.log('web_update!');
                this.isWebData = false;
            },

            total_update() {
                // console.log('total_update!');
                this.isTotalData = false;
            },

            top_update() {
                console.log("top_update!");
                this.isTopData = false;
            },

            changeKey(item) {
                this.$store
                    .dispatch("GETKEYTOKEN", {
                        key_token: item
                    })
                    .then(() => {
                        this.isWebData = true;
                        this.isMobileData = true;
                        this.isTotalData = true;
                        this.isTopData = true;

                        this.getUsageDeviceType();

                        this.selectedKey = item;
                    })
                    .catch(({ message }) => (this.msg = message));
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
            selectedKey() {
                return this.selectedKey;
            },
            computedDateFormatted() {
                return this.formatDate(this.date);
            }
        },
        watch: {
            date() {
                this.dateFormatted = this.formatDate(this.date);
            }
            // start_date: function(newVal, oldVal) {
            //     console.log("startDate(watch) : ", oldVal, "to ", newVal);
            // }
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
