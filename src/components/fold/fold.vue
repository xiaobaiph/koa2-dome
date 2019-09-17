<template>
    <div>
        <div class="asidess-post1">
            <div v-if="isCollapse===false" class="asidess-dis1">
                <div>
                    <i class="el-icon-s-fold" @click="collapseopen" ></i>
                </div>
                <div class="asidess-text2">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/maillist'">通讯录</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/schedule'">日程管理</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/forms'">表单</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/forms'">分布表单</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/offeradministration'">组织员工</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/offeradministration'">offer管理</el-breadcrumb-item>

                    </el-breadcrumb>
                </div>
            </div>

            <div v-else-if="isCollapse===true" class="asidess-dis1">
                <div>
                    <i class="el-icon-s-unfold" @click="collapseClose" ></i>
                </div>
                <div class="asidess-text2">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/maillist'">通讯录</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/schedule'">日程管理</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/forms'">表单</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/forms'">分布表单</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/offeradministration' || $route.path=== '/personnel'">组织员工</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/offeradministration'">offer管理</el-breadcrumb-item>
                        <el-breadcrumb-item  v-if="$route.path==='/personnel'">人员信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
        </div>




    </div>
    
</template>

<script>
    export default {
        name: "fold",
        components: {
        },
        props: {},
        data() {
            return {
                isCollapse: true,
            }
        },
        methods: {
            collapseopen(){
                this.isCollapse=true
                this.$store.state.flag=this.isCollapse
            },
            collapseClose(){
                this.isCollapse=false
                this.$store.state.flag=this.isCollapse
            },

        },
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

<style scoped lang="scss">
    .asidess-dis1{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
        margin-left: 50px;

    }
    .asidess-text2{
        font-size: 12px;
    }



</style>