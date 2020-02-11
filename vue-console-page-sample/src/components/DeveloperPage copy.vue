<template>
    <v-container fluid class="grey lighten-4 fill-height container--fluid" wrap>
        <material-card
            color="green"
            title="Developer Pages"
            text="Let's go find out more FATOS Service"
        >
            <v-layout wrap fill-height fluid grid-list-xl justify-start>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3 >
                    <material-card column minHeight=360px class="v-card-profile fill-height" >
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
                        <v-card-text class="text-xs-center fill-height" >
                           
                            <h4 class="card-title font-weight-bold">
                                Maps
                            </h4>
                            <p class="card-description font-weight-black">
                                Embed highly customized maps in your applications.
                            </p>

                            <v-spacer></v-spacer>

                            <v-btn 
                                color="success"
                                round
                                
                                class="font-weight mx-auto"
                                >Go</v-btn
                            >
                        </v-card-text>
                        
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card class="v-card-profile">
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
                                Convert street addresses to geo-coordinates and vice-versa with forward geocoding, including landmarks, and reverse geocoding.
                            </p>
                            <v-btn
                                color="success"
                                round
                                class="font-weight"
                                >Go</v-btn
                            >
                        </v-card-text>
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card class="v-card-profile">
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
                                provides the highest level of navigation service quickly and easily.
                            </p>
                            <v-btn
                                color="success"
                                round
                                class="font-weight"
                                >Go</v-btn
                            >
                        </v-card-text>
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3>
                    <material-card class="v-card-profile">
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
                                Provides real-time information on various locations, such as driving tracks, as well as vehicle status.
                            </p>
                            <v-btn
                                color="success"
                                round
                                class="font-weight"
                                >Go</v-btn
                            >
                        </v-card-text>
                    </material-card>
                </v-flex>
                <v-flex ml-4 mr-4 mt-2 md4 sm6 lg3 >
                    <material-card class="v-card-profile">
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
                                Maps
                            </h4>
                            <p class="card-description font-weight-black">
                                Embed highly customized maps in your applications.
                            </p>
                            <v-btn
                                color="success"
                                round
                                class="font-weight"
                                >Go</v-btn
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
