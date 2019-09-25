<template>
  <div>
    <div>
      <lunar-full-calendar
        :events="events"
        :config="config"
        ref="FullCalendar"
      ></lunar-full-calendar>
    </div>
    <div>
      <el-dialog title="日程" :visible.sync="dialogFormVisible">
        <div>
          <div>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <br />
          <div>
            时间：
            <el-time-select
              placeholder="起始时间"
              v-model="startTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
            >
            </el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime
              }"
            >
            </el-time-select>
          </div>
          <br />
          <div class="schedule-dis1">
            <div>
              参与者：
            </div>
            <div v-for="item in name3" :key="item.id">
              <div>
                {{ item }}
              </div>
            </div>
            <div>
              <el-popover
                placement="bottom"
                title="添加"
                width="200"
                trigger="manual"
                v-model="visible"
              >
                <div>
                  <el-input
                    v-model="inputs1"
                    placeholder="请输入内容"
                  ></el-input>
                </div>
                <br />
                <div style="text-align: right; margin: 0">
                  <el-button type="primary" size="mini" @click="add1"
                    >确定</el-button
                  >
                </div>
                <i
                  class="el-icon-circle-plus"
                  @click="visible = !visible"
                  slot="reference"
                ></i>
              </el-popover>
            </div>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addscheduledata">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { LunarFullCalendar } from "vue-lunar-full-calendar";
export default {
  name: "schedule",
  components: {
    LunarFullCalendar
  },
  props: {},
  data() {
    return {
      scheduledata1: [],

      name3: [],
      visible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      startTime: "",
      endTime: "",
      input: "",
      inputs1: "",

      centerDialogVisible: false, //对话框
      events: [
        {
          title: "事件内容", // 事件内容
          start: "", // 事件开始时间
          end: "", // 事件结束时间
          color: "rgba(9, 9, 9, 0.2)" // 事件的显示颜色
        }
      ],
      config: {
        buttonText: { today: "今天", month: "月", week: "周", day: "日" },
        locale: "zh-cn",
        editable: true, //是否允许修改事件
        selectable: false, //是否允许用户通过单击或拖动选择日历中的对象，包括天和时间。
        eventLimit: 4, //事件个数
        allDaySlot: true, //是否显示allDay
        allDayText: "all-day",
        defaultView: "month", //显示默认视图
        businessHours: true, //区分工作时间
        aspectRatio: 0.9, //月视图下日历格子宽度和高度的比例
        slotMinutes: 30, //agenda视图下两个相邻时间之间的间隔
        timeFormat: "HH:mm", //日程的时间显示格式
        eventRender: this.eventRender, //日程渲染事件
        eventClick: this.eventClick, //点击事件
        dayClick: this.dayClick, //点击日程表上面某一天
        LunarFullCalendar: true
      },
      day1: "",
      startTime1: "" //开始时间
    };
  },
  methods: {
    //日程渲染
    eventRender(calEvent, element) {
      // console.log(calEvent);
      // console.log(element);
      // console.log(view);
      let end = this.$dayjs(calEvent.endTime).format("HH:mm");
      // console.log(end);
      let start = this.$dayjs(calEvent.startTime).format("HH:mm");
      // console.log(start);
      let schedules = calEvent.schedule;
      // console.log(schedules);
      let userss = calEvent.users.toString();
      // console.log(userss);
      let usernub = calEvent.users.length;
      // console.log(usernub);
      element[0].innerHTML = "<div>" + start + "~" + end + " " + schedules+
      "</div>" + "<div>" + " 参与人：" + " " + userss+
      "</div>" +
        "<div>" +
        "参与人数：" +
        '<i class="el-icon-user-solid"></i>' +
        usernub+
      ("</div>");
    },
    //添加人名
    add1() {
      this.visible = false;
      this.name3.push(this.inputs1);
    },
      //删除日程
    eventClick(event) {
      console.log(event);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            this.$axios.req("api/delCalendar",{id:event._id})
                .then(res=>{
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.Obtainscheduledata()
                    console.log(res);
                }).catch(error=>{
                console.log(error);
            })
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
        });
    },
    // 点击当天
    dayClick(day) {
        this.day1 = this.$dayjs(day._d).format("YYYY-MM-DD")
        let item =this.$dayjs().unix()
        // console.log(this.$dayjs(day._d).unix());
        // console.log(item);
        if(this.$dayjs(day._d).unix()<item){
            this.$message({
                type: 'info',
                message: '不能在以前添加事件'
            });
        }
        else {
            this.dialogFormVisible = true;
        }

      // console.log("dayClick", day, jsEvent);
      // console.log(day);

    },
    //添加日程
    addscheduledata() {
      console.log(this.day1 + " " + this.startTime); //因为没有加空格和拼接时间所以不能请求数据
      console.log(this.input);
      console.log(this.name3);
      console.log(this.day1 + " " + this.endTime);

      this.$axios
        .req("api/calendar", {
          users: this.name3,
          startTime: this.day1 + " " + this.startTime,
          endTime: this.day1 + " " + this.endTime,
          schedule: this.input
        })
        .then(res => {
          this.Obtainscheduledata();
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
      this.dialogFormVisible = false;
    },

    //获取日程
    Obtainscheduledata() {
      this.$axios
        .req("api/calendar")
        .then(res => {
          this.scheduledata1 = res.data.data;
          this.scheduledata1.forEach(item => {
            item.end = this.$dayjs(item.endTime).format("YYYY-MM-DD");
            item.start = this.$dayjs(item.startTime).format("YYYY-MM-DD");
            item.title = item.schedule;
          });
          this.events = this.scheduledata1;
          console.log(this.events);
          console.log(this.scheduledata1);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.Obtainscheduledata();
  },
  created() {},
  filters: {},
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.schedule-dis1 {
  display: flex;
}
</style>
