<template>
    <div>
        <div class="asidess-post1">
            <div v-if="isCollapse===false" class="asidess-dis1">
                <div>
                    <i class="el-icon-s-fold" @click="collapseopen" ></i>
                </div>
                <div class="asidess-text2">
                    首页
                </div>
            </div>
            <div v-else-if="isCollapse===true" class="asidess-dis1">
                <div>
                    <i class="el-icon-s-unfold" @click="collapseClose" ></i>
                </div>
                <div class="asidess-text2">
                    首页
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