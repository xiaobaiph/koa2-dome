<template>
    <div>
    <div class="forms-dv1">
        <div>
            请填写您的账户信息
        </div>
        <div class="forms-text1">
            请务必是你本人操作，确认转款金额和收款人信息
        </div>
    </div>
        <div class="forms-dv2">
            <div class="forms-dv3">
                <el-steps :active="active" finish-status="success" align-center>
                    <el-step title="填写转账信息"></el-step>
                    <el-step title="确认转账信息"></el-step>
                    <el-step title="完成"></el-step>
                </el-steps>
            </div>
            <div>
                <div class="forms-dv4">
                    <div v-if="active===1">
                    <el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                        <el-form-item label="付款账户" prop="value1"  required>
                            <el-input v-model="ruleForm.value1" ></el-input>
                        </el-form-item>
                        <el-form-item label="收款人账户" prop="value5"  required>
                            <div class="forms-dis1">
                                <el-select v-model="ruleForm.value5" placeholder="请选择">
                                    <el-option label="支付宝" value="shanghai"></el-option>
                                    <el-option label="银行卡" value="beijing"></el-option>
                                </el-select>
                                <el-input v-model="ruleForm.value3"></el-input>
                            </div>
                        </el-form-item>

                        <el-form-item label="付款人姓名" prop="value2"  required>
                            <el-input v-model.number="ruleForm.value2"></el-input >
                        </el-form-item>
                        <el-form-item label="收款金额" prop="value4"  required>
                            <el-input type="text" v-model="ruleForm.value4" prefix="￥："></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="forms-but1">
                        <el-button style="margin-top: 12px;" @click="next"  type="primary">下一步</el-button>
                    </div>
                </div>

<!--                   第二步 -->
                    <div  v-else-if="active===2">
                        <div class="forms-dv5" >
                            <el-alert
                                    title="确认转账后，资金将直接打入对方账户，无法退还"
                                    type="warning"
                                    show-icon>
                            </el-alert>
                        </div>
                        <div class="forms-dv6">
                            <div class="forms-dv7">
                                付款账户：{{'jack'}}
                            </div>
                            <div class="forms-dv7">
                                收款人账户：{{ruleForm.value3}}
                            </div>
                            <div class="forms-dv7">
                                付款人姓名：{{ ruleForm.value2}}
                            </div>
                            <div class="forms-dv7">
                                收款金额：<span class="forms-text2">{{ruleForm.value4}}</span>元
                            </div>
                        </div>

                        <div class="forms-dv8">
                            <el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="100px" class="demo-ruleForm" >
                            <el-form-item label="支付密码" prop="pass" >
                                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" maxlength="6" ></el-input>
                            </el-form-item>
                            </el-form>
                        </div>
                        <div class="forms-dv9">
                            <div>
                                <el-button style="margin-top: 12px;" @click="next"  type="primary">提交</el-button>
                            </div>
                            <div>
                                <el-button style="margin-top: 12px;" @click="nextback" >上一步</el-button>
                            </div>
                        </div>
                    </div>

