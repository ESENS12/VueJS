<template>
    <v-container fill-height fluid grid-list-xl md12 class="pt-0">
        <v-layout wrap md12>
            <v-col md12 class="pt-0">
                <v-row>
                    <v-flex md12 py-0>
                        <material-card
                            color="purple"
                            title="Contact Information"
                            class="mb-0 mt-8"
                        >
                            <v-form>
                                <v-container py-0>
                                    <v-layout
                                        wrap
                                        class="justify-space-between align-content-space-between mx-auto "
                                    >
                                        <v-flex class="full-height">
                                            <v-layout>
                                                <v-flex xs12 pa-0>
                                                    <v-card-text
                                                        class="justify-center text-left align-center h4 font-weight-bold"
                                                    >
                                                        Contact Period :
                                                        {{
                                                            this.contactPeriod
                                                        }}</v-card-text
                                                    >
                                                </v-flex>
                                                <v-flex xs12 pa-0>
                                                    <v-card-text
                                                        class="justify-center align-center text-right h4 font-weight-bold"
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
                                            </v-layout>

                                            <v-layout>
                                                <v-flex xs12 pa-0>
                                                    <v-card-text
                                                        class="justify-center text-left align-center h4 font-weight-bold"
                                                    >
                                                        User :
                                                        {{
                                                            this.userName
                                                        }}</v-card-text
                                                    >
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
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
                            <v-data-table
                                :headers="headers"
                                :items="API_item"
                                :calculate-widths="true"
                                :dense="true"
                                :hide-default-footer="true"
                                class="elevation-1 mx-auto"
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
                                                    {{ column.item.usage }}
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
                            <v-flex class="wrap justify-end align-content-end mt-2">
                                <v-layout>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        medium
                                        class="green fill-height justify-end align-end"
                                        @click="RegenKey()"
                                    >
                                        RE-GENERATE KEY</v-btn
                                    >
                                </v-layout>
                            </v-flex>
                        </material-card>
                    </v-flex>
                </v-row>
                <v-row>
                    <v-flex md12 py-0>
                        <material-card
                            color="blue"
                            title="API Key"
                            class="mb-0"
                        >
                            <v-col>
                                <v-row
                                    class="mx-auto justify-space-between text-md-center "
                                >
                                <v-layout>
                                    <v-flex>
                                        <v-card-text class="mx-auto" xs12>
                                            {{ this.API_KEY }}
                                        </v-card-text>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                    <v-flex class="wrap align-content-end justify-end">
                                        <v-btn
                                            medium
                                            class="blue fill-height justify-end align-end"
                                            @click="CopyKey()"
                                        >
                                            Copy</v-btn
                                        >
                                    </v-flex>
                                    </v-layout>
                                </v-row>
                            </v-col>
                        </material-card>
                    </v-flex>
                </v-row>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
    // import Archive from '@/contents/Archive';

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
            userName: "FATOS",
            contactPeriod: "2020-02-20 ~ 2021-02-19",
            API_item: {},
            API_KEY:
                "(OZTye6sGzMcN)JSXXtnXnaYIX904XeQyH9KQFGaKffeMJUKnoaYtMGpXDGG2HU6VX4LfE5BHlQjjuXtnXnaB",
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

            initialize() {
                this.API_item = [
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
            RegenKey() {
                console.log("Re-gen Key");
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
    table th + th {
        border-left: 1px solid #dddddd;
    }

    table td + td {
        border-left: 1px solid #dddddd;
    }
</style>
