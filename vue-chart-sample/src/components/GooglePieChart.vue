<template>
    <v-layout>
        <v-flex md6>
            <GChart
                class="pa-0"
                type="PieChart"
                :data="chartData"
                :options="chartOptions"
                style="width: 900px; height: 500px;"
            />
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "GooglePieChart",
        data() {
            return {
                // Array will be automatically processed with visualization.arrayToDataTable function
                chartData: [
                    ["Task", "Hours per Day"],
                    ["Work", 11],
                    ["Eat", 2],
                    ["Commute", 2],
                    ["Watch TV", 2],
                    ["Sleep", 7]
                ],
                chartOptions: {
                    chart: {
                        title: "My Daily Activities"
                    }
                    
                }
            };
        }
    };
</script>

<style></style>
