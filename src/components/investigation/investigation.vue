<template>
  <div>
    <div class="element--text1">
      <el-card class="box-card ">
        <div slot="header" class="clearfix">
          <span>网站问卷调查</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <el-table ref="filterTable" :data="tableData" style="width: 100%">
          <!--                   问卷名称-->
          <el-table-column prop="name" label="问卷名称" width="180">
          </el-table-column>
          <!--                   问卷描述-->
          <el-table-column prop="describe" label="问卷描述" width="180">
          </el-table-column>

          <!--                   创建时间-->

          <el-table-column
            prop="deadline"
            label="创建时间"
            sortable
            width="180"
            column-key="date"
            :filters="[
              { text: '2016-05-01', value: '2016-05-01' },
              { text: '2016-05-02', value: '2016-05-02' },
              { text: '2016-05-03', value: '2016-05-03' },
              { text: '2016-05-04', value: '2016-05-04' }
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>

          <!--                   截止时间-->

          <el-table-column
            prop="creationtime"
            label="截止时间"
            sortable
            width="180"
            column-key="date"
            :filters="[
              { text: '2016-05-01', value: '2016-05-01' },
              { text: '2016-05-02', value: '2016-05-02' },
              { text: '2016-05-03', value: '2016-05-03' },
              { text: '2016-05-04', value: '2016-05-04' }
            ]"
            :filter-method="filterHandler"
          >
          </el-table-column>

          <!--                   问卷主题-->
          <el-table-column
            prop="theme"
            label="问卷主题"
            width="100"
            :filters="[
              { text: '已截止', value: 'true' },
              { text: '未完成', value: 'false' }
            ]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                v-if="scope.row.theme === true"
                :type="scope.row.theme === true ? 'primary' : 'success'"
                disable-transitions
              >
                已截止</el-tag
              >
              <el-tag
                v-if="scope.row.theme === false"
                :type="scope.row.theme === true ? 'primary' : 'success'"
                disable-transitions
              >
                未完成
              </el-tag>
            </template>
          </el-table-column>

          <!--                   网站名称-->
          <el-table-column
            prop="website"
            label="问卷主题"
            width="100"
            :filters="[
              { text: '家', value: '家' },
              { text: '公司', value: '公司' }
            ]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
            <template slot-scope="scope">
              <el-tag
                v-if="scope.row.website === 1"
                type="primary"
                disable-transitions
              >
                百度
              </el-tag>
              <el-tag
                v-if="scope.row.website === 2"
                type="warning"
                disable-transitions
              >
                掘金
              </el-tag>
              <el-tag
                v-if="scope.row.website === 3"
                type="danger"
                disable-transitions
              >
                豆瓣
              </el-tag>
              <el-tag
                v-if="scope.row.website === 4"
                type="info"
                disable-transitions
              >
                Github
              </el-tag>
            </template>
          </el-table-column>

          <!--                   网站二维码-->
          <el-table-column
            prop="website"
            label="操作"

            align="center"
            :filter-method="filterTag"
            filter-placement="bottom-end"
          >
<!--            <el-table-column label="操作"  align="center">-->
<!--              <template slot-scope="scope">-->
<!--                <el-button-->
<!--                        size="mini"-->
<!--                        type="primary"-->
<!--                        @click="handleEdit(scope.$index, scope.row)">编辑试用期</el-button>-->
<!--              </template>-->
<!--            </el-table-column>-->
            <template slot-scope="scope">
              <el-tag
                v-if="scope.row.website === 1"
                type="primary"
                disable-transitions
              >
                <el-button size="mini" type="primary" @click="qrcode1"
                  >查看网站详情</el-button
                >
              </el-tag>
              <el-tag
                v-if="scope.row.website === 2"
                type="warning"
                disable-transitions
              >
                <el-button   size="mini" type="primary" @click="qrcode2"
                  >查看网站详情</el-button
                >
              </el-tag>
              <el-tag
                v-if="scope.row.website === 3"
                type="danger"
                disable-transitions
              >
                <el-button  size="mini" type="primary" @click="qrcode3"
                  >查看网站详情</el-button
                >
              </el-tag>
              <el-tag
                v-if="scope.row.website === 4"
                type="info"
                disable-transitions
              >
                <el-button   size="mini" type="primary" @click="qrcode4"
                  >查看网站详情</el-button
                >
              </el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div>
      <el-dialog
        title="复制地址"
        :visible.sync="centerDialogVisible"
        width="60%"
        center
      >
            <div>
              <div style="margin-top: 15px;">
                <el-input placeholder="请输入内容" v-model="input1"  class="box-but1">
                  <template slot="append">  <el-button type="danger" data-clipboard-action="copy" class="cobyDomObj" :data-clipboard-text="input1" @click="copyLink">复制</el-button></template>
                </el-input>
              </div>
</div>
        <br>
<div>
  如果当前不方便复制可以扫描下方二维码
</div>
          <div>
            <div id="qrCode">
              <div id="code"></div>
              <canvas id="canvas"  class="box-dv1"></canvas>
            </div>
          </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import QRCode from "qrcode";
export default {
  name: "investigation",
  components: {},
  props: {},
  data() {
    return {
      centerDialogVisible: false,
      tableData: [],
      msg: "hello vue",
      codes: "",
        input1:"",
      getContext:"",
    };
  },

  methods: {
    //复制按钮
    copyLink() {
      let _this = this;
      let clipboardObj = new this.clipboard(".cobyDomObj");
      clipboardObj .on('success', function () {
        _this.$toast("复制成功")
      });
      clipboardObj .on('error', function () {
        _this.$toast("复制失败")
      });
    },
    // 百度
    qrcode1() {
      this.centerDialogVisible = true;
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, "https://www.baidu.com", function(error) {
        if (error) console.error(error);
        console.log("QRCode success!");
      });
        this.input1="https://www.baidu.com"
    },
    // 掘金
    qrcode2() {
      this.centerDialogVisible = true;
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, "https://juejin.im/", function(error) {
        if (error) console.error(error);
        console.log("QRCode success!");
      });
       this.input1="https://www.douban.com/"
    },

    // 豆瓣
    qrcode3() {
      this.centerDialogVisible = true;
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, "https://www.douban.com/", function(error) {
        if (error) console.error(error);
        console.log("QRCode success!");
      });
        this.input1= "https://www.douban.com/"
    },
    // guihub

    qrcode4() {
      this.centerDialogVisible = true;
      //var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, "https://github.com", function(error) {
        if (error) console.error(error);
        console.log("QRCode success!");
      });
        this.input1= "https://github.com"
    },
    investigadata() {
      this.$axios
        .req("api/mock/investigation")
        .then(res => {
          this.tableData = res.data.data;
          console.log(this.tableData);
          // console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  },
  mounted() {
    this.investigadata();
    // this.qrcode1();
    //   this.qrcode2();
    //   this.qrcode3();
    //   this.qrcode4();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
@import "../../style/commom";

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
  width: 96%;
  margin: 0 auto;
  text-align: center;
}
.inves-but1 {
  height: 30px;
}
.el-table {
  text-align: center;
}
.inves-text1 {
  margin: 0 auto;
}
  .box-but1{

    width: 700px;
  }
  .box-dv1{
    width: 500px;

  }
</style>
