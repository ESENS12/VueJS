<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-title class="mx-auto">
                        <span class="title">Add new</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        v-model="ModalData.content"
                                        v-bind:label="ModalData.description"
                                        v-bind:hint="ModalData.hint"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDialog()"
                            >Close</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="saveDialog()"
                            >Save</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-flex sm12 lg9 md9>
                <material-card color="purple" title="Domain Name">
                    <v-row class="mx-auto">
                        <v-flex sm4 lg4 md4>
                            <h3>DOMAIN NAME</h3>
                            <h12>
                                Please define domain name of your websites for
                                development with Java Script API. In case of
                                multiple subdomains, you can define domain name
                                as wildcard DNS format such as *.domain.com</h12
                            >
                        </v-flex>

                        <v-flex sm8 lg8 md8>
                            <v-layout class="justify-end">
                                <v-data-table
                                    :headers="headers"
                                    :items="API_item"
                                    :calculate-widths="true"
                                    :dense="true"
                                    class="elevation-1 mb-0"
                                    :hide-default-header="true"
                                >
                                    <template v-slot:item="row">
                                        <tr>
                                            <td class="font-weight-bold">
                                                {{ row.item.api_name }}
                                            </td>
                                            <td class="justify-center">
                                                {{ row.item.key }}
                                            </td>
                                            <td class="justify-center">
                                                <v-btn
                                                    medium
                                                    class="red fill-height justify-end align-end"
                                                    @click="
                                                        removeDomain(row.item)
                                                    "
                                                >
                                                    DELETE</v-btn
                                                >
                                            </td>
                                        </tr>
                                    </template>
                                </v-data-table>
                            </v-layout>
                        </v-flex>
                    </v-row>
                    <v-layout>
                        <v-flex class="pb-0 pt-0">
                            <v-card-actions class="pa-0 mx-auto justify-end">
                                <v-btn @click="openDialog(0)" color="purple">
                                    Add New
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </material-card>

                <material-card color="grey" title="IP Adress">
                    <v-row class="mx-auto">
                        <v-flex sm4 lg4 md4>
                            <h3>IP ADDRESS</h3>
                            <h12
                                >Please define Public IP Address of your
                                Application Server for Web Service API
                                development. To check your application server’s
                                public IP, please browse to whatsmyip.org from
                                desktop console on your application server.</h12
                            >
                        </v-flex>

                        <v-flex sm8 lg8 md8>
                            <v-layout class="justify-end">
                                <v-data-table
                                    :headers="headers"
                                    :items="IP_item"
                                    :calculate-widths="true"
                                    :dense="true"
                                    class="elevation-1 mb-0"
                                    :hide-default-header="true"
                                >
                                    <template v-slot:item="row">
                                        <tr>
                                            <td class="font-weight-bold">
                                                {{ row.item.api_name }}
                                            </td>

                                            <td class="justify-center">
                                                {{ row.item.key }}
                                            </td>

                                            <td class="justify-center">
                                                <v-btn
                                                    medium
                                                    class="red fill-height justify-end align-end"
                                                    @click="removeIp(row.item)"
                                                >
                                                    DELETE</v-btn
                                                >
                                            </td>
                                        </tr>
                                    </template>
                                </v-data-table>
                            </v-layout>
                        </v-flex>
                    </v-row>
                    <v-layout>
                        <v-flex class="pb-0 pt-0">
                            <v-card-actions class="pa-0 mx-auto justify-end">
                                <v-btn @click="openDialog(1)" color="grey">
                                    Add New
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </material-card>

                <material-card color="blue" title="Bundle ID">
                    <v-row class="mx-auto">
                        <v-flex sm4 lg4 md4>
                            <h3>APP BUNDLE ID</h3>
                            <h12
                                >In order to develop mobile native app with
                                FATOS SDK, please define Bundle ID of iOS
                                application and Google Play Package Name of
                                Android application.</h12
                            >
                        </v-flex>
                        <v-flex sm8 lg8 md8>
                            <v-layout class="justify-end">
                                <v-data-table
                                    :headers="headers"
                                    :items="Bundle_item"
                                    :calculate-widths="true"
                                    :dense="true"
                                    class="elevation-1 mb-0"
                                    :hide-default-header="true"
                                >
                                    <template v-slot:item="row">
                                        <tr>
                                            <td class="font-weight-bold">
                                                {{ row.item.api_name }}
                                            </td>
                                            <td class="justify-center">
                                                {{ row.item.key }}
                                            </td>

                                            <td class="justify-center">
                                                <v-btn
                                                    medium
                                                    class="red fill-height justify-end align-end"
                                                    @click="
                                                        removeBundle(row.item)
                                                    "
                                                >
                                                    DELETE</v-btn
                                                >
                                            </td>
                                        </tr>
                                    </template>
                                </v-data-table>
                            </v-layout>
                        </v-flex>
                    </v-row>
                    <v-layout>
                        <v-flex class="pb-0 pt-0">
                            <v-card-actions class="pa-0 mx-auto justify-end">
                                <v-btn @click="openDialog(2)" color="blue">
                                    Add New
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
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

        name: "Security",
        components: {
            // Archive,
        },
        props: {
            //   source: String,
        },
        data: () => ({
            API_item: [],
            IP_item: [],
            Bundle_item: [],
            dialog: false,
            ModalData: {
                hint: "",
                description: "",
                modalType: 0,
                content: ""
            },
            headers: [
                {
                    sortable: false,
                    text: "Domain Name",
                    value: "api_name"
                },
                {
                    sortable: false,
                    text: "URL",
                    value: "key",
                    class: "key"
                },
                {
                    sortable: false,
                    text: "",
                    value: "buttons",
                    class: "mydiv"
                }
            ],
            items: [
                {
                    key:
                        "(OZTye6sGzMcN)JSXXtnXnaYIX904XeQyH9KQFGaKffeMJUKnoaYtMGpXDGG2HU6VX4LfE5BHlQjjuXtnXnaB"
                },
                {
                    key:
                        "YIX904XeQyH9KQFGaKffeMJUKnoaYtMGpXDGG2HU6VX4LfE5BH(OZTye6sGzMcN)JSXXtnXnaBGLylhlQjjuP"
                }
            ]
        }),
        methods: {
            initialize() {
                this.API_item = [
                    {
                        key: "fatosroute.southeastasia.cloudapp.azure.com"
                    },
                    {
                        key: "fatostile.southeastasia.cloudapp.azure.com"
                    },
                    {
                        key: "fatostileapac.southeastasia.cloudapp.azure.com"
                    },
                    {
                        key: "fatosmap.southeastasia.cloudapp.azure.com"
                    },
                    {
                        key: "fatostracker.southeastasia.cloudapp.azure.com"
                    }
                ];

                this.IP_item = [
                    {
                        key: "40.119.205.206"
                    },
                    {
                        key: "52.163.200.90"
                    },
                    {
                        key: "13.76.4.241"
                    }
                ];

                this.Bundle_item = [
                    {
                        key: "fatos.co.kr.fatosdemo"
                    },
                    {
                        key: "kr.fatos.tnavi"
                    },
                    {
                        key: "kr.fatos.tnavi.cdg"
                    },
                    {
                        key: "com.nostra.s.nostraapi"
                    },
                    {
                        key: "developers.fatos.biz"
                    }
                ];
            },

            removeDomain(item) {
                console.log(
                    "removeDomain" +
                        this.API_item.splice(this.API_item.indexOf(item), 1)
                );
            },

            removeIp(item) {
                console.log(
                    "removeIp" +
                        this.IP_item.splice(this.IP_item.indexOf(item), 1)
                );
            },

            removeBundle(item) {
                console.log(
                    "remove bundle" +
                        this.Bundle_item.splice(
                            this.Bundle_item.indexOf(item),
                            1
                        )
                );
            },

            openDialog(itemIndex) {
                // console.log("openDialog! :" + itemIndex);

                switch (itemIndex) {
                    case 0:
                        {
                            //Domain Name

                            this.ModalData.hint = "e.g) onemap.fatos.biz";
                            this.ModalData.description = "Put Your Domain Name";
                            this.ModalData.modalType = 0;
                        }
                        break;
                    case 1:
                        {
                            //IP Address
                            this.ModalData.hint = "e.g) 192.168.0.1";
                            this.ModalData.description =
                                "Put Your Application Server Public IP Address";
                            this.ModalData.modalType = 1;
                        }
                        break;
                    case 2:
                        {
                            //Bundle ID
                            this.ModalData.hint = "e.g) biz.fatos.onemap";
                            this.ModalData.description =
                                "Put Your App Bundle ID";
                            this.ModalData.modalType = 2;
                        }
                        break;
                }

                this.dialog = true;
            },

            saveDialog(hint, description, modalType) {
                console.log("content :" + this.ModalData.content);
                switch (modalType) {
                    case 0:
                        {
                            //Domain Name
                            // this.ModalData.hint = "e.g) onemap.fatos.biz";
                            // this.ModalData.description = "Put Your Domain Name"
                            // this.ModalData.modalType = 0;
                        }
                        break;
                    case 1:
                        {
                            //IP Address
                            // this.ModalData.hint = "e.g) 192.168.0.1";
                            // this.ModalData.description = "Put Your Application Server Public IP Address"
                            // this.ModalData.modalType = 1;
                        }
                        break;
                    case 2:
                        {
                            //Bundle ID
                            // this.ModalData.hint = "e.g) biz.fatos.onemap";
                            // this.ModalData.description = "Put Your App Bundle ID"
                            // this.ModalData.modalType = 2;
                        }
                        break;
                }


                //검증 할것인지?, 하고나서 저장되었다고 toast 띄워주도록 하자
                this.closeDialog();
            },

            closeDialog() {
                //데이터 초기화
                this.ModalData = {
                    hint: "",
                    description: "",
                    modalType: 0,
                    content: ""
                };
                this.dialog = false;
            }
        }
    };
</script>

<style>
    .key {
        overflow: hidden;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        width: 150px;
        height: 1.2em;
    }
    .key:hover {
        overflow: visible;
    }
    #keep .v-navigation-drawer__border {
        display: none;
    }

    .contents {
        align-self: flex-end;
    }
</style>
