<script>
    import { Line } from "vue-chartjs";
    import config from "@/config";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
            selectedKey: null,
            start_date: null,
            end_date: null,
            usageServiceType: null,
        },

        data: () => ({
            option: {
                fill: false,
                responsive: false
            },
            total_service_data: {
                labels: [],
                datasets: [
                    // {
                    //     label: "Total",
                    //     pointBackgroundColor: "white",
                    //     borderWidth: 3,
                    //     fill: false,
                    //     borderColor: "#3e8787",
                    //     showLine: true,
                    //     pointBorderColor: "#249EBF",
                    //     //Data to be represented on y-axis
                    //     data: [
                    //         40,
                    //         20,
                    //         30,
                    //         44,
                    //         90,
                    //         10,
                    //         21,
                    //         40,
                    //         48,
                    //         70,
                    //         86,
                    //         87,
                    //         //라스트데이터가 조금 더 크면 graph scale이 좀 더 괜찮아보임
                    //         100
                    //     ]
                    // },
                    // {
                    //     label: "MAP",
                    //     pointBackgroundColor: "white",
                    //     borderWidth: 3,
                    //     fill: false,
                    //     borderColor: "#4E36FF",
                    //     showLine: true,
                    //     pointBorderColor: "#4E36FF",
                    //     //Data to be represented on y-axis
                    //     data: [2, 9, 2, 23, 10, 15, 20, 12, 42, 31, 32, 41]
                    // },
                    // {
                    //     label: "Search",
                    //     pointBackgroundColor: "white",
                    //     borderWidth: 3,
                    //     fill: false,
                    //     borderColor: "#36FFDA",
                    //     showLine: true,
                    //     pointBorderColor: "#36FFDA",
                    //     //Data to be represented on y-axis
                    //     data: [11, 10, 2, 46, 10, 15, 44, 12, 25, 32, 52, 77]
                    // },
                    // {
                    //     label: "Geofencing",
                    //     pointBackgroundColor: "white",
                    //     borderWidth: 3,
                    //     fill: false,
                    //     borderColor: "#A922EB",
                    //     showLine: true,
                    //     pointBorderColor: "#36A2EB",
                    //     //Data to be represented on y-axis
                    //     data: [14, 22, 2, 32, 10, 12, 20, 12, 52, 3, 32, 77]
                    // },
                    // {
                    //     label: "Routing",
                    //     pointBackgroundColor: "white",
                    //     borderWidth: 3,
                    //     fill: false,
                    //     borderColor: "#76FF36",
                    //     showLine: true,
                    //     pointBorderColor: "#76FF36",
                    //     //Data to be represented on y-axis
                    //     data: [21, 32, 2, 23, 44, 4, 11, 12, 62, 3, 12, 2]
                    // },
                    // {
                    //     label: "Analyze",
                    //     pointBackgroundColor: "white",
                    //     borderWidth: 3,
                    //     fill: false,
                    //     borderColor: "#FF5733",
                    //     showLine: true,
                    //     pointBorderColor: "#FF5733",
                    //     //Data to be represented on y-axis
                    //     data: [1, 2, 3, 10, 22, 33, 20, 12, 7, 3, 2, 1]
                    // },
                    // {
                    //     label: "Advanced Map",
                    //     pointBackgroundColor: "white",
                    //     borderWidth: 3,
                    //     fill: false,
                    //     borderColor: "#ff9100",
                    //     showLine: true,
                    //     pointBorderColor: "#ff9100",
                    //     //Data to be represented on y-axis
                    //     data: [11, 7, 2, 5, 22, 4, 37, 55, 25, 2, 58, 10]
                    // }
                ]
            },
            b_isData: false,
            start_date: "",
            end_date: "",
            usageServiceType: 0
        }),

        beforeMount() {
            this.getUsageServiceType();
        },

        mounted() {
            //this.renderChart(this.chartdata, this.option);
        },

        watch: {
            start_date() {
                this.getUsageServiceType();
            },
            end_date() {
                this.getUsageServiceType();
            },
            usageServiceType() {
                this.getUsageServiceType();
            },

            selectedKey() {
                console.log("selectedKey changed[line chart]");
                this.getUsageServiceType();
            },

            chartdata() {
                // console.log(to,from);
                this.renderChart(this.chartdata, this.options);
            }
        },

        methods: {
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
                console.log("getUsageService Type : ", this.selectedKey);
                //기존 데이터 초기화
                this.total_service_data.labels = [];
                this.total_service_data.datasets = [];
                this.b_isData = false;

                // console.log(
                //     "getUsageServiceType date_type : ",
                //     this.usageServiceType
                // );

                this.$http
                    .get(
                        `${config.requestHost}/console/getUsageServiceType?date_type=${this.usageServiceType}&end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        try {
                            console.log(
                                "getUsageServiceType Data[pure] : ",
                                data
                            );

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

                            return_data = data;
                            // console.log("getUsageServiceType data :", return_data);

                            let service_ids = [];

                            //서비스 아이디 인덱스 배열 생성
                            service_ids = return_data.data.map(
                                x => x.service_id
                            );

                            //중복제거
                            service_ids = Array.from(new Set(service_ids));

                            let start_date = this.start_date;
                            let end_date = this.end_date;
                            let day_gap = 0;

                            let interval = "";
                            switch (parseInt(this.usageServiceType)) {
                                case 0:
                                    {
                                        interval = "d";
                                    }
                                    break;

                                case 1:
                                    {
                                        interval = "m";
                                    }
                                    break;

                                case 2:
                                    {
                                        interval = "y";
                                    }
                                    break;
                            }
                            // console.log("interval : ",interval);
                            //시작일부터 표현해줘야하므로 날짜 차이 +1을 해줘야한다.
                            day_gap = this.dateDiff(
                                interval,
                                start_date,
                                end_date
                            );

                            // console.log("day_gap : ", day_gap + 1);

                            for (let i = 0; i < day_gap + 1; i++) {
                                //일별 조회
                                if (interval === "d") {
                                    let date = new Date(start_date);
                                    date.setDate(date.getDate() + i);
                                    // console.log("date : ", date);

                                    let day_str = this.formatDate(
                                        interval,
                                        date
                                    );
                                    this.total_service_data.labels.push(
                                        day_str
                                    );
                                }

                                //월별 조회
                                if (interval === "m") {
                                    // console.log("월별 조회");
                                    // console.log("start_date : ", start_date);
                                    let date = new Date(start_date);
                                    date.setMonth(date.getMonth() + i);

                                    let day_str = this.formatDate(
                                        interval,
                                        date
                                    );
                                    this.total_service_data.labels.push(
                                        day_str
                                    );
                                }

                                //연별 조회
                                if (interval === "y") {
                                    let date = new Date(start_date);
                                    date.setFullYear(date.getFullYear() + i);
                                    // console.log("연별 조회 date : ", date);

                                    let day_str = this.formatDate(
                                        interval,
                                        date
                                    );
                                    // console.log('day_str : ', day_str);
                                    this.total_service_data.labels.push(
                                        day_str
                                    );
                                }

                                // console.log("day_str : ", day_str);
                            }

                            //서비스별로 데이터 묶음
                            for (let i in service_ids) {
                                let res = return_data.data.filter(it =>
                                    it.service_id.includes(service_ids[i])
                                );
                                //서비스아이디별로 배열이 생성되는데... start_date부터 +i 번째 일이랑 날짜가 같으면 데이터를 넣고, 없으면 0을 넣어야함
                                // console.log(
                                //     "=========================================="
                                // );
                                // console.log("index : ", i, " , res : ", res);

                                let dataset = {};

                                // let data = res.map(x => x.sum);
                                let data = [];

                                for (let i in this.total_service_data.labels) {
                                    // console.log(
                                    //     "index : ",
                                    //     i,
                                    //     "label : ",
                                    //     this.total_service_data.labels[i]
                                    // );

                                    try {
                                        let find_data = res.find(
                                            element =>
                                                element.date ===
                                                this.total_service_data.labels[
                                                    i
                                                ]
                                        );

                                        if (find_data) {
                                            data.push(find_data.sum);
                                        } else {
                                            data.push(0);
                                        }
                                    } catch {
                                        data.push(0);
                                    }
                                }
                                try {
                                    (dataset.label = this.getServicelabel(
                                        parseInt(res[0].service_id)
                                    )),
                                        (dataset.pointBackgroundColor =
                                            "white"),
                                        (dataset.borderWidth = 5),
                                        (dataset.fill = false),
                                        (dataset.borderColor = this.getLineColor(
                                            parseInt(i)
                                        )),
                                        (dataset.showLine = true),
                                        (dataset.pointBorderColor = this.getLineColor(
                                            parseInt(i)
                                        )),
                                        (dataset.data = data);
                                } catch {
                                    // console.log("해당데이터 없음");
                                }

                                // console.log("dataset: ", dataset);

                                this.total_service_data.datasets.push(dataset);
                            }

                            if (this.total_service_data.datasets.length > 0) {
                                this.renderChart(
                                    this.total_service_data,
                                    this.options
                                );
                            } else {
                                this.$emit("isnottotaldate");
                            }
                        } catch {
                            this.$emit("isnottotaldate");
                        }
                    });
            },

            getLineColor(index) {
                var color = "";
                // console.log("getLineColor : ", index);
                switch (index) {
                    case 0:
                        {
                            color = "#3e8787";
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
                // console.log("color : ", color);
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
                // console.log("getServiceLabel : ", id);
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

            formatDate(interval, date) {
                var d = new Date(date),
                    month = "" + (d.getMonth() + 1),
                    day = "" + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) month = "0" + month;
                if (day.length < 2) day = "0" + day;

                //일별 조회 e.g) 2020-01-01
                if (interval === "d") {
                    return [year, month, day].join("-");
                }
                //월별 조회 e.g) 2020-01
                if (interval === "m") {
                    return [year, month].join("-");
                }
                //연별 조회 e.g) 2020
                if (interval === "y") {
                    return year.toString();
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
        }
    };
</script>

<style></style>
