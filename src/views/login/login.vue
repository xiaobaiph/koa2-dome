<template>
  <div>
    <div>
      <img
        src="../../icon/20160716104950_LPYMa.jpg"
        alt=""
        class="login-img1"
      />
    </div>
    <div class="login-dv1">
      <!--            标题-->
      <div class="login-text2">欢迎来到{{ name1 }}后台管理系统</div>
      <!--            用户名-->
      <div class="login-dis1">
        <div class="login-color1">
          *
        </div>
        <div class="login-text1">
          请输入用户名
        </div>
        <div>
          <input type="text" class="login-input1" v-model="value1" />
        </div>
      </div>
      <hr class="login-color2" />

      <!--            密码-->
      <div class="login-dis1">
        <div class="login-color1">
          *
        </div>
        <div class="login-text1">
          请输入密码
        </div>
        <div>
          <input type="text" class="login-input2" v-model="value2" />
        </div>
        <el-button type="success" class="login-butt1" @click="goeamil"
          >忘记密码</el-button
        >
      </div>
      <hr class="login-color2" />

      <!--   验证码-->
      <div class="login-dis1">
        <div class="login-color1">
          *
        </div>
        <div class="login-text1">
          请输入验证码
        </div>
        <div>
          <input type="text" class="login-input2" v-model="value3" />
        </div>
        <div v-html="code1" class="login-code1" @click="codes"></div>
      </div>
      <hr class="login-color2" />
      <div class="login-dis2">
        <div>
          <el-button type="primary" @click="logins">立即登录</el-button>
        </div>
        <div>
          <el-button type="primary" @click="registergo">返回注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      name1: "小白",
      value1: "",
      value2: "",
      value3: "",
      code1: []
    };
  },
  methods: {
    //忘记密码
    goeamil() {
      this.$router.push({ name: "email" });
    },
    //登录
    logins() {

      if(this.value1.length >=2 && this.value1.length <= 8 && this.value2.length>=6 && this.value2.length <= 16 ){
        this.$axios
                .req("api/users/login", {
                  username: this.value1,
                  password: this.value2,
                  code: this.value3
                })
                .then(res => {
                  if(res.data.code===200){
                    this.$message({
                      showClose: true,
                      message: '欢迎进入小影系统',
                      type: 'success',
                      center:true,
                    });
                    localStorage.setItem("user",JSON.stringify(res.data.data.user))
                    this.$router.push({path:"/"})
                    console.log(JSON.stringify(res.data.data.user));
                    this.$store.state.user=res.data.data.user

                  }
                  else if(res.data.code===500){
                    this.$message({
                      showClose: true,
                      message: res.data.msg,
                      type: 'warning',
                      center:true,
                    });
                  }
                  console.log(res);
                })
                .catch(error => {
                  console.log(error);
                });
  }
      else if(this.value1.length < 2 || this.value1.length > 8){
        this.$message({
          showClose: true,
          message: '用户名错误',
          type: 'warning',
          center:true,
        });
      }
      else if(this.value2.length < 6 || this.value2.length > 16  ){
        this.$message({
          showClose: true,
          message: '密码输入错误',
          type: 'warning',
          center:true,
        });
      }



    },
    //验证码
    codes() {
      this.$axios
        .req("api/users/graphical")
        .then(res => {
          this.code1 = res.data;
          // console.log(this.code1);
        })
        .catch(error => {
          console.log(error);
        });
    },
      registergo(){

        this.$router.push({name:"register"})


      },

  },
  mounted() {
    this.codes();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.login-img1 {
  width: 100%;
  height: 600px;
  z-index: -1;
}
.login-dv1 {
  width: 600px;

  background-color: white;
  position: absolute;
  top: 100px;
  left: 400px;
    box-shadow: 0 2px 100px rgba(0, 0, 0, 0.7);
    opacity:0.8
}
.login-dis1 {
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
}
.login-color1 {
  color: red;
  position: relative;
  left: 20px;
}
.login-input1 {
  width: 300px;
  height: 30px;
  position: relative;
  left: 41px;
  border: none;
    background:none;

}
.login-input2 {
  width: 200px;
  height: 30px;
  position: absolute;
  left: 126px;
  margin: -20px 0;
  border: none;
  text-transform: lowercase;
    background:none;

}

.login-text1 {
  font-size: 13px;
  position: relative;
  left: 25px;
}
.login-color2 {
  color: aqua;
  width: 94%;
  margin: 0 auto;
}
.login-butt1 {
  position: absolute;
  right: 90px;
}
.login-text2 {
  width: 100%;
  height: 50px;
  line-height: 80px;
  text-align: center;
}
.login-dis2 {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
}
.login-code1 {
  position: absolute;
  right: 30px;
}
</style>
