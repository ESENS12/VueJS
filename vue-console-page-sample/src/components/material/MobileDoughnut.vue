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
            chartdata: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            },
            start_date: null,
            end_date: null,
            selectedKey: null
        },

        data: () => ({
            b_isData: false,
            start_date: "",
            end_date: "",
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
            }
        }),
        beforeMount() {
            this.getUsageMobile();
        },
        mounted() {},

        watch: {
            start_date() {
                this.getUsageMobile();
            },
            end_date() {
                this.getUsageMobile();
            },
            chartdata() {
                // console.log(to,from);

                this.renderChart(this.chartdata, this.options);
            },
            
            selectedKey() {
                console.log("selectedKey changed[mobile doughnut]");
                this.getUsageMobile();
            }
        },

        methods: {
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
                //기존 데이터 초기화
                this.datacollectionForMobile.datasets[0].data = [];
                this.b_isData = false;

                this.$http
                    .get(
                        `${config.requestHost}/console/getUsageMobile?end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        // `${config.requestHost}/console/getUsageMobile?end_date=2020-02-29&start_date=2020-02-25&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        this.datacollectionForMobile.datasets[0].data.push(
                            data.data.android || 0
                        );
                        this.datacollectionForMobile.datasets[0].data.push(
                            data.data.ios || 0
                        );
                        this.datacollectionForMobile.datasets[0].data.push(
                            data.data.window || 0
                        );
                        this.datacollectionForMobile.datasets[0].data.push(
                            data.data.other || 0
                        );

                        // console.log("getUsageMobile data :", data.data);

                        for (var index in this.datacollectionForMobile
                            .datasets[0].data) {
                            // console.log(this.datacollectionForWeb.datasets[0].data[index]);
                            //하나라도 값이 있으면 true
                            if (
                                this.datacollectionForMobile.datasets[0].data[
                                    index
                                ] > 0
                            ) {
                                this.b_isData = true;
                            }
                        }

                        if (this.b_isData) {
                            this.renderChart(
                                this.datacollectionForMobile,
                                this.options
                            );
                        } else {
                            this.$emit("isnotmobiledata");
                        }
                    })
                    .catch(err => {
                        console.log("getUsageMobile Error ! ", err);
                        this.$emit("isnotmobiledata");
                    });
            }
        }
    };
</script>

<style></style>
