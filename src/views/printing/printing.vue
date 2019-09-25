<template>
  <div>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>账单详情</span>
        </div>
        <div>
          <div class="printing-dv1" id="printTest">
            <div class="printing-dv2">付款账户：{{payment }}</div>
            <div class="printing-dv2">收款人账户：{{Receivables}}</div>
            <div class="printing-dv2">付款人姓名：{{ name }}</div>
            <div class="printing-dv2">
              收款金额：<span class="forms-text2">{{money }}</span
              >元
            </div>
          </div>
          <div class="printing-dis1">
            <div>
              <el-button style="margin-top: 12px;" @click="gohome"
                >返回首页</el-button
              >
            </div>
            <div >
              <el-button
                style="margin-top: 12px;"
                @click="goPrinting"
                type="primary"
                v-print="'#printTest'"
                >打印</el-button
              >
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "printing",
  components: {},
  props: {},
  data() {
    return {
      Receivables:"",
      payment:"",
      name:"",
      money:"",
    };
  },
  methods: {
    //去首页
    gohome() {
      this.$router.push({ name: "home" });
      localStorage.removeItem('Receivables')
      localStorage.removeItem('payment')
      localStorage.removeItem('payment')
      localStorage.removeItem('payment')
    },
    //去打印
    goPrinting() {
      console.log(11);
    }
  },
  mounted() {
    this.Receivables=JSON.parse(localStorage.getItem('Receivables'))
    this.payment=JSON.parse(localStorage.getItem('payment'))
    this.name=JSON.parse(localStorage.getItem('payment'))
    this.money=JSON.parse(localStorage.getItem('payment'))


  },
  created() {},
  filters: {},
  computed: {
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
  width: 300px;
  margin: 60px auto;
}
.printing-dv1 {
  width: 200px;
  height: 160px;
}
.printing-dv2 {
  height: 30px;
  line-height: 30px;
}
.printing-dis1 {
  display: flex;
  justify-content: space-around;
}
</style>
