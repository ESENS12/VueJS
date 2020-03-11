// <script>
//     import { HorizontalBar } from "vue-chartjs";
//     // const { reactiveProp } = mixins
//     import config from "@/config";

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     export default {
//         extends: HorizontalBar,
//         //   mixins: [reactiveProp],
//         props: {
//             chartdata: {
//                 type: Object,
//                 default: null
//             },

//             options: {
//                 type: Object,
//                 default: null
//             },

//             selectedKey: null,
//             start_date: null,
//             end_date: null
//         },

//         data: () => ({
//             option: {
//                 fill: false,
//                 responsive: false
//             },
//             total_service_data: {
//                 labels: [],
//                 datasets: []
//             },
//             b_isData: false,
//             start_date: "",
//             end_date: ""
//         }),

//         beforeMount() {
//             this.getUsageServiceType();
//         },

//         mounted() {
//             console.log(
//                 "top service usage mounted! : ",
//                 this.total_service_data
//             );
//             //this.renderChart(this.chartdata, this.option);
//         },

//         watch: {
//             start_date() {
//                 this.getUsageServiceType();
//             },
//             end_date() {
//                 this.getUsageServiceType();
//             },

//             selectedKey() {
//                 // console.log("selectedKey changed[line chart]");
//                 this.getUsageServiceType();
//             },

//             chartdata() {
//                 // console.log(to,from);
//                 this.renderChart(this.chartdata, this.options);
//             }
//         },

//         methods: {
//             /** /console/getUsageServiceType
//              * @pathParam end_date : string
//              * @pathParam start_date : string
//              * @pathParam app_token : string
//              * @pathParam date_type : number    //0:일별, 1:월별, 2:년
//              * @pathParam key : string
//              *
//              * @returns
//                 {
//                     "result": "OK",
//                     "data": [
//                         {
//                             "date": "2020-02-25",
//                             "sum": "11392",
//                             "service_id": "1"
//                         },
//                         {
//                             "date": "2020-02-26",
//                             "sum": "350",
//                             "service_id": "1"
//                         }
//                     ]
//                 }
//              */

//             getUsageServiceType() {
//                 // console.log(
//                 //     "getUsageService Type[top data] : ",
//                 //     this.selectedKey
//                 // );
//                 //기존 데이터 초기화
//                 this.total_service_data.labels = [];
//                 this.total_service_data.datasets = [];
//                 this.b_isData = false;

//                 // console.log(
//                 //     "getUsageServiceType date_type : ",
//                 //     this.usageServiceType
//                 // );

//                 this.$http
//                     .get(
//                         `${config.requestHost}/console/getUsageServiceType?date_type=2&end_date=${this.end_date}&start_date=${this.start_date}&app_token=${this.$store.getters.getAppToken}&key=${this.$store.getters.getKeyToken}`,
//                         `${myHeaders}`
//                     )
//                     .then(({ data }) => {
//                         try {
//                             // console.log(
//                             //     "getUsageServiceType Data[pure] : ",
//                             //     data
//                             // );

//                             // TopServiceData: {
//                             //                 //Data to be represented on x-axis
//                             //                 labels: ["MAP", "Search", "Routing", "Analyze", "Advanced Map"],
//                             //                 datasets: [
//                             //                     {
//                             //                         label: "Total",
//                             //                         backgroundColor: "#f87979",
//                             //                         pointBackgroundColor: "white",
//                             //                         fill: false,
//                             //                         showLine: true,
//                             //                         //Data to be represented on y-axis
//                             //                         data: [10, 23423, 10, 10, 10]
//                             //                     }
//                             //                 ]
//                             //             },
//                             let return_data = {
//                                 result: "OK",
//                                 data: [
//                                     {
//                                         date: "2020-02-28",
//                                         sum: "378",
//                                         service_id: "4"
//                                     },
//                                     {
//                                         date: "2020-02-29",
//                                         sum: "2",
//                                         service_id: "4"
//                                     },
//                                     {
//                                         date: "2020-03-01",
//                                         sum: "12",
//                                         service_id: "2"
//                                     },
//                                     {
//                                         date: "2020-02-29",
//                                         sum: "24",
//                                         service_id: "2"
//                                     },
//                                     {
//                                         date: "2020-02-28",
//                                         sum: "100",
//                                         service_id: "5"
//                                     },
//                                     {
//                                         date: "2020-02-29",
//                                         sum: "200",
//                                         service_id: "5"
//                                     }
//                                 ]
//                             };

//                             return_data = data;
//                             // console.log("getUsageServiceType data :", return_data);

//                             let service_ids = [];

//                             //서비스 아이디 인덱스 배열 생성
//                             service_ids = return_data.data.map(
//                                 x => x.service_id
//                             );

//                             //중복제거
//                             service_ids = Array.from(new Set(service_ids));
//                             console.log("service_ids : ", service_ids);

//                             //서비스별로 데이터 묶음
//                             let dataset = {};
//                             let mydata = [];

//                             for (let i in service_ids) {
//                                 let res = return_data.data.filter(it =>
//                                     it.service_id.includes(service_ids[i])
//                                 );
//                                 console.log("res : ", res);

//                                 try {
//                                     mydata.push(res[0].sum);
//                                 } catch {
//                                     mydata.push(0);
//                                 }
//                                 try {
//                                     // TopServiceData: {
//                                     //                 //Data to be represented on x-axis
//                                     //                 labels: ["MAP", "Search", "Routing", "Analyze", "Advanced Map"],
//                                     //                 datasets: [
//                                     //                     {
//                                     //                         label: "Total",
//                                     //                         backgroundColor: "#f87979",
//                                     //                         pointBackgroundColor: "white",
//                                     //                         fill: false,
//                                     //                         showLine: true,
//                                     //                         //Data to be represented on y-axis
//                                     //                         data: [10, 23423, 10, 10, 10]
//                                     //                     }
//                                     //                 ]
//                                     //             },
//                                     this.total_service_data.labels.push(
//                                         this.getServicelabel(
//                                             parseInt(res[0].service_id)
//                                         )
//                                     );
//                                 } catch {
//                                     // console.log("해당데이터 없음");
//                                 }

//                                 // console.log("dataset: ", dataset);

//                                 this.total_service_data.datasets.push(dataset);
//                                 console.log(
//                                     "final data : ",
//                                     this.total_service_data
//                                 );
//                             }

//                             (dataset.label = "Total"),
//                                 (dataset.pointBackgroundColor = "white"),
//                                 (dataset.fill = false),
//                                 (dataset.backgroundColor = this.getLineColor(
//                                     parseInt(i)
//                                 )),
//                                 (dataset.showLine = true),
//                                 (dataset.data = mydata);
//                             if (this.total_service_data.datasets.length > 0) {
//                                 this.renderChart(
//                                     this.total_service_data,
//                                     this.options
//                                 );
//                             } else {
//                                 this.$emit("isnottopdata");
//                             }
//                         } catch {
//                             this.$emit("isnottopdata");
//                         }
//                     });
//             },

//             getLineColor(index) {
//                 var color = "";
//                 // console.log("getLineColor : ", index);
//                 switch (index) {
//                     case 0:
//                         {
//                             color = "#3e8787";
//                         }
//                         break;

//                     case 1:
//                         {
//                             color = "#4d089a";
//                         }
//                         break;

//                     case 2:
//                         {
//                             color = "#323edd";
//                         }
//                         break;

//                     case 3:
//                         {
//                             color = "#dc2ade";
//                         }
//                         break;

//                     case 4:
//                         {
//                             color = "#e8f044";
//                         }
//                         break;

//                     case 5:
//                         {
//                             color = "#216353";
//                         }
//                         break;

//                     case 6:
//                         {
//                             color = "#7a4d1d";
//                         }
//                         break;

//                     case 7:
//                         {
//                             color = "#ed6663";
//                         }
//                         break;

//                     case 8:
//                         {
//                             color = "#4f3961";
//                         }
//                         break;
//                 }
//                 // console.log("color : ", color);
//                 return color;
//             },

//             getServicelabel(id) {
//                 // console.log("getServiceLabel : ", id);
//                 let servicelabel = "";
//                 switch (id) {
//                     case 1:
//                         {
//                             servicelabel = "Web Map";
//                         }
//                         break;
//                     case 2:
//                         {
//                             servicelabel = "Mobile Map";
//                         }
//                         break;
//                     case 3:
//                         {
//                             servicelabel = "Map download";
//                         }
//                         break;
//                     case 4:
//                         {
//                             servicelabel = "RP";
//                         }
//                         break;
//                     case 5:
//                         {
//                             servicelabel = "RP truck";
//                         }
//                         break;
//                     case 6:
//                         {
//                             servicelabel = "Search";
//                         }
//                         break;
//                     case 7:
//                         {
//                             servicelabel = "forward Geocoding";
//                         }
//                         break;
//                     case 8:
//                         {
//                             servicelabel = "reverse Geocoding";
//                         }
//                         break;
//                     case 9:
//                         {
//                             servicelabel = "Geofencing";
//                         }
//                         break;
//                     case 10:
//                         {
//                             servicelabel = "MM";
//                         }
//                         break;
//                     case 11:
//                         {
//                             servicelabel = "ADAS";
//                         }
//                         break;

//                     case 12:
//                         {
//                             servicelabel = "Fleet";
//                         }
//                         break;
//                     case 1001:
//                         {
//                             servicelabel = "Tracker";
//                         }
//                         break;
//                     case 1002:
//                         {
//                             servicelabel = "Tracker";
//                         }
//                         break;
//                     case 1003:
//                         {
//                             servicelabel = "Tracker";
//                         }
//                         break;
//                     case 1004:
//                         {
//                             servicelabel = "Tracker";
//                         }
//                         break;
//                     case 100:
//                         {
//                             servicelabel = "Tracking";
//                         }
//                         break;

//                     case 200:
//                         {
//                             servicelabel = "Analyze";
//                         }
//                         break;
//                 }
//                 return servicelabel;
//             }
//         }
//     };
// </script>

// <style></style>
