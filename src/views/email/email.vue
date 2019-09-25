<template>
  <div>
    <div>
      <img
        src="../../icon/20160716104950_LPYMa.jpg"
        alt=""
        class="email-img1"
      />
    </div>
    <div class="email-dv1">
      <!--            标题-->
      <div class="email-text2">欢迎来到{{ name1 }}后台管理系统</div>
      <!--            用户名-->
      <div class="email-dis1">
        <div class="email-color1">
          *
        </div>
        <div class="email-text1">
          请输入用户名
        </div>
        <div>
          <input type="text" class="email-input1" v-model="value1" />
        </div>
      </div>
      <hr class="email-color2" />

      <!--     邮箱-->
      <div class="email-dis1">
        <div class="email-color1">
          *
        </div>
        <div class="email-text1">
          请输入邮箱
        </div>
        <div>
          <input type="email" class="email-input1" v-model="value2" />
        </div>
      </div>
      <hr class="email-color2" />

      <div class="email-dis2">
        <div>
          <el-button type="primary" @click="gologin">返回登录</el-button>
        </div>
        <div>
          <el-button type="primary" @click="Passwordback">找回密码</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eamil",
  components: {},
  props: {},
  data() {
    return {
      value1: "",
      value2: "",
      name1: ""
    };
  },
  methods: {
    // emaildata() {
    //   this.value2 = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
    //     console.log(this.value2);
    //
    // },


    //找回密码
    Passwordback() {
      this.$axios
        .req(`api/users/emailcode`, {
          username: this.value1,
          email: this.value2
        })
        .then(res => {
          if(res.data.code===200){
            this.$message({
              showClose: true,
              message: "已发送，请耐心等待",
              type: "success",
              center:true,
            });
          }
          if(res.data.code===500){
            this.$message({
              showClose: true,
              message: "发送失败，请重新尝试",
              type: "warning",
              center:true,
            });
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    gologin() {
      this.$router.push({ name: "login" });
    }
  },
  mounted() {
    // this.emaildata();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.email-img1 {
  width: 100%;
  height: 600px;
  z-index: -1;
}
.email-dv1 {
  width: 600px;
  position: absolute;
  top: 100px;
  left: 400px;
  box-shadow: 0 2px 100px rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  background-color: white;
}
.email-dis1 {
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
}
.email-color1 {
  color: red;
  position: relative;
  left: 20px;
}
.email-input1 {
  width: 300px;
  height: 30px;
  position: relative;
  left: 41px;
  border: none;
}

.email-text1 {
  font-size: 13px;
  position: relative;
  left: 25px;
}
.email-color2 {
  color: aqua;
  width: 94%;
  margin: 0 auto;
}
.email-butt1 {
  position: absolute;
  right: 40px;
}
.email-text2 {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.email-dis2 {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
}
</style>
