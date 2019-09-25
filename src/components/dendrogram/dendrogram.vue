<template>
  <div>
    <div class="dendrog-dv1">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </div>
  </div>
</template>

<script>
    import data1 from "../../static/dendrogram.json"
export default {
  name: "dendrogram",
  components: {},
  props: {
    arr2:{
      type:Array
    },

  },
  data() {
    return {
        data:data1,
      // data: [
      //   {
      //     label: "区域中心",
      //     children: [
      //       {
      //         label: "哈尔滨公司"
      //       },
      //       {
      //         label: "微易旅游",
      //         children: [
      //           {
      //             label: "微易"
      //           }
      //         ]
      //       },
      //       {
      //         label: "测试部门"
      //       },
      //
      //       {
      //         label: "北方区域中心",
      //         children: [
      //           {
      //             label: "东南亚事业部"
      //           },
      //           {
      //             label: "B2B事业部",
      //             children: [
      //               {
      //                 label: "电商部",
      //                 children: [
      //                   {
      //                     label: "产品组"
      //                   },
      //                   {
      //                     label: "途牛组"
      //                   },
      //                   {
      //                     label: "携程组"
      //                   },
      //                   {
      //                     label: "其他电商组"
      //                   },
      //                   {
      //                     label: "资料组"
      //                   },
      //                   {
      //                     label: "运营支持组"
      //                   }
      //                 ]
      //               }
      //             ]
      //           },
      //           {
      //             label: "华北销售区",
      //             children: [
      //               {
      //                 label: "京津组"
      //               },
      //               {
      //                 label: "济南公司"
      //               },
      //               {
      //                 label: "石家庄公司"
      //               },
      //               {
      //                 label: "河北组"
      //               }
      //             ]
      //           },
      //           {
      //             label: "中原销售区",
      //             children: [
      //               {
      //                 label: "太原公司"
      //               },
      //               {
      //                 label: "蒙古公司"
      //               },
      //               {
      //                 label: "郑州公司"
      //               }
      //             ]
      //           },
      //           {
      //             label: "单团部"
      //           },
      //           {
      //             label: "新华销售业务部"
      //           },
      //           {
      //             label: "产品操作部",
      //             children: [
      //               {
      //                 label: "欧洲组"
      //               },
      //               {
      //                 label: "中东非组"
      //               },
      //               {
      //                 label: "票务组"
      //               },
      //               {
      //                 label: "单团组"
      //               }
      //             ]
      //           },
      //           {
      //             label: "签证部",
      //             children: [
      //               {
      //                 label: "外联部"
      //               }
      //             ]
      //           }
      //         ]
      //       },
      //
      //       {
      //         label: "西南区域中心",
      //         children: [
      //           {
      //             label: "西南总经理办公室"
      //           },
      //           {
      //             label: "成都公司",
      //             children: [
      //               {
      //                 label: "市场营销部"
      //               },
      //               {
      //                 label: "单团计调部"
      //               },
      //               {
      //                 label: "票务部"
      //               },
      //               {
      //                 label: "南亚计调部"
      //               },
      //               {
      //                 label: "欧洲散拼计调部"
      //               },
      //               {
      //                 label: "签证部"
      //               },
      //               {
      //                 label: "财务部"
      //               },
      //               {
      //                 label: "重庆办事处"
      //               },
      //               {
      //                 label: "电商部"
      //               },
      //               {
      //                 label: "综合管理部"
      //               },
      //               {
      //                 label: "销售部",
      //                 children: [
      //                   {
      //                     label: "地州区"
      //                   },
      //                   {
      //                     label: "成都区"
      //                   },
      //                   {
      //                     label: "贵州区"
      //                   }
      //                 ]
      //               }
      //             ]
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],
      defaultProps: {
        children: "children",
        label: "label",
        arr2:[],
      },
      arr3:[],
    };
  },
  methods: {
    handleNodeClick(data) {
      if(this.arr3!==null){
        this.arr3=[]
      }
      console.log(data);
      console.log(this.arr2);
this.arr2.forEach(item=>{
  if(item.region.label===data.label){
    this.arr3.push(item)
  }
})
      console.log(this.arr3);
      this.$emit('handleNodeClick',this.arr3)

    }
  },
  mounted() {

  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.dendrog-dv1 {
  width: 200px;
}
</style>
