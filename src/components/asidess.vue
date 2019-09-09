<template>
  <div>
    <div class="asidess-dv1">
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <div v-for="(item, index) in sidebar1" :key="index">
          <div>
          <div>
            <el-menu-item :index="String(index)" @click="asidego(item, index)">
              <i :class="item.icon" class="asidess-icon1"></i>
              <span slot="title" class="asidess-text1">{{ item.name }}</span>
              <span class="asidess-font3" v-if="isCollapse===false" @click="news1(item,index)">
                {{Tips}}
              </span>
              <span class="asidess-font4" v-else-if="isCollapse===true">
             ·
              </span>
            </el-menu-item>
          </div>

        </div>
        </div>
          <el-submenu index="3">
            <template slot="title" class="element--dv2">
              <i class="el-icon-user" ></i>
              <span slot="title"  class="asidess-text1">组织员工</span>
              <span class="asidess-font5" v-if="isCollapse===false" @click="news2()">
                {{Tips}}
              </span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">offer管理</el-menu-item>
              <el-menu-item index="3-2">人员信息</el-menu-item>
              <el-menu-item index="3-3">薪酬管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        <span class="asidess-font6" v-if="isCollapse===true">
             ·
              </span>


          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span class="asidess-font5" v-if="isCollapse===false" @click="news3()">
                {{Tips}}
              </span>
              <span slot="title" class="asidess-text1">表单页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">分布表单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        <span class="asidess-font6" v-if="isCollapse===true">
             ·
              </span>

      </el-menu>


      <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose1">

        <div>
            <span >
          <div>
            1. {{texts1}}
          </div>
          <div>
            2. {{texts2}}
          </div>
               </span>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
    <div >

    </div>

  </div>
</template>

<script>

export default {
  name: "asidess",
  components: {},
  props: {

  },
  data() {
    return {
      dialogVisible: false,
      Tips:"new",
      text1:[],
      texts1:"",
      texts2:"",



      sidebar1: [
        {
          name: "首页",
          icon: "el-icon-location",
          index: 1
        },
        {
          name: "日程管理",
          icon: "el-icon-date",
          index: 2
        },
        {
          name: "通讯录",
          icon: "el-icon-document",
          index: 3
        },

      //   {
      //       name:"组织员工",
      //       icon:"el-icon-user",
      //       index:4,
      //   },
      //   {
      //       name:"表单页",
      //       icon:"el-icon-tickets",
      //       index:5,
      //   },
      ],
    };
  },
  methods: {
    //更新消息提示
    newsdata(){
      this.$axios.req("api/mock/news")
              .then(res=>{
                this.text1=res.data.data
                console.log( this.text1);
              }).catch(error=>{
        console.log(error);
      })
    },

    //NEW的弹出框
    news1(item,index){
      this. dialogVisible=true
      this.texts1=this.text1[index].text1
      this.texts2=this.text1[index].text2

    },
    news2(){
      this. dialogVisible=true
      this.texts1=this.text1[3].text1
      this.texts2=this.text1[3].text2
    },
    news3(){
      this. dialogVisible=true
      this.texts1=this.text1[4].text1
      this.texts2=this.text1[4].text2
    },


    handleClose1(done) {
      this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
    },
    handleOpen(key, keyPath) {
      console.log(this.isCollapse);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    asidego(item, index) {
      console.log(index);
    }
  },
  mounted() {
    this.newsdata()
  },
  created() {},
  filters: {},
  computed: {
    isCollapse(){
      return this.$store.state.flag
    }

  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.asidess-icon1 {
  position: absolute;
  left: 25px;
  margin-top: 20px;
}
.asidess-text1 {
  position: absolute;
  font-size: 12px;
  left: 50px;
}
.asidess-dv1 {
  height: 500px;
  overflow: hidden;
  float:left;
  font-size: 12px;
}
.el-menu-item{
  font-size: 12px;
}
.el-menu-item{
  width: 160px;
}
  .asidess-font3{
    color: red;
    font-size: 12px;
  position: absolute;
    left: 100px;
  }
  .asidess-font4{
    color: red;
    font-size: 15px;
    position: relative;
    top: -5px;
    left: 30px;
  }
.asidess-font5{
  color: red;
  font-size: 12px;
  position: absolute;
  left: 100px;
}
.asidess-font6{
  color: red;
  position: absolute;
  left: 50px;
  margin-top: -36px;
}

</style>
