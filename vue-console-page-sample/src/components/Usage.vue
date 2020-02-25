<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout wrap>
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

            <!-- 차트 레이아웃 -->

            <v-flex md12 sm12 lg12>
                <material-card color="blue" title="Web usage">
                    <!-- 'Bar', 'Line', 'Pie' -->
                    <!-- <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="purple">Year</v-btn>

                    <v-btn color="green">
                        Month
                    </v-btn>

                    <v-btn color="blue">
                        Day
                    </v-btn>
                </v-card-actions> -->

                    <v-row>
                        <v-col>
                            <material-chart-card
                                :data="dailySalesChart.data"
                                :options="dailySalesChart.options"
                                color="info"
                                type="Line"
                            >
                                <h4 class="title font-weight-light">
                                    Daily Usage
                                </h4>
                                <p
                                    class="category d-inline-flex font-weight-light"
                                >
                                    <v-icon color="green" small>
                                        mdi-arrow-up
                                    </v-icon>
                                    <span class="green--text">55%</span>&nbsp;
                                    increase in today's sales
                                </p>

                                <template slot="actions">
                                    <v-icon class="mr-2" small>
                                        mdi-clock-outline
                                    </v-icon>
                                    <span
                                        class="caption grey--text font-weight-light"
                                        >updated 4 minutes ago</span
                                    >
                                </template>
                            </material-chart-card>
                        </v-col>
                        <v-col>
                            <material-chart-card
                                :data="dailySalesChart.data"
                                :options="dailySalesChart.options"
                                color="info"
                                type="Line"
                            >
                                <h4 class="title font-weight-light">
                                    Weekend Usage
                                </h4>
                                <p
                                    class="category d-inline-flex font-weight-light"
                                >
                                    <v-icon color="green" small>
                                        mdi-arrow-up
                                    </v-icon>
                                    <span class="green--text">55%</span>&nbsp;
                                    increase in today's sales
                                </p>

                                <template slot="actions">
                                    <v-icon class="mr-2" small>
                                        mdi-clock-outline
                                    </v-icon>
                                    <span
                                        class="caption grey--text font-weight-light"
                                        >updated 4 minutes ago</span
                                    >
                                </template>
                            </material-chart-card>
                        </v-col>
                        <v-col>
                            <material-chart-card
                                :data="dailySalesChart.data"
                                :options="dailySalesChart.options"
                                color="info"
                                type="Line"
                            >
                                <h4 class="title font-weight-light">
                                    Month Usage
                                </h4>
                                <p
                                    class="category d-inline-flex font-weight-light"
                                >
                                    <v-icon color="green" small>
                                        mdi-arrow-up
                                    </v-icon>
                                    <span class="green--text">55%</span>&nbsp;
                                    increase in today's sales
                                </p>

                                <template slot="actions">
                                    <v-icon class="mr-2" small>
                                        mdi-clock-outline
                                    </v-icon>
                                    <span
                                        class="caption grey--text font-weight-light"
                                        >updated 4 minutes ago</span
                                    >
                                </template>
                            </material-chart-card>
                        </v-col>
                    </v-row>
                </material-card>
            </v-flex>

            <v-flex md12 sm12 lg6 class="py-0 mx-0">
                <material-card color="blue" title="Mobile usage">
                    <v-card-actions class="py-0">
                        <v-spacer></v-spacer>
                        <v-btn color="purple">Year</v-btn>

                        <v-btn color="green">
                            Month
                        </v-btn>

                        <v-btn color="blue">
                            Day
                            <!-- <v-icon>mdi-chevron-down</v-icon> -->
                        </v-btn>
                    </v-card-actions>

                    <material-chart-card
                        :data="emailsSubscriptionChart.data"
                        :options="emailsSubscriptionChart.options"
                        :responsive-options="
                            emailsSubscriptionChart.responsiveOptions
                        "
                        color="red"
                        type="Bar"
                    >
                        <h4 class="title font-weight-light">
                            Email Subscription
                        </h4>
                        <p class="category d-inline-flex font-weight-light">
                            Last Campaign Performance
                        </p>

                        <template slot="actions">
                            <v-icon class="mr-2" small>
                                mdi-clock-outline
                            </v-icon>
                            <span class="caption grey--text font-weight-light"
                                >updated 10 minutes ago</span
                            >
                        </template>
                    </material-chart-card>
                </material-card>
            </v-flex>
            <v-flex md12 sm12 lg6>
                <material-card color="blue" title="Total usage">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="purple">Year</v-btn>

                        <v-btn color="green">
                            Month
                        </v-btn>

                        <v-btn color="blue">
                            Day
                            <!-- <v-icon>mdi-chevron-down</v-icon> -->
                        </v-btn>
                    </v-card-actions>
                    <material-chart-card
                        :data="dataCompletedTasksChart.data"
                        :options="dataCompletedTasksChart.options"
                        color="green"
                        type="Line"
                    >
                        <h3 class="title font-weight-light">Completed Tasks</h3>
                        <p class="category d-inline-flex font-weight-light">
                            Last Last Campaign Performance
                        </p>

                        <template slot="actions">
                            <v-icon class="mr-2" small>
                                mdi-clock-outline
                            </v-icon>
                            <span class="caption grey--text font-weight-light"
                                >campaign sent 26 minutes ago</span
                            >
                        </template>
                    </material-chart-card>
                </material-card>
            </v-flex>

            <v-flex md12 lg6>
                <material-card
                    color="orange"
                    title="Employee Stats"
                    text="New employees on 15th September, 2016"
                >
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        hide-default-footer
                    >
                        <template slot="headerCell" slot-scope="{ header }">
                            <span
                                class="font-weight-light text-warning text--darken-3"
                                v-text="header.text"
                            />
                        </template>
                        <template slot="items" slot-scope="{ index, item }">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td class="text-xs-right">{{ item.salary }}</td>
                            <td class="text-xs-right">{{ item.country }}</td>
                            <td class="text-xs-right">{{ item.city }}</td>
                        </template>
                    </v-data-table>
                </material-card>
            </v-flex>
            <v-flex md12 lg6>
                <material-card
                    color="blue"
                    title="Employee Stats"
                    text="New employees on 15th September, 2016"
                >
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        hide-default-footer
                    >
                        <template slot="headerCell" slot-scope="{ header }">
                            <span
                                class="font-weight-light text-warning text--darken-3"
                                v-text="header.text"
                            />
                        </template>
                        <template slot="items" slot-scope="{ index, item }">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td class="text-xs-right">{{ item.salary }}</td>
                            <td class="text-xs-right">{{ item.country }}</td>
                            <td class="text-xs-right">{{ item.city }}</td>
                        </template>
                    </v-data-table>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Usage",
        data() {
            return {
                other_usage: "1,203",
                total_usage: "2,423",
                web_usage: "839",
                mobile_usage: "612",

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
        methods: {
            complete(index) {
                this.list[index] = !this.list[index];
            }
        }
    };
</script>
<style scoped>
    .chartcard {
        height: 10%;
    }
</style>
