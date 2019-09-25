<template>
  <div>
    <div>
      <div class="fund-dv1">
        <i class="el-icon-discount fund-icon1"></i>
        <span class="fund-text1">
          <b>人员信息</b>
        </span>
      </div>
    </div>
    <div class="fund-dv2">
      <div class="fund-text2">{{ time1 }} 薪酬预算</div>
      <!--            日期表-->
      <div>
        <div class="block fund-date1">
          <el-date-picker
            size="mini"
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            @change="data1"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </div>
    </div>
    <div class="fund-text3">
      如果有更多的渠道请自行添加，所有添加的渠道会显示在CRM系统中
    </div>
    <div class="fund-dv3">
      <div class="fund-text4">
        薪资结构
      </div>
      <div>
        <el-table
          :data="tableData"
          border
          :summary-method="getSummaries"
          :show-summary="flag"
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column align="center" label="薪资构成" width="180">
            <template slot-scope="scope">
              <div @dblclick="flags1(scope)" v-if="scope.row.flag1 === false ">
                {{ scope.row.name }}
              </div>
              <div v-if="scope.row.flag1 === true">
                <el-input
                  v-model="scope.row.name"
                  @blur="lose1(scope)"
                  placeholder="请输入内容"
                ></el-input>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            prop="plan"
            label="计划支出（元）"
            width="180"
          >
            <template slot-scope="scope">
              <div @dblclick="flags2(scope)" v-show="scope.row.flag2 === false">
                {{ scope.row.plan }}
              </div>
              <div v-show="scope.row.flag2 === true">
                <el-input
                  v-model="scope.row.plan"
                  placeholder="请输入内容"
                  @blur="lose1(scope)"
                ></el-input>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            prop="Actual"
            label="实际支出（元）"
            width="180"
          >
            <template slot-scope="scope">
              <div @dblclick="flags3(scope)" v-show="scope.row.flag3 === false">
                {{ scope.row.Actual }}
              </div>
              <div v-show="scope.row.flag3 === true">
                <el-input
                  v-model="scope.row.Actual"
                  placeholder="请输入内容"
                  @blur="lose1(scope)"
                ></el-input>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            prop="lastplan"
            label="上月计划支出（元）"
            width="180"
          >
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.lastplan"
                placeholder="0"
                disabled
                class="input--input1"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="lastActual"
            label="上月实际支出（元）"
            width="180"
            align="center"
          >
            <template slot-scope="scope">
              <el-input
                      placeholder="0"
                v-model="scope.row.lastActual"
                :disabled="true"
                class="input--input1"
              ></el-input>
            </template>
          </el-table-column>
        </el-table>
          <div class="fund-but1">
              <el-button type="primary" @click="addto2">添加更多</el-button>
          </div>
<!--        <div>-->
<!--          <el-table-->
<!--                  :data="moneyData"-->
<!--                  border-->
<!--                  :summary-method="getSummaries"-->
<!--                  :show-summary="flag"-->
<!--                  style="width: 100%; margin-top: 20px"-->
<!--          >-->

<!--          </el-table>-->
<!--        </div>-->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fundmanagement",
  components: {},
  props: {},
  data() {
    return {
      //总价的计算
      moneyData:[
        // {
        //   namedata:"总价",
        //   plandata:"",
        //   lastplandata:"",
        //   Actualdata:"",
        //   lastActualdata:"",
        // }

      ],
      time1: null,
      id1: "",
      tableData: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      flag: true,
    };
  },
  methods: {
      //添加
      addto2(){
        if(
   this.tableData[this.tableData.length-1].name===''||
                this.tableData[this.tableData.length-1].plan===''||
                this.tableData[this.tableData.length-1].Actual===''
        ){
          this.$message({
            message:'请填入完整信息',
            type: 'warning'
          });
        }
        else {
          let arr1={
            Actual:"",
            name:"",
            plan:"",
            flag1:true,
            flag2:true,
            flag3:true,
          }
          this.tableData.push(arr1)

        }

      },
    //获取月份
    data1() {
      console.log(this.value2);
      if (this.value2.length === 0) {
        this.time1 = this.$dayjs().format("YYYY年MM月");
      } else {
        this.time1 = this.$dayjs(this.value2).format("YYYY年MM月");
      }

      console.log(this.time1);
    },
    //失去焦点
    lose1(scope) {
        if(this.tableData[this.tableData.length-1].name===''||
      this.tableData[this.tableData.length-1].plan===''||
      this.tableData[this.tableData.length-1].Actual===''){
        scope.row.flag1 = true;
          // this.$message({
          //   message:'填入完整信息',
          //   type: 'warning'
          // });
        }
        else {
          scope.row.flag1 = false;
          scope.row.flag2 = false;
          scope.row.flag3 = false;
        }

    },
    // lose2(scope) {
    //   scope.row.flag2 = false;
    // },
    // lose3(scope) {
    //   scope.row.flag3 = false;
    // },







    flags1(scope) {
      scope.row.flag1 = true;
      console.log(scope.row.flag1);
    },
    flags2(scope) {
      scope.row.flag2 = true;
      console.log(scope.row.flag2);
    },
    flags3(scope) {
      scope.row.flag3 = true;
      console.log(scope.row.flag3);
    },
    //表格数据
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },
    //请求数据
    funddata() {
      // this.$axios.req("api/mock/offer")
      //         .then(res=>{
      //           console.log(res);
      //         }).catch(error=>{
      //   console.log(error);
      // })
      this.$axios
        .req("api/mock/fund")
        .then(res => {
          this.tableData = res.data.data;
          console.log(this.tableData);
        })
        .catch(error => {
          console.log(error);
        });
      console.log(this.plandata());
    }
  },
  mounted() {
    this.funddata();
    this.data1();
  },
  created() {},
  filters: {},
  computed: {
    // plandata(){
    //   return this.tableData.plan
    // },
    // lastplandata(){
    //   return this.tableData.lastplan.toString()
    // },
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.fund-icon1 {
  color: green;
  font-size: 20px;
}
.fund-text1 {
  font-size: 13px;
}
.fund-dv1 {
  height: 30px;
  line-height: 30px;
  margin-left: 30px;
}
.fund-dv2 {
  width: 94%;
  height: 60px;
  background-color: #ffffff;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fund-text2 {
  margin-left: 20px;
  font-weight: 900;
  font-size: 20px;
}
.fund-date1 {
  margin-right: 20px;
}
.fund-text3 {
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  margin-left: 50px;
}
.fund-dv3 {
  background-color: #ffffff;
  width: 94%;
  margin: 0 auto;
}
.fund-text4 {
  font-size: 20px;
  font-weight: 700;
  margin-left: 30px;
  height: 50px;
  line-height: 50px;
}
.fund-text5 {
  text-align: center;
}
.fund-input1 {
  width: 200px;
  margin: 0 auto;
}
    .fund-but1{
        z-index:1;
    }
</style>
