<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                    color="green"
                    title="API Lists"
                    text="Here is your list of FATOS API"
                >
                    <!-- :hide-default-footer="true" -->
                    <v-data-table
                        :headers="headers"
                        :items="API_item"
                        :calculate-widths="true"
                        :dense="true"
                        class="elevation-1"
                    >
                        <template v-slot:item="row">
                            <tr>
                                <td class="font-weight-bold">
                                    {{ row.item.api_name }}
                                </td>
                                <td :class="headers[1].class">
                                    {{ row.item.key }}
                                </td>
                                <td :class="headers[2].class">
                                    <v-btn
                                        medium
                                        class="blue fill-height"
                                        @click="CopyKey(row.item)"
                                    >
                                        Copy</v-btn
                                    >

                                    <v-btn
                                        medium
                                        class="green fill-height"
                                        @click="RegenKey(row.item)"
                                    >
                                        Re-Gen Key</v-btn
                                    >
                                </td>
                            </tr>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="primary" @click="initialize"
                                >Reset</v-btn
                            >
                        </template>
                    </v-data-table>
                </material-card>
            </v-flex>
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
            API_item: [],
            headers: [
                {
                    sortable: false,
                    text: "API Name",
                    value: "api_name"
                },
                {
                    sortable: false,
                    text: "Key",
                    value: "key"
                    // class:"hidden-md-and-down"
                },
                {
                    sortable: false,
                    text: "",
                    value: "buttons"
                    // class:"hidden-md-and-down"
                }
            ],
            items: [
                {
                    api_name: "Route API",
                    key:
                        "(OZTye6sGzMcN)JSXXtnXnaYIX904XeQyH9KQFGaKffeMJUKnoaYtMGpXDGG2HU6VX4LfE5BHlQjjuXtnXnaB"
                },
                {
                    api_name: "Map Control API",
                    key:
                        "YIX904XeQyH9KQFGaKffeMJUKnoaYtMGpXDGG2HU6VX4LfE5BH(OZTye6sGzMcN)JSXXtnXnaBGLylhlQjjuP"
                }
            ]
        }),
        methods: {
            initialize() {
                this.API_item = [
                    {
                        api_name: "Maps API",
                        key:
                            "(OZTye6sGzMcN)JSXXtnXnaYIX904XeQyH9KQFGaKffeMJUKnoaYtMGpXDGG2HU6VX4LfE5BHlQj1qa1a"
                    },
                    {
                        api_name: "Geocoding API",
                        key:
                            "feMJUKnoaYtMGpXDGffeMJUKnoaYtMGpXDGG2HU6VfeMJUKnoaYtMGpXDGOZTye6sGzMcN)JSXua23"
                    },
                    {
                        api_name: "Routing API",
                        key:
                            "tMGItMGtMGX904UKnoaYtMGpH(OZTXDGG2HUeQX904yH9KQFGaKffeMJUKnoylhlQjH(OZTjuPGz2da2"
                    },
                    {
                        api_name: "Vehicle Tracking API",
                        key:
                            "JSXXtnXnaBGLylhlQjjuPFKAxdSD6VX4LfE5BH(1Tzbvy9dXf2H9KQFGaKffeMJUKBHlQjjuXtFGaDAFF1aa"
                    },
                    {
                        api_name: "Mobilizing API",
                        key:
                            "YIX904XeQyH9KQFGaKffeMJUKnoaYtMGpXDGG2HU6VX4LfE5BH(OZTye6sGzMcN)JSXXtnXnaBGLylde"
                    }
                ];
            },
            CopyKey(item) {
                // console.log(item.key);
                // let testingCodeToCopy = document.querySelector("#testing-code");
                // testingCodeToCopy.setAttribute("type", "text");
                // testingCodeToCopy.select();

                try {
                    var dummy = document.createElement("textarea");
                    document.body.appendChild(dummy);

                    dummy.value = item.key;
                    dummy.select();
                    document.execCommand("copy");
                    document.body.removeChild(dummy);
                    // var msg = successful ? "successful" : "unsuccessful";
                    // console.log("code was copied : " + msg);
                } catch (err) {
                    console.error("copy failed: " + err);
                }

                /* unselect the range */
                // testingCodeToCopy.setAttribute("type", "hidden");
                // window.getSelection().removeAllRanges();
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

    .contents {
        background-color: blue;
    }
</style>
