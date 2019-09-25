<template>
  <div>
    <div class="offer-dis1">
      <div class="offer-dv1">
        <i class="el-icon-folder-opened offer-icon1"></i>
        <span class="offer-text1">
          <b>offer管理</b>
        </span>
      </div>
      <div class="offer-but1">
        <div>
          <el-button type="primary" size="small">新建offer</el-button>
        </div>
        <div>
          <el-button type="primary" size="small">转移状态</el-button>
        </div>
        <div>
          <el-button type="primary" size="small">导出</el-button>
        </div>
      </div>
    </div>
    <div class="offer-dv2">
      <div class="offer-dv3">
        <el-popover placement="bottom" width="160" v-model="visible">
          <div style="text-align: right; margin: 0">
            <div class="offer-dis3">
              <!--                        添加-->
              <div>
                <template>
                  <el-popover
                    placement="right"
                    width="100"
                    height="80"
                    trigger="click"
                  >
                    <div v-if="labels.length === 0">
                      暂无数据
                    </div>

                    <div v-for="(item, index) in labels" :key="index">
                      <div>
                        <el-checkbox v-model="item.checked">{{
                          item.name
                        }}</el-checkbox>
                      </div>
                    </div>
                    <el-button
                      size="mini"
                      type="text"
                      @click="display1"
                      slot="reference"
                      >添加显示字段</el-button
                    >
                    <div v-if="labels.length !== 0">
                      <el-button type="button" size="mini" @click="push1"
                        >确定</el-button
                      >
                    </div>
                  </el-popover>
                </template>
              </div>
              <!--                        删除-->
              <div>
                <template>
                  <el-popover
                    placement="right"
                    width="100"
                    height="80"
                    trigger="click"
                  >
                    <div v-if="deletedata.length === 0">
                      暂无数据
                    </div>

                    <div v-for="(item, index) in deletedata" :key="index">
                      <div>
                        <el-checkbox v-model="item.checked">{{
                          item.name
                        }}</el-checkbox>
                      </div>
                    </div>
                    <el-button
                      type="text"
                      size="mini"
                      @click="hide1"
                      slot="reference"
                      >删除显示字段</el-button
                    >
                    <div v-if="deletedata.length !== 0">
                      <el-button type="button" size="mini" @click="push2"
                        >确定</el-button
                      >
                    </div>
                  </el-popover>
                </template>
              </div>
            </div>
            <hr />
            <div class="offer-dis2">
              <div :class="[{'offer-color1':flag1===true }]" @click="compact1">
                紧凑
              </div>
              <div :class="[{'offer-color1':flag2===true}]" @click="moderate1">
                适中
              </div>
              <div :class="[{'offer-color1':flag3===true}]" @click="easy1">
                宽松
              </div>
            </div>
          </div>
          <i class="el-icon-setting" slot="reference"></i>
        </el-popover>
      </div>
      <div class="offer-but2">
        <div>
          <el-button type="primary" size="mini" round class="offer-but3"
            >代发offer({{ num1 }})</el-button
          >
        </div>
        <div>
          <el-button type="primary" size="mini" round
            >已发offer({{ num2 }})</el-button
          >
        </div>
        <div>
          <el-button type="primary" size="mini" round
            >已接受offer({{ num3 }})</el-button
          >
        </div>
        <div>
          <el-button type="primary" size="mini" round
            >已拒绝offer({{ num4 }})</el-button
          >
        </div>
        <div>
          <el-button type="primary" size="mini" round
            >已入职offer({{ num5 }})</el-button
          >
        </div>
      </div>

      <!--            表格-->
      <div>
        <template>
          <el-table
            ref="multipleTable"
            :data="
              tableData.slice(page * (currentPage - 1), page * currentPage)
            "
            tooltip-effect="dark"
            style="width: 100%"
            :row-style={height:height1}
            :cell-style={padding:padding1}

            height="500px"
            @selection-change="handleSelectionChange"
          >
                  <el-table-column
                          type="selection"
                          width="55">
                  </el-table-column>

                  <el-table-column
                          v-for="(item,index) in deletedata" :key="index"
                          align="center"
                          :prop="item.data"
                          :label="item.name"
                          width="100"
                          show-overflow-tooltip
                  >
                  </el-table-column>







<!--            &lt;!&ndash;                        1&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="name"-->
<!--                label="姓名"-->
<!--                width="80"-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;2&ndash;&gt;-->
<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="mailbox"-->
<!--                label="个人邮箱"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        3&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="documenttype"-->
<!--                label="证件类型"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        4&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="ids"-->
<!--                label="证件号码"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        5&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="sex"-->
<!--                label="性别"-->
<!--                width="50"-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        6&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="position"-->
<!--                label="职位"-->
<!--                width="80"-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        7&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="place"-->
<!--                label="籍贯"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        8&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="qq"-->
<!--                label="qq"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        9&ndash;&gt;-->

<!--              <el-table-column align="center" label="入职日期" width="120">-->
<!--                <template slot-scope="scope">{{ scope.row.date }}</template>-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        10&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="telephone"-->
<!--                label="电话号码"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        11&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="region.label"-->
<!--                label="区域"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        12&ndash;&gt;-->
<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="Marriage"-->
<!--                label="婚姻"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        13&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="birthday"-->
<!--                label="出生日期"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        14&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="approval"-->
<!--                label="offer状态"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        15&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="age"-->
<!--                label="年龄"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        16&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="education"-->
<!--                label="学历"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        17&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="Nntion"-->
<!--                label="民族"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

<!--            &lt;!&ndash;                        18&ndash;&gt;-->

