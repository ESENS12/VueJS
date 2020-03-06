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
                                :chartdata="datacollectionForHorizontal"
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

                <v-row>
                    <v-col>
                        <div class="container">
                            <h3>GoogleChart</h3>
                            <GoogleChart></GoogleChart>
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="col-sm-12 col-md-6 col-dm-6">
                        <div class="container wrap height" >
                            <h3 class="text-center">GooglePieChart</h3>
                            <GooglePieChart></GooglePieChart>
                        </div>
                    </v-col>

                    <v-col class="col-sm-12 col-md-6 col-dm-6">
                        <div class="container wrap height" >
                            <h3 class="text-center">GoogleDoughnutChart</h3>
                            <GoogleDoughnutChart></GoogleDoughnutChart>
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="col-sm-12 col-md-6 col-dm-6">
                        <div class="container wrap height" >
                            <h3 class="text-center">PieChart</h3>
                            <PieChart></PieChart>
                        </div>
                    </v-col>
                </v-row>
            </v-content>
        </v-layout>
    </v-app>
</template>

<script>
    // import HelloWorld from './components/HelloWorld';
    import GoogleChart from "./components/GoogleChart";
    // import GoogleBarChart from "./components/GoogleBarChart";
    import GoogleDoughnutChart from "./components/GoogleDoughnutChart";
    import GooglePieChart from "./components/GooglePieChart";
    import LineChart from "./components/LineChart";
    import BarChart from "./components/BarChart";
    import PieChart from "./components/PieChart";
    import HorizontalBarChart from "./components/HorizontalBarChart";
    import DoughnutChart from "./components/DoughnutChart";
    import BubbleChart from "./components/BubbleChart";
    import PolarAreaChart from "./components/PolarAreaChart";
    import Chart from 'chart.js';
    import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";
    // Chart.defaults.global.plugins.datalabels.display = false;
    Chart.plugins.unregister(ChartJsPluginDataLabels);

    export default {
        name: "App",

        components: {
            PieChart, 
            // GoogleBarChart,
            GooglePieChart,
            GoogleDoughnutChart,
            GoogleChart,
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
                        fill: false,
                        borderColor: "#3e8787",
                        showLine: true,
                        pointBorderColor: "#249EBF",
                        //Data to be represented on y-axis
                        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                    },

                    {
                        borderColor: "rgba(255, 0, 0, 0.5)",
                        label: "Data Two",
                        backgroundColor: "#36A2EB",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill: false,
                        showLine: true,
                        pointBorderColor: "rgba(255, 0, 0,0.55)",
                        //Data to be represented on y-axis
                        data: [25, 10, 44, 62, 10, 15, 20, 40, 25, 70, 44, 10]
                    }
                ]
            },

            datacollectionForHorizontal: {
                //Data to be represented on x-axis
                labels: ["Total Data"],
                datasets: [
                    {
                        label: "January",
                        backgroundColor: "rgba(0, 0, 255, 0.5)",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill: false,
                        showLine: true,
                        //Data to be represented on y-axis
                        data: [90]
                    },

                    {
                        label: "February",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill: false,
                        showLine: true,
                        //Data to be represented on y-axis
                        data: [70]
                    },

                    {
                        label: "March",
                        backgroundColor: "rgba(0, 255, 0, 0.5)",
                        pointBackgroundColor: "white",
                        borderWidth: 5,
                        fill: false,
                        showLine: true,
                        //Data to be represented on y-axis
                        data: [25]
                    }
                ]
            },

            datacollectionForLine: {
                //Data to be represented on x-axis
                labels: [],
                datasets: []
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
                        data: [1, 0, 0],
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
            let return_data = {
                result: "OK",
                data: [
                    {
                        date: "2020-02-28",
                        sum: "378",
                        service_id: "4"
                    },
                    {
                        date: "2020-02-29",
                        sum: "2",
                        service_id: "4"
                    },
                    {
                        date: "2020-03-01",
                        sum: "12",
                        service_id: "2"
                    },
                    {
                        date: "2020-02-29",
                        sum: "24",
                        service_id: "2"
                    },
                    {
                        date: "2020-02-28",
                        sum: "100",
                        service_id: "5"
                    },
                    {
                        date: "2020-02-29",
                        sum: "200",
                        service_id: "5"
                    }
                ]
            };
            console.log("getUsageServiceType data :", return_data);

            let service_ids = [];

            //서비스 아이디 인덱스 배열 생성
            service_ids = return_data.data.map(x => x.service_id);

            //중복제거
            service_ids = Array.from(new Set(service_ids));

            let start_date = "2020-02-28";
            let end_date = "2020-03-01";
            let day_gap = 0;

            //시작일부터 표현해줘야하므로 날짜 차이 +1을 해줘야한다.
            day_gap = this.dateDiff("d", start_date, end_date);

            console.log("day_gap : ", day_gap + 1);

            for (let i = 0; i < day_gap + 1; i++) {
                let date = new Date(start_date);
                date.setDate(date.getDate() + i);
                console.log("date : ", date);

                let day_str = this.formatDate(date);
                this.datacollectionForLine.labels.push(day_str);
                console.log("day_str : ", day_str);
            }

            //서비스별로 데이터 묶음
            for (let i in service_ids) {
                let res = return_data.data.filter(it =>
                    it.service_id.includes(service_ids[i])
                );
                //서비스아이디별로 배열이 생성되는데... start_date부터 +i 번째 일이랑 날짜가 같으면 데이터를 넣고, 없으면 0을 넣어야함
                console.log("==========================================");
                console.log("index : ", i, " , res : ", res);

                let dataset = {};

                // let data = res.map(x => x.sum);
                let data = [];

                for (let i in this.datacollectionForLine.labels) {
                    console.log(
                        "label : ",
                        this.datacollectionForLine.labels[i]
                    );
                    console.log("res[i] : ", res[i]);
                    try {
                        if (
                            res[i].date === this.datacollectionForLine.labels[i]
                        ) {
                            data.push(res[i].sum);
                        } else {
                            data.push(0);
                        }
                    } catch {
                        console.log("les에 해당일이 없음 (배열 사이즈 다를떄)");
                        data.push(0);
                    }
                }
                try {
                    console.log("service_id : ", res[0].service_id);
                    (dataset.label = this.getServicelabel(
                        parseInt(res[0].service_id)
                    )),
                        (dataset.pointBackgroundColor = "white"),
                        (dataset.borderWidth = 5),
                        (dataset.fill = false),
                        (dataset.borderColor = this.getLineColor(parseInt(i))),
                        (dataset.showLine = true),
                        (dataset.pointBorderColor = this.getLineColor(
                            parseInt(i)
                        )),
                        (dataset.data = data);
                } catch {
                    console.log("해당데이터 없음");
                }

                console.log("dataset: ", dataset);

                this.datacollectionForLine.datasets.push(dataset);
            }
            // let start_date = new Date("2020-01-01");
            // let end_date = new Date("2020-01-31");
        },

        methods: {
            getLineColor(index) {
                var color = "";
                console.log("getLineColor : ", index);
                switch (index) {
                    case 0:
                        {
                            color = "#3e8787";
                            console.log("color is : ", color);
                        }
                        break;

                    case 1:
                        {
                            color = "#4d089a";
                        }
                        break;

                    case 2:
                        {
                            color = "#323edd";
                        }
                        break;

                    case 3:
                        {
                            color = "#dc2ade";
                        }
                        break;

                    case 4:
                        {
                            color = "#e8f044";
                        }
                        break;

                    case 5:
                        {
                            color = "#216353";
                        }
                        break;

                    case 6:
                        {
                            color = "#7a4d1d";
                        }
                        break;

                    case 7:
                        {
                            color = "#ed6663";
                        }
                        break;

                    case 8:
                        {
                            color = "#4f3961";
                        }
                        break;
                }
                console.log("color : ", color);
                return color;
            },

            dateDiff($interval, $dateOld, $dateNew) {
                var date1,
                    date2,
                    d1_year,
                    d1_month,
                    d1_date,
                    d2_year,
                    d2_month,
                    d2_date,
                    result,
                    temp,
                    i;
                date1 = new Date($dateOld);
                date2 = new Date($dateNew);

                switch ($interval.toLowerCase()) {
                    case "y": //year
                        return date2.getFullYear() - date1.getFullYear();
                    case "m": //month
                        return (
                            (date2.getFullYear() - date1.getFullYear()) * 12 +
                            date2.getMonth() -
                            date1.getMonth()
                        );
                    case "h": //hour
                        return parseInt(
                            (date2.getTime() - date1.getTime()) / 3600000
                        );
                    case "i": //minute
                        return parseInt(
                            (date2.getTime() - date1.getTime()) / 60000
                        );
                    case "s": //second
                        return parseInt(
                            (date2.getTime() - date1.getTime()) / 1000
                        );
                    case "ms": //msecond
                        return date2.getTime() - date1.getTime();
                    case "d": //day
                        d1_year = date1.getFullYear();
                        d1_month = date1.getMonth();
                        d1_date = date1.getDate();

                        d2_year = date2.getFullYear();
                        d2_month = date2.getMonth();
                        d2_date = date2.getDate();

                        result = 0;

                        if (d2_year - d1_year > 0) {
                            // 연도가 다른 경우 3단계 처리
                            result += this.dateDiff(
                                "d",
                                this.dateGet(date1),
                                this.dateGet(d1_year + "-12-31")
                            );
                            result += this.dateDiff(
                                "d",
                                this.dateGet(d2_year + "-1-1"),
                                this.dateGet(date2)
                            );
                            for (i = d1_year + 2; i < d2_year; i++)
                                result += 365 + (this.isLeapYear(i) ? 1 : 0);
                        } else {
                            temp = [
                                31,
                                28,
                                31,
                                30,
                                31,
                                30,
                                31,
                                31,
                                30,
                                31,
                                30,
                                31
                            ];
                            if (this.isLeapYear(d1_year)) temp[1]++;

                            if (d2_month - d1_month > 0) {
                                // 월이 다른 경우 3단계 처리
                                result += temp[d1_month] - d1_date + 1;
                                result += d2_date - 1;
                                for (i = d1_month + 1; i < d2_month; i++)
                                    result += temp[i];
                            } else {
                                result += d2_date - d1_date;
                            }
                        }
                        return result;
                    default:
                        return null;
                }
            },
            isLeapYear($year) {
                return ($year % 4 == 0 && $year % 100 != 0) || $year % 400 == 0;
            },

            getServicelabel(id) {
                console.log("getServiceLabel : ", id);
                let servicelabel = "";
                switch (id) {
                    case 1:
                        {
                            servicelabel = "Web Map";
                        }
                        break;
                    case 2:
                        {
                            servicelabel = "Mobile Map";
                        }
                        break;
                    case 3:
                        {
                            servicelabel = "Map download";
                        }
                        break;
                    case 4:
                        {
                            servicelabel = "RP";
                        }
                        break;
                    case 5:
                        {
                            servicelabel = "RP truck";
                        }
                        break;
                    case 6:
                        {
                            servicelabel = "Search";
                        }
                        break;
                    case 7:
                        {
                            servicelabel = "forward Geocoding";
                        }
                        break;
                    case 8:
                        {
                            servicelabel = "reverse Geocoding";
                        }
                        break;
                    case 9:
                        {
                            servicelabel = "Geofencing";
                        }
                        break;
                    case 10:
                        {
                            servicelabel = "MM";
                        }
                        break;
                    case 11:
                        {
                            servicelabel = "ADAS";
                        }
                        break;

                    case 12:
                        {
                            servicelabel = "Fleet";
                        }
                        break;
                    case 1001:
                        {
                            servicelabel = "Tracker";
                        }
                        break;
                    case 1002:
                        {
                            servicelabel = "Tracker";
                        }
                        break;
                    case 1003:
                        {
                            servicelabel = "Tracker";
                        }
                        break;
                    case 1004:
                        {
                            servicelabel = "Tracker";
                        }
                        break;
                    case 100:
                        {
                            servicelabel = "Tracking";
                        }
                        break;

                    case 200:
                        {
                            servicelabel = "Analyze";
                        }
                        break;
                }
                return servicelabel;
            },

            formatDate(date) {
                var d = new Date(date),
                    month = "" + (d.getMonth() + 1),
                    day = "" + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month = "0" + month;
                if (day.length < 2) day = "0" + day;

                return [year, month, day].join("-");
            }
        },
        dateGet($date) {
            var temp, h, m, s, ms;

            switch (typeof $date) {
                case "string":
                    ms = h = m = s = 0;

                    // 1
                    $date = $date.split("-");

                    // 2
                    if ($date[2].indexOf(" ") > -1) {
                        temp = $date[2].split(" ");
                        $date[2] = temp[0];

                        //3
                        if (temp.length == 3) {
                            ms = parseInt(temp[2], 10);
                            if (ms > 1000) ms = 999;
                        }

                        //4, 5
                        temp = temp[1].split(":");
                        h = parseInt(temp[0], 10);
                        m = parseInt(temp[1], 10);
                        s = parseInt(temp[2], 10);
                    }

                    //6, 7
                    return new Date(
                        parseInt($date[0], 10),
                        parseInt($date[1], 10) - 1,
                        parseInt($date[2], 10),
                        h,
                        m,
                        s,
                        ms
                    );

                //8
                case "number":
                    return new Date($date);

                //9
                default:
                    if ($date.constructor == Date) {
                        return $date;
                    } else {
                        return new Date();
                    }
            }
        },

        dateAdd($interval, $number, $date) {
            var date;
            date = this.dateGet($date);

            switch ($interval.toLowerCase()) {
                case "y": //year
                    date.setFullYear(date.getFullYear() + $number);
                    break;
                case "m": //month
                    date.setMonth(date.getMonth() + $number);
                    break;
                case "d": //day
                    date.setDate(date.getDate() + $number);
                    break;
                case "h": //hour
                    date.setHours(date.getHours() + $number);
                    break;
                case "i": //minute
                    date.setMinutes(date.getMinutes() + $number);
                    break;
                case "s": //second
                    date.setSeconds(date.getSeconds() + $number);
                    break;
                case "ms": //msecond
                    date.setMilliseconds(date.getMilliseconds() + $number);
                    break;
                default:
                    return null;
            }
            return date;
        }
    };

    // datacollectionForLine: {
    //             //Data to be represented on x-axis
    //             labels: [
    //                 "January",
    //                 "February",
    //                 "March",
    //                 "April",
    //                 "May",
    //                 "June",
    //                 "July",
    //                 "August",
    //                 "September",
    //                 "October",
    //                 "November",
    //                 "December"
    //             ],
    //             datasets: [
    //                 {
    //                     label: "Data One",
    //                     pointBackgroundColor: "white",
    //                     borderWidth: 5,
    //                     fill: false,
    //                     borderColor: "#3e8787",
    //                     showLine: true,
    //                     pointBorderColor: "#249EBF",
    //                     //Data to be represented on y-axis
    //                     data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
    //                 },

    //                 {
    //                     label: "Data Two",
    //                     pointBackgroundColor: "white",
    //                     borderWidth: 5,
    //                     fill: false,
    //                     borderColor: "#36A2EB",
    //                     showLine: true,
    //                     pointBorderColor: "#36A2EB",
    //                     //Data to be represented on y-axis
    //                     data: [25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
    //                 }
    //             ]
    //         },
</script>
