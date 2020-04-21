<template>
    <v-container>
        <h8>K-Progress</h8>
        <kProgress
            :percent="85"
            :line-height="10"
            :type="lump"
            :format="myFormat"
            :color="myColors"
            :color-flow="false"
            :flow-second="1"
            :bg-color="myBgColor"
            :active="true"
        ></kProgress>
        <kProgress
            :percent="100"
            :line-height="6"
            :type="lump"
            :color="myColors"
            :color-flow="false"
            :flow-second="1"
            :bg-color="myBgColor"
            :active="true"
        ></kProgress>
        <kProgress
            :percent="11"
            :line-height="6"
            :type="lump"
            :color="myColors"
            :color-flow="false"
            :flow-second="1"
            :bg-color="myBgColor"
            :active="true"
        ></kProgress>
        <kProgress
            :percent="0"
            :line-height="6"
            :type="lump"
            :color="myColors"
            :color-flow="false"
            :flow-second="1"
            :bg-color="myBgColor"
            :active="true"
        ></kProgress>
    </v-container>
</template>

<script>
    //type not work

    import KProgress from "k-progress";

    export default {
        name: "k-progress",

        data: () => ({
            myColors: [
                //maximum arr size is 6
                "#666666",
                "#555555",
                "#444444",
                "#333333",
                "#222222",
                "#111111"
            ],
            myBgColor: "#32a852" //default is #ebeef5
        }),
        methods: {
            myFormat(data ) {
              console.log("format data? : " , data ); //data 
                return data + "$"
            }
        },
        components: {
            KProgress
        },

         mounted() {
            //console.log("query : " , this.$route.query);
            // console.log("" , document.getElementsByClassName("k-progress-text"));
            document.getElementsByClassName("k-progress").forEach(element => {
                console.log("element : " ,element);
                element.classList.add("myText")
            });

            document.getElementsByClassName("k-progress-text").forEach(element => {
                console.log("element : " ,element);
                element.classList.add("padding_class")
            });
            
            
        },

    };
</script>
<style scoped>
     .myText{
       margin-left: 10px;
       font-weight: bold;
       color: blue;
    }

    .padding_class{
      margin-left:20px !important;
      /* padding: 0,10,0,0 !important; */
    }
</style>
