<template>
    <v-container fill-height fluid grid-list-xl md12 class="pt-0">
        <v-layout wrap md12>
            <v-col md12 class="pt-0">
                <v-row>
                    <v-flex xs12 md6 py-0>
                        <material-card
                            minHeight="316px"
                            color="purple"
                            title="Contact Information"
                            class="mb-0 mt-8"
                        >
                            <v-layout
                                wrap
                                class="justify-space-between align-content-space-between mx-auto pa-0"
                            >
                                <v-flex xs12 pa-0>
                                    <v-card-text
                                        class="justify-center text-left align-center h4 font-weight-bold"
                                    >
                                        Expire Date :
                                        {{
                                            this.userData.expireDate
                                        }}</v-card-text
                                    >
                                </v-flex>
                                <v-flex xs12 pa-0>
                                    <v-card-text
                                        class="justify-center text-left align-center h4 font-weight-bold"
                                    >
                                        Payment Plan :

                                        <v-chip
                                            v-if="this.userData.userName"
                                            color="primary"
                                            class="ml-2"
                                        >
                                            Premium
                                        </v-chip>
                                    </v-card-text>
                                </v-flex>

                                <v-flex xs12 pa-0>
                                    <v-card-text
                                        class="justify-center text-left align-center h4 font-weight-bold"
                                    >
                                        User :
                                        {{
                                            this.userData.userName
                                        }}</v-card-text
                                    >
                                </v-flex>
                            </v-layout>
                        </material-card>
                    </v-flex>
                    <v-flex xs12 md6 py-0>
                        <material-card
                            minHeight="316px"
                            color="blue"
                            title="API Key"
                            class="mb-0 mt-8"
                        >
                            <v-row>
                                <v-flex md12 class="align-center">
                                    <v-card-text class="mx-auto " xs12>
                                        <h3
                                            class="font-weight-bold text-center"
                                        >
                                            {{ this.userData.API_KEY }}
                                        </h3>
                                    </v-card-text>
                                </v-flex>
                                <v-flex md12 class="align-center">
                                    <v-layout>
                                        <v-spacer></v-spacer>
                                        <v-flex class="align-center">
                                            <v-btn
                                                medium
                                                class="blue fill-height align-center"
                                                @click="CopyKey()"
                                            >
                                                Copy</v-btn
                                            >
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-row>
                        </material-card>
                    </v-flex>
                </v-row>
                <v-row md12 class="pt-0">
                    <v-flex py-0>
                        <material-card
                            color="green"
                            title="API Lists"
                            class="mb-0"
                        >
                            <v-card-text class="mb-2">
                                To use FATOS Map API services or SDKs, you will
                                need a FATOS API Key which is a set of character
                                code to access all of services. API Key will be
                                used to associate API services for your account.
                                Below please find your current generated API
                                Key. You can create a new one by clicking
                                “RE-GENERATE KEY” and the existing one will be
                                terminated automatically.
                            </v-card-text>

                            <!-- :hide-default-footer="true" -->
                            <v-layout
                                class="wrap mx-auto justify-center align-center py-0"
                            >
                                <v-flex sm12 xs12 md10 lg10>
                                    <v-data-table
                                        :headers="headers"
                                        :items="userData.API_item"
                                        :calculate-widths="true"
                                        :dense="true"
                                        :hide-default-footer="true"
                                        class="wrap elevation-1 mx-auto mytable"
                                    >
                                        <template v-slot:item="column">
                                            <tr>
                                                <td
                                                    :class="headers[0].class"
                                                    width="150px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-card-text
                                                            class="justify-senter text-center"
                                                            xs12
                                                        >
                                                            {{
                                                                column.item
                                                                    .usage
                                                            }}
                                                        </v-card-text>
                                                    </v-layout>
                                                </td>
                                                <td
                                                    :class="headers[1].class"
                                                    width="100px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-icon
                                                            v-if="
                                                                column.item
                                                                    .mobile_map_SUBSCRIBE
                                                            "
                                                            class=""
                                                        >
                                                            mdi-check-bold
                                                        </v-icon>
                                                    </v-layout>
                                                </td>

                                                <td
                                                    :class="headers[1].class"
                                                    width="100px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-icon
                                                            v-if="
                                                                column.item
                                                                    .web_map_SUBSCRIBE
                                                            "
                                                            class=""
                                                        >
                                                            mdi-check-bold
                                                        </v-icon>
                                                    </v-layout>
                                                </td>
                                                <td
                                                    :class="headers[1].class"
                                                    width="100px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-icon
                                                            v-if="
                                                                column.item
                                                                    .search_SUBSCRIBE
                                                            "
                                                            class=""
                                                        >
                                                            mdi-check-bold
                                                        </v-icon>
                                                    </v-layout>
                                                </td>
                                                <td
                                                    :class="headers[1].class"
                                                    width="100px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-icon
                                                            v-if="
                                                                column.item
                                                                    .geofencing_SUBSCRIBE
                                                            "
                                                            class=""
                                                        >
                                                            mdi-check-bold
                                                        </v-icon>
                                                    </v-layout>
                                                </td>
                                                <td
                                                    :class="headers[1].class"
                                                    width="100px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-icon
                                                            v-if="
                                                                column.item
                                                                    .routing_SUBSCRIBE
                                                            "
                                                            class=""
                                                        >
                                                            mdi-check-bold
                                                        </v-icon>
                                                    </v-layout>
                                                </td>
                                                <td
                                                    :class="headers[1].class"
                                                    width="100px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-icon
                                                            v-if="
                                                                column.item
                                                                    .analyze_SUBSCRIBE
                                                            "
                                                            class=""
                                                        >
                                                            mdi-check-bold
                                                        </v-icon>
                                                    </v-layout>
                                                </td>
                                                <td
                                                    :class="headers[1].class"
                                                    width="100px"
                                                >
                                                    <v-layout justify-center>
                                                        <v-icon
                                                            v-if="
                                                                column.item
                                                                    .advanced_SUBSCRIBE
                                                            "
                                                            class=""
                                                        >
                                                            mdi-check-bold
                                                        </v-icon>
                                                    </v-layout>
                                                </td>
                                            </tr>
                                        </template>
                                    </v-data-table>
                                </v-flex>
                                <v-flex sm2 xs12 md2 lg2>
                                    <v-card-title>Available</v-card-title>
                                    <v-card-text>
                                        {{ this.userData.available }} / calls
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </material-card>
                    </v-flex>
                </v-row>
                <v-row> </v-row>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
    // import Archive from '@/contents/Archive';
    import config from "@/config";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    export default {
        beforeMount() {
            // console.log('password : ' + password);
            this.initialize();
        },

        mounted() {},

        created() {
            // 컴포넌트가 생성될 때, backend에 data 요청 샘플
            // this.$http.get('/sendMail')
            //     .then((response) => {
            //       console.log("response.data : " + response.data);
            //       // this.payload = response.data
            //     })
        },

        beforeCreate() {},

        name: "APIKey",
        components: {
            // Archive,
        },
        props: {
            //   source: String,
        },
        data: () => ({
            userData: {
                available: "100,000",
                userName: "FATOS",
                expireDate: "",
                API_item: {},
                API_KEY: ""
            },

            headers: [
                {
                    divider: true,
                    sortable: false,
                    text: "API type",
                    value: "usage",
                    align: "center",
                    class: "my-header"
                },
                {
                    divider: true,
                    sortable: false,
                    text: "Mobile Map",
                    value: "subscsribe",
                    align: "center",
                    class: "my-header"
                },
                {
                    divider: true,
                    sortable: false,
                    text: "Web Map",
                    value: "subscsribe",
                    align: "center",
                    class: "my-header"
                },
                {
                    divider: true,
                    sortable: false,
                    text: "Search",
                    value: "subscsribe",
                    align: "center",
                    class: "my-header"
                },
                {
                    divider: true,
                    sortable: false,
                    text: "Geofencing",
                    value: "subscsribe",
                    align: "center",
                    class: "my-header"
                },
                {
                    divider: true,

                    sortable: false,
                    text: "Routing",
                    value: "subscsribe",
                    align: "center",
                    class: "my-header"
                },
                {
                    divider: true,
                    sortable: false,
                    text: "Analyze",
                    value: "subscsribe",
                    align: "center",
                    class: "my-header"
                },
                {
                    sortable: false,
                    text: "Advanced Map",
                    value: "subscsribe",
                    align: "center",
                    class: "my-header"
                }
            ]
        }),
        methods: {
            Search: true,

            /** /console/getRegisteredKeybyUser
             * @bodyParam app_token : string
             * 
             * @returns
             *  {
                "result": "OK",
                "data": [
                    {
                        "id": "4o0MLT-spU1_ldR2gVrmh80tMhWlxzJ7Rj9mlRPWvj0",
                        "use": 1,
                        "create_date": "2020-02-24T07:41:12.674Z",
                        "email": "user@mail.com"
                    },
                    {
                        "id": "t1WMprO-NF-bh8_yE5bCANSrY1NxA_Kq-NCva3w1K4I",
                        "use": 0,
                        "create_date": "2020-02-24T07:17:37.691Z",
                        "email": "user@mail.com"
                    }
                ]
            }
             */

            getKeyInfo() {
                this.$http
                    .post(
                        `${config.requestHost}/console/getKeyInfo`,
                        {
                            app_token: this.$store.getters.getAppToken,
                            key: this.$store.getters.getKeyToken
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        // console.log("data :", data.data);
                        this.setServiceAvailable(data.data);
                    });
            },

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
                            //등록된 키가 없으면 하나 생성해야한다.

                            this.userData = {};
                        } else {
                            this.userData.API_KEY =
                                data.data[data.data.length - 1].id || "";
                            this.userData.expireDate =
                                data.data[data.data.length - 1].expireDate ||
                                "unlimited";

                            this.$http
                                .post(
                                    `${config.requestHost}/console/getKeyInfo`,
                                    {
                                        app_token: this.$store.getters
                                            .getAppToken,
                                        key: this.userData.API_KEY
                                    },
                                    `${myHeaders}`
                                )
                                .then(({ data }) => {
                                    // console.log("data :", data.data);
                                    this.setServiceAvailable(data.data);
                                });
                            //TODO 유저데이터 세팅
                        }

                        // this.$store
                        //     .dispatch("LOGIN", {
                        //         appToken: app_token,
                        //         refToken: ref_token
                        //     })
                        //     .then(() => {})
                        //     .catch(({ message }) => (this.msg = message));
                    })
                    .catch(error => {
                        // this.$emit(
                        //     "snack-event",
                        //     "error",
                        //     "Login Failed Check Your Email or Password"
                        // );
                        console.error("getRegistredKeybyUser err", error);
                    });
            },

            /**
             * 
             *  mobile_map_SUBSCRIBE: true,
             *  web_map_SUBSCRIBE: true,
                search_SUBSCRIBE: true,
                geofencing_SUBSCRIBE: false,
                routing_SUBSCRIBE: true,
                analyze_SUBSCRIBE: true,
                advanced_SUBSCRIBE: false
            */
            //키리스트 service_id 조회해서 사용가능 여부 체크
            setServiceAvailable(keyList) {
                for (let item of keyList) {
                    let service_id = item.service_id || "";

                    switch (service_id) {
                        case "1":
                            {
                                //webmap
                                this.userData.API_item[0].web_map_SUBSCRIBE = true;
                            }
                            break;
                        case "2":
                            {
                                //mobileMap
                                this.userData.API_item[0].mobile_map_SUBSCRIBE = true;
                            }
                            break;
                        case "4":
                            {
                                //RP
                                this.userData.API_item[0].routing_SUBSCRIBE = true;
                            }
                            break;
                        case "6":
                            {
                                //search
                                this.userData.API_item[0].search_SUBSCRIBE = true;
                            }
                            break;
                        case "9":
                            {
                                //geofencing
                                this.userData.API_item[0].geofencing_SUBSCRIBE = true;
                            }
                            break;
                        case "200":
                            {
                                //analyze
                                this.userData.API_item[0].analyze_SUBSCRIBE = true;
                            }
                            break;
                        case "11":
                            {
                                //adas
                                this.userData.API_item[0].advanced_SUBSCRIBE = true;
                            }
                            break;
                    }
                }
                // console.log(this.userData.API_item[0]);
                this.$emit("loading-event", false);
            },

            /**
             *
             *  1: Web Map
             *  2: Mobile Map
             *  3: Map Download
             *  4: RP
             *  5: RP Truck
             *  6: Search POI
             *  7: Forward Geocoding
             *  8: Reverse Geocoding
             *  9: Geofencing
             *  10 : MM
             *  11 : ADAS
             *  12 : Fleet
             *  1001 : Tracker
             *  1002 : Tracker
             *  1003 : Tracker
             *  1004 : Tracker
             *  100 : Tracking
             *  200 : Analyze
             *
             *
             *  표출항목
             *
             */

            //유저한테 등록된 키가 없을때 레이아웃 변경
            UserhasNotKey() {},

            initialize() {
                //샘플 페이지 데이터
                this.$emit("loading-event", true);
                this.userData.API_item = [
                    {
                        usage: "Usage status",

                        mobile_map_SUBSCRIBE: false,
                        web_map_SUBSCRIBE: false,
                        search_SUBSCRIBE: true,
                        geofencing_SUBSCRIBE: false,
                        routing_SUBSCRIBE: false,
                        analyze_SUBSCRIBE: false,
                        advanced_SUBSCRIBE: false
                    }
                ];
                // 로그인 이후에 얻어와서 관리하도록
                this.getRegisteredKeyByUser();
            },
            CopyKey() {
                try {
                    var dummy = document.createElement("textarea");
                    document.body.appendChild(dummy);

                    dummy.value = this.userData.API_KEY;
                    dummy.select();
                    document.execCommand("copy");
                    document.body.removeChild(dummy);

                    this.$emit("snack-event", "info", "copy success");
                } catch (err) {
                    console.error("copy failed: " + err);
                }
            },

            RegenKey: async function() {
                // console.log("Re-gen Key");

                const res = await this.$dialog.confirm({
                    title: "Regenerate key",
                    text:
                        // "Do you really want to Regenerate Key? Existing keys are deleted",
                        "Do you really want to Regenerate Key? Existing keys are deleted",
                    icon: "warning"
                });

                if (!res) return;
                else {
                    //regen key
                }

                // this.$dialog.notify.error("Error!", {
                //     position: "bottom-right"
                // });
            }
        }
    };
</script>

<style scoped>
    #keep .v-navigation-drawer__border {
        display: none;
    }

    .center {
        text-align: center;
    }

    .contents {
        background-color: yellow;
    }

    .my-header:not(:last-child) {
        border-right: 1px solid #dddddd;
    }
    .my-header :last-child {
        border-right: 0px;
    }
</style>
