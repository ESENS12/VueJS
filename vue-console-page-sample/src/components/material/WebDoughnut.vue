<script>
    import { Doughnut } from "vue-chartjs";
    // const { reactiveProp } = mixins
    import config from "@/config";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    export default {
        extends: Doughnut,
        //   mixins: [reactiveProp],
        props: {
            start_date: null,
            end_date: null,
            selectedKey: null,

            chartdata: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            }
        },

        data: () => ({
            b_isData: false,
            datacollectionForWeb: {
                labels: ["Chrome", "FireFox", "Safari", "IE", "edge", "other"],
                // labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: [
                            "#216353",
                            "#4e8787",
                            "#7c2ade",
                            "#9a4d1d",
                            "#d600ff",
                            "#fd6663",
                        ]
                    }
                ]
            },
            start_date: "",
            end_date: "",
            selectedKey: ""
        }),

        mounted() {
            this.getUsageBrowser();
        },

        watch: {
            start_date() {
                // console.log("startdate changed(webDoughnut)");
                this.getUsageBrowser();
            },
            end_date() {
                // console.log("enddate changed(webDoughnut)");
                this.getUsageBrowser();
            },
            datacollectionForWeb() {
                // console.log(to,from);

                this.renderChart(this.datacollectionForWeb, this.options);
            },
            selectedKey() {
                // console.log("selectedKey changed(webDoughnut)");

                this.getUsageBrowser();
            }
        },

        methods: {
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
                // console.log("getUsageBrowser key data : ", this.selectedKey);
                //기존 데이터 초기화
                this.b_isData = false;
                this.datacollectionForWeb.datasets[0].data = [];
                // this.datacollectionForWeb.labels = [];
                // this.b_isData = false;

                this.$http
                    .get(
                        `${config.requestHost}/console/getUsageBrowser?end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        // `${config.requestHost}/console/getUsageBrowser?end_date=2020-02-29&start_date=2020-02-25&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        try {
                            // console.log("webData : ", data);

                            this.datacollectionForWeb.datasets[0].data.push(
                                data.data.chrome || 0
                            );

                            this.datacollectionForWeb.datasets[0].data.push(
                                data.data.firefox || 0
                            );

                            this.datacollectionForWeb.datasets[0].data.push(
                                data.data.safari || 0
                            );

                            this.datacollectionForWeb.datasets[0].data.push(
                                data.data.explor || 0
                            );

                            this.datacollectionForWeb.datasets[0].data.push(
                                data.data.other || 0
                            );

                            this.datacollectionForWeb.datasets[0].data.push(
                                data.data.edge || 0
                            );

                            // console.log('dataset : ', this.datacollectionForWeb.datasets[0]);
                            // if (
                            //     this.datacollectionForWeb.datasets[0].data[0] >
                            //     0
                            // ) {
                            //     this.datacollectionForWeb.labels.push("Chrome");
                            // }
                            // if (
                            //     this.datacollectionForWeb.datasets[0].data[1] > 0
                            // ) {
                            //     this.datacollectionForWeb.labels.push(
                            //         "Firefox"
                            //     );
                            // }

                            // if (
                            //     this.datacollectionForWeb.datasets[0].data[2] > 0
                            // ) {
                            //     this.datacollectionForWeb.labels.push("Safari");
                            // }

                            // if (
                            //     this.datacollectionForWeb.datasets[0].data[3] > 0
                            // ) {
                            //     this.datacollectionForWeb.labels.push("Explor");
                            // }

                            // if (
                            //     this.datacollectionForWeb.datasets[0].data[4] > 0
                            // ) {
                            //     this.datacollectionForWeb.labels.push("Other");
                            // }

                            // if (
                            //     this.datacollectionForWeb.datasets[0].data[5] > 0
                            // ) {
                            //     this.datacollectionForWeb.labels.push("Edge");
                            // }

                            // console.log(
                            //     "this.datacollectionForWeb: ",
                            //     this.datacollectionForWeb.datasets[0]
                            // );

                            for (var index in this.datacollectionForWeb
                                .datasets[0].data) {
                                // console.log(this.datacollectionForWeb.datasets[0].data[index]);
                                //하나라도 값이 있으면 true
                                if (
                                    this.datacollectionForWeb.datasets[0].data[
                                        index
                                    ] > 0
                                ) {
                                    this.b_isData = true;
                                }
                            }

                            if (this.b_isData) {
                                this.renderChart(
                                    this.datacollectionForWeb,
                                    this.options
                                );
                            } else {
                                // console.log("web data 없음");
                                this.$emit("isnotwebdata");
                            }

                            // this.b_isData = false;
                        } catch {
                            // console.log("catch err");
                            this.$emit("isnotwebdata");
                        }
                    })
                    .catch(err => {
                        console.log("getUsageBrowser error :", err);
                        this.$emit("isnotwebdata");
                    });
            }
        }
    };
</script>

<style></style>
