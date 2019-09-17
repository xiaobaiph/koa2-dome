<template>
    <div>
        <div >
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>利润（万）</span>
                </div >
                <div class="city-dv1">
                    <ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
                </div>

            </el-card>

        </div>

    </div>
    
</template>

<script>
    export default {
        name: "cityprofit",
        components: {},
        props: {},
        data() {
            this.chartSettings = {
                color: ['#ff0', '#00f', '#f00', '#0ff'],
                shape: 'pentagon',
                sizeMin: 10,
                sizeMax: 15,
            }
            return {
                chartData:{
                    columns: ['city', 'profit'],
                    rows:[],
                }
            }
        },
        methods: {
            citydata(){
                this.$axios.req("api/mock/city")
                    .then(res=>{
                        this.chartData.rows=res.data.data
                        console.log(this.chartData.rows);
                        console.log(res);
                    }).catch(error=>{
                    console.log(error);
                })
            },
        },
        mounted() {
            this.citydata()

        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">
    /*element样式*/
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 600px;
        height: 300px;
    }
    .city-dv1{
      position: relative;
        top: -100px;
    }


</style>