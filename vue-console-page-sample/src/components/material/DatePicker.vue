<template>
    <v-layout>
        <v-row class="justify-end mx-auto">
            <v-col cols="12" sm="12" md="6" lg="6" xs="12">
                <v-menu
                    ref="start_menu"
                    v-model="start_menu"
                    :close-on-content-click="false"
                    :return-value.sync="start_date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="start_date"
                            label="Choose start date"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="start_date"
                        no-title
                        scrollable
                        class="myCalendar"
                    >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="start_menu = false"
                            >Cancel</v-btn
                        >
                        <v-btn text color="primary" @click="dateChanged()"
                            >OK</v-btn
                        >
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xs="12">
                <v-menu
                    ref="end_menu"
                    v-model="end_menu"
                    :close-on-content-click="false"
                    :return-value.sync="end_date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="end_date"
                            label="Choose end date"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="end_date"
                        no-title
                        scrollable
                        class="myCalendar"
                    >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="end_menu = false"
                            >Cancel</v-btn
                        >
                        <v-btn text color="primary" @click="dateChanged()"
                            >OK</v-btn
                        >
                    </v-date-picker>
                </v-menu>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
    import config from "@/config";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    export default {
        name: "DatePickerSample",
        created() {
            this.getToday();
            
        },

        data: () => ({
            end_date: "",
            start_date: "",
            start_menu: false,
            end_menu: false
        }),

        methods: {
            getToday() {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, "0");
                var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
                var yyyy = today.getFullYear();

                this.end_date = yyyy + "-" + mm + "-" + dd;
                // this.start_date = yyyy - 1 + "-" + mm + "-" + dd;

                this.$http
                    .post(
                        `${config.requestHost}/auth/getUserInfo`,
                        {
                            app_token: this.$store.getters.getAppToken
                        },
                        `${myHeaders}`
                    )
                    .then(({ data }) => {
                        // console.log(
                        //     "recieved getUserInfo data : ",
                        //     data.data.length
                        // );
                        // console.log("recieved getUserInfo data : ", data.data);
                        if (data.data.length == 0) {
                            //등록된 키가 없으면 ..? 로그아웃? 키 만료일 체크?
                            // this.userData = {};
                            this.$emit(
                                "snack-event",
                                "error",
                                "You don't have Key.."
                            );
                        } else {
                            // console.log(
                            //     "key Token : ",
                            //     data.data[data.data.length - 1].id
                            // );
                            // console.log("create_date : ", data.data[0].create_date.substring(0,10));
                            this.start_date = data.data[0].create_date.substring(
                                0,
                                10
                            );
                            this.dateChanged();
                        }
                    })
                    .catch(error => {
                        console.error("getRegistredKeybyUser err", error);
                    });
            },

            dateChanged() {
                // console.log(
                //     "dateChanged(datePicker)! : ",
                //     this.start_date,
                //     ", ",
                //     this.end_date
                // );

                if (this.start_menu) {
                    this.start_menu = false;
                    this.$refs.start_menu.save(this.start_date);
                }

                if (this.end_menu) {
                    this.end_menu = false;
                    this.$refs.end_menu.save(this.end_date);
                }

                this.$emit("date-changed", this.start_date, this.end_date);
            }
        }
    };
</script>

<style>
    .myCalendar td {
        padding: 4px 0 !important;
        height: unset !important;
    }
    .myCalendar th {
        padding: 4px 0 !important;
        height: unset !important;
    }

    .myCalendar td button {
        padding: 4px 0 !important;
        height: unset !important;
    }

    .myCalendar td button div {
        height: unset !important;
        color: black;
    }

    .myCalendar tr {
        height: unset !important;
    }

    .myCalendar tr:hover {
        background: #fff !important;
    }
</style>
