<template>
    <v-container fill-height fluid grid-list-xl>
        <material-card
            justify-center
            wrap
            color="blue"
            title="Developer Pages"
            text="Let's go find out more FATOS Service"
        >
            <v-layout wrap fill-height fluid grid-list-xl justify-start>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card
                        column
                        minHeight="360px"
                        maxHeight="360px"
                        class="v-card-profile fill-height"
                    >
                        <v-avatar
                            pa-1
                            slot="offset"
                            tile="true"
                            class="mx-auto d-block"
                            height="84px"
                            width="100px"
                        >
                            <img src="@/assets/maps.png" />
                        </v-avatar>

                        <v-layout row wrap
                            class="mx-auto fill-height justify-space-between align-content-space-between"
                        >
                                <v-flex>
                                    <v-card-title class=" font-weight-bold"
                                        >Maps</v-card-title
                                    >
                                </v-flex>
                                <v-flex class="py-0 mb-12"> 
                                    <v-card-text
                                        class="card-description font-weight-black"
                                    >
                                        Embed highly customized maps in your
                                        applications.
                                    </v-card-text>
                                </v-flex>
                                <v-spacer></v-spacer>
                                <v-flex  class="align-end fill-height justify-end">
                                    <v-layout>
                                        <v-spacer></v-spacer>
                                    <v-btn
                                        href="https://onemap.fatos.biz/map-control/bounds/"
                                        color="success"
                                        rounded
                                        class="font-weight mx-auto"
                                        >More</v-btn
                                    >
                                    </v-layout>
                                </v-flex>
                        </v-layout>
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card
                        minHeight="360px"
                        maxHeight="360px"
                        class="v-card-profile"
                    >
                        <v-avatar
                            tile="true"
                            slot="offset"
                            class="mx-auto d-block"
                            height="84px"
                            width="100px"
                        >
                            <img src="@/assets/geocoding.png" />
                        </v-avatar>
                        <v-card-text class="text-xs-center">
                            <h4 class="card-title font-weight-bold">
                                Geocoding
                            </h4>
                            <p class="card-description font-weight-black">
                                Convert street addresses to geo-coordinates and
                                vice-versa with forward geocoding, including
                                landmarks, and reverse geocoding.
                            </p>
                            <v-btn
                                href="http://onemap.fatos.biz/geocoding/forward-geocoding/"
                                color="success"
                                rounded
                                class="font-weight"
                                >More</v-btn
                            >
                        </v-card-text>
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card
                        minHeight="360px"
                        maxHeight="360px"
                        class="v-card-profile"
                    >
                        <v-avatar
                            tile="true"
                            slot="offset"
                            class="mx-auto d-block"
                            height="84px"
                            width="100px"
                        >
                            <img src="@/assets/routing.png" />
                        </v-avatar>
                        <v-card-text class="text-xs-center">
                            <h4 class="card-title font-weight-bold">
                                Routing
                            </h4>
                            <p class="card-description font-weight-black">
                                provides the highest level of navigation service
                                quickly and easily.
                            </p>
                            <v-btn
                                href="http://onemap.fatos.biz/route/"
                                color="success"
                                rounded
                                class="font-weight"
                                >More</v-btn
                            >
                        </v-card-text>
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card
                        minHeight="360px"
                        maxHeight="360px"
                        class="v-card-profile"
                    >
                        <v-avatar
                            tile="true"
                            slot="offset"
                            class="mx-auto d-block"
                            height="84px"
                            width="100px"
                        >
                            <img src="@/assets/vehicletracking.png" />
                        </v-avatar>
                        <v-card-text class="text-xs-center">
                            <h4 class="card-title font-weight-bold">
                                Vehicle Tracking
                            </h4>
                            <p class="card-description font-weight-black">
                                Provides real-time information on various
                                locations, such as driving tracks, as well as
                                vehicle status.
                            </p>
                            <v-btn
                                href="http://onemap.fatos.biz/vehicle-trakcing/monitoring/"
                                color="success"
                                rounded
                                class="font-weight"
                                >More</v-btn
                            >
                        </v-card-text>
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card
                        minHeight="360px"
                        maxHeight="360px"
                        class="v-card-profile"
                    >
                        <v-avatar
                            tile="true"
                            slot="offset"
                            class="mx-auto d-block"
                            height="84px"
                            width="100px"
                        >
                            <img src="@/assets/mobilizing.png" />
                        </v-avatar>
                        <v-card-text class="text-xs-center">
                            <h4 class="card-title font-weight-bold">
                                Mobilizing
                            </h4>
                            <p class="card-description font-weight-black">
                                provides real-time collected vehicle information
                                based on ADAS map.
                            </p>
                            <v-btn
                                href="http://onemap.fatos.biz/mobilizing/driving-pattern/mobilizing/"
                                color="success"
                                rounded
                                class="font-weight"
                                >More</v-btn
                            >
                        </v-card-text>
                    </material-card>
                </v-flex>
            </v-layout>
        </material-card>
    </v-container>
</template>

<script>
    // import Archive from '@/contents/Archive';

    export default {
        name: "DeveloperPage",
        components: {
            // Archive,
        },
        props: {
            //   source: String,
        },
        data: () => ({}),
        methods: {}
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
