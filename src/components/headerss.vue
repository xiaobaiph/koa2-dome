<template>
  <div>
    <div class="header-dv1">
      <div>
        {{ name1 }}
      </div>
      <div class="header-dis1">
        <div class="header-dv2">
          <img src="../icon/符号-字体.png" alt="" class="header-img2">
        </div>
        <div class="header-dv3">
          <img src="../icon/timg.jpg" alt="" class="header-img1" />
        </div>
        <div class="header-text1" v-if="user==null"> 亲爱的{{name2}}</div>
        <div class="header-text1" v-else >亲爱的{{user.username}}</div>
          <div>
              <i class="el-icon-caret-bottom"></i>
          </div>
          <div>


          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerss",
  components: {},
  props: {},
  data() {
    return {
      name1: "小影后台管理系统",
      name2: ""
    };
  },
  methods: {
      handleOpen(key, keyPath) {
          console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
          console.log(key, keyPath);
      }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {

    user(){
      return this.$store.state.user
    }


  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.header-dv1 {
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
    align-items: center;
}
.header-img1 {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.header-dis1 {
  display: flex;
  align-items: center;
    justify-content: space-between;
}
  .header-dv2{
  width: 30px;
    text-align: center;
  }
.header-dv3{
  width: 30px;
  text-align: center;
}
  .header-text1{
    width: 100px;
    text-align: center;
    font-size: 15px;
  }
</style>
