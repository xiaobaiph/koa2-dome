<template>
  <div>
    <div class="maill-dis1">
      <div>
        <Dendrogram></Dendrogram>
      </div>
      <div class="maill-dis2"   >
        <div v-for="(item, index) in arr1.slice(( currentPage-1)*pageSize,currentPage*pageSize)" :key="index" >
          <div class="maill-dv1" v-if="item.region.label === label">
            <div class="maill-dv3">
              <div class="maill-dv2" :style="{ background: item.color }">
                {{ item.name }}
              </div>
              <div class="maill-text1">
                <div>
                  {{ item.name }}
                </div>
                <div class="maill-text2">
                  {{ item.region.label }}/{{ item.position }}
                </div>

                <div class="maill-dis3">
                  <div>
                    <i class="el-icon-circle-plus-outline"></i>
                  </div>
                  <div class="maill-text3">
                    快来给他添加第一个标签吧
                  </div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            <hr class="maill-color1" />

            <div class="maill-dv4">
              <div>邮箱:{{ item.mailbox }}</div>
              <div>办公电话：{{ item.telephone }}</div>
              <div>电话：{{ item.telephones }}</div>
              <div v-if="item.sex === true">
                性别:男
              </div>
              <div v-if="item.sex === false">
                性别:女
              </div>
              <div>QQ:{{ item.qq }}</div>
            </div>
          </div>

            <div class="maill-dv1" v-else-if="label==null">
                <div class="maill-dv3">
                    <div class="maill-dv2" :style="{ background: item.color }">
                        {{ item.name }}
                    </div>
                    <div class="maill-text1">
                        <div>
                            {{ item.name }}
                        </div>
                        <div class="maill-text2">
                            {{ item.region.label }}/{{ item.position }}
                        </div>

                        <div class="maill-dis3">
                            <div>
                                <i class="el-icon-circle-plus-outline"></i>
                            </div>
                            <div class="maill-text3">
                                快来给他添加第一个标签吧
                            </div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <hr class="maill-color1" />

                <div class="maill-dv4">
                    <div>邮箱:{{ item.mailbox }}</div>
                    <div>办公电话：{{ item.telephone }}</div>
                    <div>电话：{{ item.telephones }}</div>
                    <div v-if="item.sex === true">
                        性别:男
                    </div>
                    <div v-if="item.sex === false">
                        性别:女
                    </div>
                    <div>QQ:{{ item.qq }}</div>
                </div>
            </div>




          <br />
        </div>
      </div>
    </div>
    <!--        分页-->
    <div>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[21,100, 150, 200]"
          :page-size="21"
          layout="total, sizes, prev, pager, next, jumper"
          :total="arr1.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Dendrogram from "../../components/dendrogram/dendrogram";
export default {
  name: "maillist",
  components: {
    Dendrogram
  },
  props: {},
  data() {
    return {
      arr1: [],
        currentPage:1,
        pageSize:21,
    };
  },
  methods: {
    //分页点击事件
    handleSizeChange(val) {
        this.pageSize=val
      console.log(  this.pageSize);

    },
    handleCurrentChange(val) {
        this.currentPage=val
      console.log( this.currentPage);
    },

    maillistdata() {
      this.$axios
        .req("api/mock/maillist")
        .then(res => {
          this.arr1 = res.data.data;
          console.log(this.arr1);
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.maillistdata();
  },
  created() {},
  filters: {},
  computed: {
    label() {
      return this.$store.state.label;
    }
  },
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.maill-dis1 {
  display: flex;
}
.maill-dv1 {
  width: 260px;
  height: 200px;
  background-color: #ffffff;
  margin-left: 40px;
}
.maill-dis2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.maill-dv2 {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  line-height: 60px;
  color: #eeeeee;
}
.maill-dv3 {
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.maill-text1 {
  text-align: left;
  margin-left: 20px;
}
.maill-text2 {
  font-size: 12px;
}
.maill-dv4 {
  width: 100%;
  text-align: left;
  font-size: 13px;
  margin-left: 20px;
}
.maill-color1 {
  background-color: #f4f4f4;
  border: none;
  height: 1px;
}
.maill-text3 {
  font-size: 12px;
}

.maill-dis3 {
  display: flex;
  color: #e2e2e2;
  height: 20px;
  line-height: 20px;
}
    .el-menu-vertical-demo el-menu{
        width: 100px;
    }
</style>
