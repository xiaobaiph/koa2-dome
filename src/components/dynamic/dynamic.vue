<template>
  <div>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人动态</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="addto1"
            >添加动态</el-button
          >
        </div>

          <div>
<!--            <el-checkbox :label="year" name="type"></el-checkbox>-->
            <div class="block">
              <el-date-picker
                      v-model="value2"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
          <div v-for="(item, index) in  datas" :key="index">


            <div class="dybanic-dv1">

              <div class="dybanic-dis1">
                <div>{{ item.region }}</div>
                <div>
                  {{"jack"}}
                </div>
              </div>

              <div class="dybanic-dis2">
              <div >
                <div class="dybanic-dis3"  v-if="item.name">
                  汇报人:
                <div v-for="(item1,index1) in item.name" :key="index1">
                  <div>
                    {{item1[0]}}
                  </div>
                </div>
                </div>
                <div>
                  <div>
                    动态：{{item.text}}
                  </div>
                </div>
              </div>
                <div>发布于{{date1}}</div>
              </div>
            </div>
            <br>
            </div>



      </el-card>
    </div>

    <!--      动态选择-->
    <div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="动态类型" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="个人心情" value="个人心情"></el-option>
              <el-option label="工作汇报" value="工作汇报"></el-option>
              <el-option label="公司相关" value="公司相关"></el-option>
              <el-option label="其他事情" value="其他事情"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="动态类型"
            :label-width="formLabelWidth"
            v-if="this.form.region === '工作汇报'"
          >
            <div class="block">
              <el-cascader
                :options="options"
                :props="{ multiple: true, checkStrictly: true }"
                v-model="options.value"
                clearable
              ></el-cascader>
            </div>
          </el-form-item>

          <el-form-item label="详细内容" :label-width="formLabelWidth">
            <el-input v-model="form.text" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sure1">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "dynamic",
  components: {},
  props: {},
  data() {
    return {
      year: "",
      date1:"",
      // element数据
      dialogFormVisible: false,
      form: {
        name: "",
        text: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      options: [
        {
          value: "大毛",
          label: "大毛"
        },
        {
          value: "二毛",
          label: "二毛"
        },
        {
          value: "三毛",
          label: "三毛"
        },
        {
          value: "四毛",
          label: "四毛"
        },
        {
          value: "五毛",
          label: "五毛"
        },
        {
          value: "六毛",
          label: "六毛"
        },
        {
          value: "七毛",
          label: "七毛"
        }
      ],
      dynamicdata: [],
      // 日期
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    };
  },
  methods: {
    //用dayjs获取时间格式
    timenow() {
      this.year = this.$dayjs().format("YYYY-MM-DD");
      this.date1 = this.$dayjs().format("YYYY年MM月DD日");
      console.log(this.year);
    },
    addto1() {
      this.dialogFormVisible = true;
    },
    //确定
    sure1() {
      console.log(this.form.region);
      console.log(this.form.text);
      console.log(this.options.value);

      //数据显示的条件

      this.dynamicdata.push({
        region: this.form.region,
        text: this.form.text,
        name: this.options.value
      });
      // this.dynamicdata=null
      this.dialogFormVisible = false;

      this.$store.state.dates = this.dynamicdata

      console.log(this.dynamicdata);
       this.form.region=null
             this.form.text=null
             this.options.value=null




    }
  },
  mounted() {
    this.timenow();
  },
  created() {},
  filters: {},
  computed: {
    datas(){
      return  this.$store.state.dates
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
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
  clear: both;
}

.box-card {
  width: 480px;
}
  .dybanic-dv1{
    width: 100%;
    border-radius: 2px;
    background-color:#EEEEEE;
  }
  .dybanic-dis1{

    height: 50px;
    align-items: center;
    display: flex;
    justify-content: space-between;


  }
.dybanic-dis2{

  height: 50px;
  align-items: center;
  display: flex;
  justify-content: space-between;


}
  .dybanic-dis3{
    display: flex;
    height: 30px;
    align-items: center;
  }


</style>
