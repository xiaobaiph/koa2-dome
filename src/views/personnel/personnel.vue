<template>
    <div>
       <div>
           <div class="person-dis1">
               <div class="person-dv1">
                   <i class="el-icon-user-solid person-icon1"></i>
                   <span class="person-text1">
               <b>人员信息</b>
            </span>
               </div>

               <div class="person-but1">
               <div v-if="flag1===false" @click="seeapproval">
                   <el-button type="primary" size="small" >批量转正</el-button>
               </div>
               <div  v-if="flag1===true" @click="sures1">
                   <el-button type="primary" size="small" >确认</el-button>
               </div>
               <div v-if="flag1===true">
                   <el-button type="primary" size="small"  @click="cancel">取消</el-button>
               </div>
               <div>
                   <el-button type="primary" size="small">导出</el-button>
               </div>
           </div>

           </div>

<!--           按钮-->
           <div class="person-dis2">
               <div @click="but1">
                   <el-button :type="style1"  size="mini" round>全部员工</el-button>
               </div>
               <div @click="but2">
                   <el-button :type="style2" size="mini"  round>考试中员工</el-button>
               </div >
               <div @click="but3">
                  <el-button :type="style3" size="mini" round>已转正员工</el-button>
               </div>
           </div>

       </div>
        <div class="person-dv2">
            <div>
                <template>
                    <el-table
                            ref="multipleTable"
                            :data="tableData.slice((currentPage-1)*page1,currentPage*page1)"
                            style="width: 100%"
                            :default-sort = "{prop: 'date', order: 'descending'}"
                            @selection-change="handleSelectionChange"
                    >
                        <el-table-column
                                align="center"
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="name"
                                label="姓名"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="jobnumber"
                                label="工号"
                                sortable
                                width="160">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="mechanism"
                                label="机构"
                                width="80"
                                >
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="department.label"
                                label="部门"
                                width="160">
                        </el-table-column>
                        <el-table-column
                                prop="start"
                                align="center"
                                label="试用期开始日期"
                                sortable
                                width="160">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="end"
                                label="试用期结束日期"
                                sortable
                                width="180">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="approval"
                                label="转正审批状态"
                                width="100">
                        </el-table-column>
                        <el-table-column label="操作"  align="center">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="primary"
                                        @click="handleEdit(scope.$index, scope.row)">编辑试用期</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>

<!--            分页-->
            <div>
                <div class="block">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[20, 100, 150, 200]"
                            :page-size="20"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="tableData.length">
                    </el-pagination>
                </div>
            </div>


        </div>


    </div>
    
</template>

<script>
    export default {
        name: "personnel",
        components: {},
        props: {},
        data() {
            return {
                page1:20,
                currentPage:1,
                valus1:"",
                flag1:false,
                tableData: [],//页面上渲染的数据
                tableData1: [],//储存数据
                style1:"primary",
                style2:"",
                style3:"",
            }
        },
        methods: {
            //分页
            handleSizeChange(val) {
                this.page1=val
                console.log(this.page1);
            },
            handleCurrentChange(val) {
                this.currentPage=val
                console.log( this.currentPage);
            },
            //拿到点击行
            handleSelectionChange(val) {
                this.multipleSelection = val;
                this.valus1=val
                // console.log(val);
            },
            //确定按钮
            sures1(val){
                this.flag1=false
                this.multipleSelection = val;
                console.log(this.valus1);
                this.valus1.forEach(item=>{
                   item.approval="审批通过"
                })
                this.tableData=this.tableData1
                // this.tableData.splice(val)
            },
            //切换按钮到审批
            seeapproval(){
                this.flag1=true
                this.tableData=this.tableData1.filter(item=>{
                    return item.approval!=="审批通过"
                })
                // this.tableData1=this.tableData
                // console.log(this.tableData);
            },
            //取消按钮到审批按钮
            cancel(){
                this.tableData=this.tableData1
                this.flag1=false
            },
            //表格element属性
            formatter(row, column) {
                return row.address;
            },
            //全员按钮
            but1(index, row){
                this.style1='primary'
                this.style2=''
                this.style3=''
                this.tableData=this.tableData1


            },
            //考试按钮
            but2(){
                let tableData2=this.tableData1
                this.style1=''
                this.style2='primary'
                this.style3=''
                this.tableData=tableData2.filter(item=>{
                   return  item.approval==="审批中"
                })

            },
            //转正按钮
            but3(){

             let tableData2=this.tableData1
                this.style1=''
                this.style2=''
                this.style3='primary'
                this.tableData=tableData2.filter(item=>{
                   return  item.approval==="审批通过"
                })


            },
            //数据请求
            personneldata(){
                this.$axios.req("api/mock/personnel")
                    .then(res=>{
                        this.tableData=res.data.data
                        // console.log(this.tableData);
                        this.tableData1=this.tableData
                        console.log(this.tableData1);
                    }).catch(error=>{
                    console.log(error);
                })

            },

        },
        mounted() {
            this.personneldata()

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
    .person-icon1{
        color: green;
        font-size: 20px;
    }
    .person-text1{
        font-size: 13px;
    }
    .person-dv1{
        height: 30px;
        line-height: 30px;
        margin-left: 30px;
    }
    .person-dis1{
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: space-between;
    }
    .person-but1{
        display:flex;
        width:200px;
        justify-content: space-around;
    }
    .person-dis2{
        display: flex;
        width: 300px;
        height: 60px;
        align-items: center;
        justify-content: space-around;
        margin-left: 20px;
    }
    .person-dv2{
        width:96%;
        background-color:#ffffff;
        height: 500px;
        margin: 0 auto;
    }
</style>