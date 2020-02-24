<template>
    <v-container fill-height fluid grid-list-xl md12 class="pt-0">
        <v-layout wrap md12>
            <v-col md12 class="pt-0">
                <v-row>
                    <v-flex xs12 md6 py-0>
                        <material-card
                            minHeight="300px"
                            color="purple"
                            title="Contact Information"
                            class="mb-0 mt-8"
                        >
                            <v-form>
                                <v-container py-0>
                                    <v-layout
                                        wrap
                                        class="justify-space-between align-content-space-between mx-auto pa-0"
                                    >
                                        <v-flex xs12 pa-0>
                                            <v-card-text
                                                class="justify-center text-left align-center h4 font-weight-bold"
                                            >
                                                Contact Period :
                                                {{
                                                    this.userData.contactPeriod
                                                }}</v-card-text
                                            >
                                        </v-flex>
                                        <v-flex xs12 pa-0>
                                            <v-card-text
                                                class="justify-center text-left align-center h4 font-weight-bold"
                                            >
                                                Payment Plan :

                                                <v-chip
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
                                                {{ this.userData.userName }}</v-card-text
                                            >
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </material-card>
                    </v-flex>
                    <v-flex xs12 md6 py-0>
                        <material-card
                            minHeight="300px"
                            color="blue"
                            title="API Key"
                            class="mb-0 mt-8"
                        >
                            <v-row>
                                <v-flex>
                                    <v-card-text class="mx-auto" xs12>
                                        {{ this.userData.API_KEY }}
                                    </v-card-text>
                                </v-flex>
                                <v-flex class="align-center">
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

                                        <v-flex class="align-center">
                                            <v-btn
                                                medium
                                                class="green fill-height align-center"
                                                @click="RegenKey()"
                                            >
                                                RE-GENERATE KEY</v-btn
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
                                        :items="API_item"
                                        :calculate-widths="true"
                                        :dense="true"
                                        :hide-default-footer="true"
                                        class="wrap elevation-1 mb-0 py-2 mx-auto"
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
                                                                    .map_SUBSCRIBE
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
        },

        mounted() {},

        created() {
            this.initialize();

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
                contactPeriod: "2020-02-20 ~ 2021-02-19",
                API_item: {},
                API_KEY:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiYmV0YW1hcHMuZmF0b3MuYml6IiwiZW1haWwiOiJnaGRsZGlkMTJAZ21haWwuY29tIiwiaWF0IjoxNTgyMjU3Mzg4LCJleHAiOjE1ODIyNTc5ODh9.c3LtspfY9YdzjEZxhbWExgPOgU9-jZUH6RX8m3S1CRE"
            },

            headers: [
                {
                    divider: true,
                    sortable: false,
                    text: "API type",
                    value: "usage",
                    class:
                        "background-yellow justify-center align-center v-card-text",
                    align: "center"
                },
                {
                    sortable: false,
                    text: "Map",
                    value: "subscsribe",
                    align: "center"
                },
                {
                    sortable: false,
                    text: "Search",
                    value: "subscsribe",
                    align: "center"
                },
                {
                    sortable: false,
                    text: "Geofencing",
                    value: "subscsribe",
                    align: "center"
                    // class:"hidden-md-and-down"
                },
                {
                    sortable: false,
                    text: "Routing",
                    value: "subscsribe",
                    align: "center"
                    // class:"hidden-md-and-down"
                },
                {
                    sortable: false,
                    text: "Analyze",
                    value: "subscsribe",
                    align: "center"
                    // class:"hidden-md-and-down"
                },
                {
                    sortable: false,
                    text: "Advanced Map",
                    value: "subscsribe",
                    align: "center"
                    // class:"hidden-md-and-down"
                }
            ]
        }),
        methods: {
            Search: true,

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
                        console.log(
                            "recieved getRegisteredKeybyUser data : ",
                            data.data.length
                        );
                        if (data.data.length == 0) {

                            this.userData = {};

                        }else{
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

            //유저한테 등록된 키가 없을때 레이아웃 변경
            UserhasNotKey() {},

            initialize() {
                //샘플 페이지 데이터
                this.userData.API_item = [
                    {
                        usage: "Usage status",
                        map_SUBSCRIBE: true,
                        search_SUBSCRIBE: true,
                        geofencing_SUBSCRIBE: false,
                        routing_SUBSCRIBE: true,
                        analyze_SUBSCRIBE: true,
                        advanced_SUBSCRIBE: false
                    }
                ];

                this.getRegisteredKeyByUser();
            },
            CopyKey() {
                try {
                    var dummy = document.createElement("textarea");
                    document.body.appendChild(dummy);

                    dummy.value = this.API_KEY;
                    dummy.select();
                    document.execCommand("copy");
                    document.body.removeChild(dummy);

                    this.$emit("snack-event", "info", "copy success");
                } catch (err) {
                    console.error("copy failed: " + err);
                }
            },

            RegenKey: async function() {
                console.log("Re-gen Key");

                const res = await this.$dialog.confirm({
                    title: "Regenerate key",
                    text:
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

<style>
    #keep .v-navigation-drawer__border {
        display: none;
    }

    .center {
        text-align: center;
    }

    .contents {
        background-color: yellow;
    }

    .background-yellow {
        border-right: 1px solid #dddddd;
    }
    /* table th + th {
        border-left: 1px solid #dddddd;
    }

    table td + td {
        border-left: 1px solid #dddddd;
    } */
</style>