<!--              <el-table-column-->
<!--                align="center"-->
<!--                prop="city"-->
<!--                label="工作地点"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--              </el-table-column>-->

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
            :page-sizes="[50, 100, 150, 200]"
            :page-size="25"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.tableData.length"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "offeradministration",
  components: {},
  props: {},
  data() {
    return {
        height1:'80px',
        padding1:"0px",
      //删除的数据
      deletedata: [
        {
          id: 1,
          data:"name",
          checked: false,
          name: "姓名"
        },
        { id: 2, data:"mailbox", checked: false, name: "个人邮箱" },
        { id: 3, data:"documenttype", checked: false, name: "证件类型" },
        { id: 4, data:"ids", checked: false, name: "证件号码" },
        { id: 5, data:"sex", checked: false, name: "性别" },
        { id: 6,  data:"position", checked: false, name: "职位" },
        { id: 7, data:"places",  checked: false, name: "籍贯" },

        { id: 8, data:"qq",  checked: false, name: "qq" },
        { id: 9,  data:"date", checked: false, name: "入职时间" }
      ],

      //添加的数据
      labels: [
        { id: 10,   data:"approval", checked: false, name: "offer状态" },
        { id: 11,    data:"birthday", checked: false, name: "出生日期" },
        { id: 12,   data:"Nntion",  checked: false, name: "民族" },
        { id: 13,  data:"telephone",  checked: false, name: "电话" },
        { id: 14,  data:"education",  checked: false, name: "学历" },
        { id: 15,  data:"date",  checked: false, name: "手机" },
        { id: 16,  data:"city", checked: false, name: "工作地点" },
        { id: 17,   data:"region", checked: false, name: "部门" },
        { id: 18,   data:"Marriage", checked: false, name: "婚姻状态" }
      ],
      num1: 2,
      num2: 2,
      num3: 2,
      num4: 2,
      num5: 2,

      //表格
      tableData:[],
      multipleSelection:[],
      //分页
      page: 25,
      currentPage: 1,
      visible: false,
      //颜色
      flag1: false,
      flag2: false,
      flag3: false,
      //多选框
      flag: false
    };
  },
  methods: {
      //紧凑
      compact1(){
          this.flag1=true
          this.flag2=false
          this.flag3=false
          this.height1='0px'
      },
      //适中
      moderate1(){
          this.flag1=false
          this.flag2=true
          this.flag1=false
          this.height1='60px'
      },
      //宽松
      easy1(){
          this.flag1=false
          this.flag2=false
          this.flag3=true
          this.height1='100px'

      },

    //添加
    push1() {
      this.labels.forEach(item => {
        if (item.checked === true) {
          this.deletedata.push(item);
        }

      });
      //filter清除数据
      this.labels = this.labels.filter(item => {
        return item.checked === false;
      });

      this.deletedata.forEach(item1 => {
        if (item1.checked === true) {
          item1.checked = false;
        }
      });

      console.log(this.labels);
    },
    //删除
    push2() {
      this.deletedata.forEach(item => {
        if (item.checked === true) {
          this.labels.push(item);
        }
      });

      //filter清除数据
      this.deletedata = this.deletedata.filter(item => {
        return item.checked === false;
      });

      this.labels.forEach(item1 => {
        if (item1.checked === true) {
          item1.checked = false;
        }
      });
      console.log(this.deletedata);
    },

    //显示
    display1() {
      this.flag = true;
    },
    hide1() {
      this.flag = true;
    },

    //分页
    handleSizeChange(val) {
      this.page = val;
      console.log(this.page);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
    },
    // offerdata2(){
    //   this.$axios.req("api/mock/offer")
    //           .then(res=>{
    //             console.log(res)
    //           }).catch(error=>{
    //     console.log(error)
    //   })
    // },


    //请求表格属性
    offerdata1(){
      this.$axios.req("api/mock/offer")
        .then( res => {
          this.tableData = res.data.data
          console.log(this.tableData)
          if(res){
          //代发
            let data1=[]
            data1= this.tableData.filter(item => {
                return   item.approval ==='待发'
            })
            this.num1=data1.length
            console.log(this.num1)
            //已发
            let data2=[]
            data2= this.tableData.filter(item => {
                return   item.approval ==='已发'
            })
            this.num2=data2.length
            console.log(this.num2)
            //已接受
            let data3=[]
            data3= this.tableData.filter(item => {
                return   item.approval ==='已接受'
            })
            this.num3=data3.length
            console.log(this.num3)
            //已拒绝
            let data4=[]
            data4= this.tableData.filter(item => {
                return   item.approval ==='已拒绝'
            })
            this.num4=data4.length
            console.log(this.num4)
            //已入职
            let data5=[]
            data5= this.tableData.filter(item => {
                return   item.approval ==='已入职'
            })
            this.num5=data5.length
            console.log(this.num5)
          }
          // console.log(res)
        }).catch(error => {
          console.log(error)
        })
    },

    //表格
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
    this.offerdata1()
    // this.offerdata2()
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.offer-icon1 {
  color: green;
  font-size: 20px;
}
.offer-text1 {
  font-size: 13px;
}
.offer-dv1 {
  height: 30px;
  line-height: 30px;
  margin-left: 30px;
}
.offer-dis1 {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
}
.offer-but1 {
  display: flex;
  width: 300px;
  justify-content: space-around;
}
.offer-dv2 {
  background-color: #ffffff;
  width: 96%;
  margin: 0 auto;
  height: 500px;
}
.offer-but2 {
  display: flex;
  width: 600px;
  justify-content: space-around;
  height: 50px;
  align-items: center;
}
.offer-text2 {
  font-size: 13px;
}
.offer-dv3 {
  width: 100%;
  text-align: right;
  position: relative;
  top: 30px;
  right: 30px;
}
.offer-dis2 {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.offer-color1 {
  color: #42b983;
}
.el-table td {
  padding: 100px 0;
}
.offer-dis3 {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
