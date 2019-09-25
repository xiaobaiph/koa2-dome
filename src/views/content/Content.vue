<template>
    <div>
        <div c>
            <el-container>
                <el-header> <Headerss></Headerss> </el-header>
                <el-container>
                    <el-aside :width="num1"> <Asidess></Asidess> </el-aside>
                    <el-main>
                        <Fold></Fold>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
    
</template>

<script>
    import Headerss from "../../components/headerss"
    import Asidess from "../../components/asidess"
    import Fold from "../../components/fold/fold"
    export default {
        name: "Content",
        components: {
            Headerss,
            Asidess,
            Fold,
        },
        props: {},
        data() {
            return {
                num1:"",
            }
        },
        methods: {},
        mounted() {

        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {},
        directives: {}
    }
</script>

<style  lang="scss">
   @import "../../style/commom";




   .el-main{
       padding: 0;
       background-color: #F0F2F5;
   }


.el-header{

    padding: 0;
}

</style>