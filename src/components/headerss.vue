<template>
  <div>
    <div class="header-dv1">
      <div>
        {{ name1 }}
      </div>
      <div class="header-dis1">
        <div class="header-dv2">
          <img src="../icon/符号-字体.png" alt="" class="header-img2" />
        </div>
        <div class="header-dv3">
          <img :src="imageUrl" class="avatar" />
        </div>
        <div class="header-text1" v-if="user === null">亲爱的{{ name2 }}</div>
        <div class="header-text1" v-else>亲爱的{{ user.username }}</div>
        <div>
          <el-col :span="12">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom" slot="reference"></i>
              </span>
              <!--                上传头像-->
              <el-dropdown-menu slot="dropdown">
                <div>
                  <el-upload
                    class="upload-demo"
                    action="api/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :on-error="awe"
                    list-type="picture"
                  >
                    <el-dropdown-item icon="el-icon-plus" command="a"
                      >上传头像</el-dropdown-item
                    >
                  </el-upload>
                </div>
                <el-dropdown-item icon="el-icon-circle-plus" command="b"
                  >修改密码</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-plus-outline" command="c"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </div>
      </div>
    </div>

    <div>
      <el-button type="text">点击打开 Dialog</el-button>
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <div>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="原密码" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >确认修改</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerss",
  components: {},
  props: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入原密码"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      falg2: false, //
      falg1: true, //是否在选取文件后立即进行上传
      imageUrl: require("../icon/timg.jpg"), //头像路径
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },

      centerDialogVisible: false,
      visible: false,
      name1: "小影后台管理系统",
      name2: "",
      user: ""
    };
  },
  methods: {
    //头像上传
    // 文件上传成功时的钩子
    handleAvatarSuccess(file) {
      console.log(11);
      // console.log(res);
      console.log(file);
      let image1=file.response.url
      this.$axios.req("api/models/updateImg",{id:this.user._id,imgUrl:image1})
              .then(res=>{
                this.imageUrl=image1
                console.log(res);
              }).catch(error=>{
        console.log(error);
      })
    },
    awe(res,file){
      console.log(file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //修改密码
    submitForm(formName) {
      console.log(this.user);

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .req("api/users/updateUser", {
              id: this.user._id,
              username: this.user.username,
              password: this.ruleForm.age,
              newPwd: this.ruleForm.pass
            })
            .then(res => {
              this.centerDialogVisible = false;
              console.log(res);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      console.log(this.user._id);
      console.log(this.ruleForm.pass);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //下拉框事件
    handleCommand(command) {
      if (command === "c") {
        this.$router.push({ name: "login" });
        this.$message("退出登录");
        localStorage.removeItem("user");
      } else if (command === "b") {
        this.centerDialogVisible = true;
      } else if (command === "a") {
        // this.imageUrl = URL.createObjectURL(file.raw);
      }
    },
    //退出登录
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  created() {},
  filters: {},
  computed: {},
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
.header-dv2 {
  width: 30px;
  text-align: center;
}
.header-dv3 {
  width: 30px;
  text-align: center;
}
.header-text1 {
  width: 100px;
  text-align: center;
  font-size: 15px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
</style>