<!--                    第三步-->
                    <div v-else-if="active===3">
                        <div class="forms-dv10">
                        <div class="forms-dv11">
                            <i class="el-icon-success forms-color1" ></i>
                        </div>
                        <div>
                            操作成功
                        </div>
                        <div class="forms-text3">
                            预计两个小时到账
                        </div>
                        </div>
                        <div>
                            <div class="forms-dv6">
                                <div class="forms-dv7">
                                    付款账户：{{'jack'}}
                                </div>
                                <div class="forms-dv7">
                                    收款人账户：{{ruleForm.value3}}
                                </div>
                                <div class="forms-dv7">
                                   付款人姓名：{{ ruleForm.value2}}
                                </div>
                                <div class="forms-dv7">
                                    收款金额：<span class="forms-text2">{{ruleForm.value4}}</span>元
                                </div>
                            </div>
                        </div>
                        <div class="forms-dv9">
                            <div>
                                <el-button style="margin-top: 12px;" @click="nextback" >再转一笔</el-button>
                            </div>
                            <div>
                                <el-button style="margin-top: 12px;" @click="seebill"  type="primary">查看账单</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "forms",
        components: {},
        props: {},
        data() {
            return {
                num:0,
                active: 1,
                ruleForm:{
                value1:"",
                value2:"",
                value3:"",
                value4:"",
                value5:"",
                    pass:"",
                    user:""
                },
                rules: {
                    value1: [
                        { required: true, message: '请输入账号', },
                        // {  message: '请输入数字', trigger: 'blur' }
                    ],
                    value2: [
                        { required: true, message: '请输入账号', },
                        // { message: '请输入数字', trigger: 'blur' }
                    ],
                    value3: [
                        { required: true, message: '请输入姓名', },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    value4: [
                        { required: true, message: '请输入金额', },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    pass: [
                        {  required: true, message: '请输入密码',  },
                        { min: 6, max: 6,  trigger: 'blur' }
                    ],


                }
            }
        },
        methods: {
            //查看账单
            seebill(){
                const { href } = this.$router.resolve({
                    name: "printing",
                    params: { id: 0 }
                });
                window.open(href, '_blank');

                localStorage.setItem("Receivables",JSON.stringify(this.ruleForm.value3))
                localStorage.setItem("payment",JSON.stringify(this.ruleForm.value1))
                localStorage.setItem("name",JSON.stringify(this.ruleForm.value2))
                localStorage.setItem("money",JSON.stringify(this.ruleForm.value4))

            },
            next() {
                if(this.active===1){
                    if(this. ruleForm.value1.length>0 && this. ruleForm.value2.length>0 && this. ruleForm.value3.length>0 && this. ruleForm.value4.length>0 && this. ruleForm.value5.length>0){
                        this.active = 2;
                    }
                    else {
                        this.$message.error('请填入完整信息');
                    }
                }

                else if(this.active===2){
                    if( this. ruleForm.pass.length===6){
                        this.active = 3;
                    }
                    else {
                        this.$message.error('密码输入错误');
                    }
                }
            },
            nextback(){
                this.active=1
            },
        },
        mounted() {
            this.user=JSON.parse(localStorage.getItem('user'))

        },
        created() {

        },
        filters: {},
        computed: {

        },
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">
    .forms-dv1{
        width: 94%;
        height: 50px;
        line-height: 20px;
        background-color: #ffffff;
        font-size: 13px;
        margin: 0 auto;
    }
    .forms-text1{
        font-size: 12px;
        color:#aaaaaa;
    }
    .forms-dv2{
        width: 94%;
        height: 500px;
        background-color: #ffffff;
        margin: 30px auto;
    }
    .forms-dv3{
        width: 80%;
        height: 100px;
        margin: 0px auto;
    }
    .forms-dv4{
        width: 50%;
        margin: 0 auto;
        text-align: left;
    }
    .forms-but1{
        width: 100%;
       text-align: center;
    }
    .forms-dis1{
        display: flex;
    }
    .forms-dv5{
        width: 100%;
        height: 30px;
    }
    .forms-dv6{
        width: 100%;
        font-size: 13px;
        margin: 30px 0;
        height:100px;
    }
    .forms-dv7{
    height: 30px;
        line-height: 20px;
    }
    .forms-text2{
        font-size: 20px;
    }
    .forms-dv8{
        width: 200px;
    }
    .forms-dv9{
          display: flex;
          justify-content: space-around;
      }
    .forms-color1{
      color: #52C41A;
        font-size: 60px;
    }
    .forms-text3{
        color:#aaaaaa;
        font-size: 13px;
    }
    .forms-dv10{
        width: 200px;
        text-align: center;
        margin: 0 auto;
    }
    .forms-dv11{
        height: 70px;
        align-items: center;
    }

</style>