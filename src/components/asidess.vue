<template>
  <div>
    <div class="asidess-dv1">
      <el-menu
        :default-active="index1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        style="{width: 150px}"
      >
        <div v-for="(item, index) in sidebar1" :key="index">
          <div  @click="gopage1(item,index)">
          <div v-if="index===0 || index===1 || index===2">
            <el-menu-item :index="String(index)" @click="asidego(item, index)">
              <i :class="item.icon" class="asidess-icon1"></i>
              <span slot="title" class="asidess-text1">{{ item.name }}</span>
              <span class="asidess-font3" v-if="isCollapse===false && newflag[index]===true" @click="news1(item,index)">
                {{Tips}}
              </span>
              <span class="asidess-font4" v-else-if="isCollapse===true && newflag[index]===true">
             ·
              </span>
            </el-menu-item>
          </div>
<!--              <div v-else-if="index===3">-->
<!--              <el-submenu index="3" class="">-->
<!--                  <template slot="title" class="element&#45;&#45;dv2">-->
<!--                      <i :class="item.icon" ></i>-->
<!--                      <span slot="title"  class="asidess-text1">{{item.name}}</span>-->
<!--                      <span class="asidess-font5" v-if="isCollapse===false && newflag[3]===true" @click="news2()">-->
<!--                {{Tips}}-->
<!--              </span>-->
<!--                  </template>-->
<!--                  <el-menu-item-group v-for="(item1,index1) in item.children" :key="index1">-->
<!--                      <el-menu-item index="3-index1">{{item1.name}}</el-menu-item>-->
<!--                  </el-menu-item-group>-->
<!--              </el-submenu>-->
<!--              <span class="asidess-font6" v-if="isCollapse===true && newflag[3]===true">-->
<!--             ·-->
<!--              </span>-->
<!--              </div>-->

<!--              <div v-if="index===4">-->
<!--                  <el-submenu index="4" class="">-->
<!--                      <template slot="title" class="element&#45;&#45;dv2">-->
<!--                          <i :class="item.icon" ></i>-->
<!--                          <span slot="title"  class="asidess-text1">{{item.name}}</span>-->
<!--                          <span class="asidess-font5" v-if="isCollapse===false && newflag[4]===true" @click="news2()">-->
<!--                {{Tips}}-->
<!--              </span>-->
<!--                      </template>-->
<!--                      <el-menu-item-group v-for="(item2,index2) in item.children" :key="index2">-->
<!--                          <el-menu-item index="4-index2" @click="gopage4">{{item2.name}}</el-menu-item>-->
<!--                      </el-menu-item-group>-->
<!--                  </el-submenu>-->
<!--                  <span class="asidess-font6" v-if="isCollapse===true && newflag[4]===true">-->
<!--             ·-->
<!--              </span>-->

<!--              </div>-->


        </div>
        </div>

          <el-submenu index="3" class="">
            <template slot="title" class="element--dv2">
              <i class="el-icon-user" ></i>
              <span slot="title"  class="asidess-text1">组织员工</span>
              <span class="asidess-font5" v-if="isCollapse===false && newflag[3]===true" @click="news2()">
                {{Tips}}
              </span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="gooffer">offer管理</el-menu-item>
              <el-menu-item index="3-2" @click="goperson">人员信息</el-menu-item>
              <el-menu-item index="3-3" @click="gofund">薪酬管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        <span class="asidess-font6" v-if="isCollapse===true && newflag[3]===true">
             ·
              </span>


          <el-submenu index="4" class="el-submenu__titless1">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span class="asidess-font5" v-if="isCollapse===false && newflag[4]===true" @click="news3()">
                {{Tips}}
              </span>
              <span slot="title" class="asidess-text1">表单页</span>
            </template>
            <el-menu-item-group >
              <el-menu-item index="4-1" @click="gopage4">分布表单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        <span class="asidess-font6" v-if="isCollapse===true && newflag[4]===true">
             ·
              </span>

      </el-menu>

<div v-for="(item,index) in text1" :key="index">

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
    <el-button @click="cancelbut">取 消</el-button>
    <el-button type="primary" @click="surebut(item,index)">确 定</el-button>
  </span>
      </el-dialog>

</div>
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
      newflag:[],
        index1:"0",



      sidebar1: [
        {
          name: "首页",
          icon: "el-icon-location",
          index: 0
        },
        {
          name: "日程管理",
          icon: "el-icon-date",
          index: 1
        },
        {
          name: "通讯录",
          icon: "el-icon-document",
          index: 2,
        },

        // {
          //     name:"组织员工",
          //     icon:"el-icon-user",
          //     index:3,
          //     children:[
          //         {
          //             name: "offer管理",
          //             index:3-1,
          //         },
          //         {
          //             name: "人员信息",
          //             index:3-2,
          //         },
          //
          //         {
          //             name: "薪酬管理",
          //             index:3-3,
          //
          //         },
          //     ],
          // },
          // {
          //     name:"表单页",
          //     icon:"el-icon-tickets",
          //     index:4,
          //     children:[
          //         {
          //             name: "分布表单",
          //             index:4-1,
          //         },
          //     ],
          // },
      ],
    };
  },
  methods: {
      //去资金管理
      gofund(){
          this.$router.push({path:"/fundmanagement"})
          localStorage.removeItem('index')
          localStorage.setItem('index',JSON.stringify('3-3'))
      },
      //去人员信息
      goperson(){
          this.$router.push({path:"/personnel"})
          localStorage.removeItem('index')
          localStorage.setItem('index',JSON.stringify('3-2'))
      },
      //去offer
      gooffer(){
          this.$router.push({path:"/offeradministration"})
          localStorage.removeItem('index')
          localStorage.setItem('index',JSON.stringify('3-1'))
      },
      //去表单
      gopage4(){
          console.log(111);
          this.$router.push({path:"/forms"})
          localStorage.removeItem('index')
          localStorage.setItem('index',JSON.stringify('4-1'))


      },
    //更新消息提示
    newsdata(){
        console.log(this.index1);
        this.$axios.req("api/mock/news")
              .then(res=>{
                this.text1=res.data.data
                if(res){
                  this.text1.forEach(item=>{
                    this.newflag.push(item.boer)

                  })
                  // console.log(this.newflag);


                }
                // console.log( this.text1);
              }).catch(error=>{
        console.log(error);
      })
    },
      //去页面
      gopage1(item,index){
          if(index===1){
              this.$router.push({path:"/schedule"})
              localStorage.removeItem('index')
              localStorage.setItem('index',JSON.stringify(index))
          }
         else if(index===2){
              this.$router.push({path:"/maillist"})
              localStorage.removeItem('index')
             localStorage.setItem('index',JSON.stringify(index))
          }
          else if(index===0){
              this.$router.push({path:"/"})
              localStorage.removeItem('index')
              localStorage.setItem('index',JSON.stringify(index))
          }


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
    //弹出框的取消按钮
    cancelbut(){
      this. dialogVisible=false
    },
    //弹出框确定按钮
    surebut(item,index){
      this. dialogVisible=false
      this.newflag[index]=false
      console.log(index);
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
      this.index1=JSON.parse(localStorage.getItem('index'))
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
   @import "../style/commom";

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
  height: 400px;
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

   .el-submenu__title{
        width: 140px;
    }
     .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 160px;
        min-height: 400px;
    }

</style>
