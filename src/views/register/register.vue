<template>
  <div>
    <div>
      <img
        src="../../icon/20160716104950_LPYMa.jpg"
        alt=""
        class="register-img1"
      />
    </div>
    <div class="register-dv1">
      <!--            标题-->
      <div class="register-text2">欢迎来到{{ name1 }}后台管理系统</div>
      <!--            用户名-->
      <div class="register-dis1">
        <div class="register-color1">
          *
        </div>
        <div class="register-text1">
          请输入用户名
        </div>
        <div>
          <input type="text" class="register-input1" v-model="value1" />
        </div>
      </div>
      <hr class="register-color2" />

      <!--            密码-->
      <div class="register-dis1">
        <div class="register-color1">
          *
        </div>
        <div class="register-text1">
          请输入密码
        </div>
        <div>
          <input type="text" class="register-input1" v-model="value2" />
        </div>
      </div>
      <hr class="register-color2" />
      <!--          电话-->
      <div class="register-dis1">
        <div class="register-color1">
          *
        </div>
        <div class="register-text1">
          请输入电话
        </div>
        <div>
          <input type="text" class="register-input1" v-model="value3"   onKeyUp="value=value.replace(/\D/g,'')"  onchange="value=value.replace(/\D/g,'')" >
        </div>
      </div>
      <hr class="register-color2" />
      <!--            邮箱-->
      <div class="register-dis1">
        <div class="register-color1">
          *
        </div>
        <div class="register-text1">
          请输入邮箱
        </div>
        <div>
          <input type="email" class="register-input1" v-model="value4"  />
        </div>
      </div>
      <hr class="register-color2" />

      <!--   验证码-->
      <div class="register-dis1">
        <div class="register-color1">
          *
        </div>
        <div class="register-text1">
          请输入验证码
        </div>
        <div>
          <input type="text" class="register-input2" v-model="value5" />
        </div>
        <el-button type="success" class="register-butt1" @click="sendout"
          >发送验证码</el-button
        >
      </div>
      <hr class="register-color2" />
      <div class="register-dis2">
        <div>
          <el-button type="primary" @click="logingo">返回登录</el-button>
        </div>
        <div>
          <el-button type="primary" @click="homego">立即注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {},
  props: {},
  data() {
    return {
      name1: "小白",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      num1:"",
    };
  },
  methods: {
    //去登录页面
    logingo() {
      this.$router.push({ name: "login" });
    },
    //发送手机验证码
    sendout() {
      this.$axios
        .req("api/users/sendMsg", { phone: this.value3 })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: "验证码已发送，请耐心等待",
              type: "success",
              center:true,
            });
          } else if (res.data.code === 500) {
            this.$message({
              showClose: true,
              message: "验证码发送失败",
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
    //注册数据
    homego() {
      if (
        this.value1.length >= 2 &&
        this.value1.length <= 8 &&
        this.value2.length >= 6 &&
        this.value1.length <= 16 &&
        this.value3.length === 11
      ) {
        this.$axios
          .req("api/users/register", {
            username: this.value1,
            password: this.value2,
            telephone: this.value3,
            email: this.value4,
            messagess: this.value5
          })
          .then(res => {
            if(res.data.code===500){
              this.$message({
                showClose: true,
                message: "已存在该用户",
                type: "warning",
                center:true,
              });
              // this.$router.push({name:"home"})
            }
            else if(res.data.code===200){
              this.$message({
                showClose: true,
                message: "注册成功",
                type: "warning",
                center:true,
              });
              this.$router.push({name:"home"})
            }
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }
      else if( this.value1.length < 2 ||
              this.value1.length > 8 ){
        this.$message({
          showClose: true,
          message: "用户名为2~~8个字符",
          type: "warning",
          center:true,
        });
      }
      else if( this.value2.length < 6 ||
              this.value2.length > 16 ){
        this.$message({
          showClose: true,
          message: "密码为6~~16个字符",
          type: "warning",
          center:true,
        });
      }
      else if( this.value3.length!==11){
        this.$message({
          showClose: true,
          message: "手机号码为11个字符",
          type: "warning",
          center:true,
        });
      }





    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.register-img1 {
  width: 100%;
  height: 600px;
  z-index: -1;
}
.register-dv1 {
  width: 600px;

  background-color: white;
  position: absolute;
  top: 100px;
  left: 400px;
  box-shadow: 0 2px 100px rgba(0, 0, 0, 0.7);
  opacity: 0.8;
}
.register-dis1 {
  display: flex;
  width: 100%;
  height: 54px;
  align-items: center;
}
.register-color1 {
  color: red;
  position: relative;
  left: 20px;
}
.register-input1 {
  width: 300px;
  height: 30px;
  position: relative;
  left: 41px;
  border: none;
}
.register-input2 {
  width: 200px;
  height: 30px;
  position: absolute;
  left: 126px;
  margin: -20px 0;
  border: none;
}

.register-text1 {
  font-size: 13px;
  position: relative;
  left: 25px;
}
.register-color2 {
  color: aqua;
  width: 94%;
  margin: 0 auto;
}
.register-butt1 {
  position: absolute;
  right: 40px;
}
.register-text2 {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.register-dis2 {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
}
</style>
