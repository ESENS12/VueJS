<template>
    <v-layout>
        <v-flex md6>
            <GChart
                :settings="{packages: ['bar']}"    
                class="pa-0"
                
                :data="chartData"
                :options="chartOptions"
                style="width: 900px; height: 500px;"
            />
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "GoogleBarChart",
        data() {
            return {
                // Array will be automatically processed with visualization.arrayToDataTable function
                chartData: [
                    [
                        "Year",
                        "Sales",
                        "Expenses",
                        "Profit",
                        { role: "annotation" }
                    ],
                    ["2014", 1000, 400, 200, "58%"],
                    ["2015", 1170, 460, 250, "99%"],
                    ["2016", 660, 1120, 300, "42%"],
                    ["2017", 1030, 540, 350, "12%"]
                ],
                chartOptions: {
                    chart: {
                        title: "My Daily Activities"
                    },
                    bars: "horizontal", // Required for Material Bar Charts.
                    hAxis: { format: "decimal" },
                    height: 400,
                    colors: ["#1b9e77", "#d95f02", "#7570b3"]
                }
            };
        }
    };
</script>

<style></style>
