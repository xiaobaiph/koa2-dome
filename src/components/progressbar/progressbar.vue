<template>
  <div>
    <div class="home-dv1" >
      <div
        class="home-dis1"
      >
        <div v-for="(item,index) in pedometer" :key="index">
          <div   @click="falgnumb1(item,index)" class="home-dv2" >
            <div v-if="flag1===index">
              <hr class="hr-color1" :color="color[index].color1">
            </div>
            <div class="home-dis3">
            <div>
              <div >
                {{item.name}}
              </div>
              <div v-if="flag1===index">
                <countTo
                        :startVal="startVal"
                        :endVal="item.revenue"
                        :duration="3000"
                ></countTo>
              </div>
              <div v-show="flag1!==index">
                <countTo
                        :startVal="item.revenue"
                        :endVal="item.revenue"
                        :duration="3000"
                ></countTo>
              </div>
            </div>
            <!--            圆形计数器-->
            <div v-if="flag1===index">
              <circle-progress
                      :id="1"
                      :width="70"
                      :radius="6"
                      :progress="parseInt(item.revenue/100000*100)"
                      :duration="1000"
                      :barColor="color[index].color1"
                      backgroundColor="#FFE8CC"
                      :isRound="true"
                      :isAnimation="true"
              >
              </circle-progress>
              <div class="home-dv3">
                {{parseInt(item.revenue/100000*100)}}%
                完成率
              </div>
            </div>

              <div v-show="flag1!==index">
                <circle-progress
                        :id="2"
                        :width="70"
                        :radius="6"
                        :progress="parseInt(item.revenue/100000*100)"
                        :duration="1000"
                        barColor="#F2AE57"
                        backgroundColor="#FFE8CC"
                        :isRound="true"
                        :isAnimation="false"
                >
                </circle-progress>

              </div>




            </div>

          </div>

        </div>
        </div>



    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import CircleProgress from '../circle-progress'

export default {
  name: "progressbar",
  components: {
    countTo,
    CircleProgress,
  },
  props: {},
  data() {
    return {
      startVal: 0,
      color:[
        {
          id:0,
        color1:"red",

      },
        {
          id:2,
          color1:"yellow",
        },
        {
          id:3,
          color1:"#42b983",

        }

      ],
          pedometer: [],
      flag1: 0,
      num1:"70",
    };
  },
  methods: {
    // tab切换
    falgnumb1(item,index) {
      this.startVal= this.startVal+0
        this.flag1 = index;
      },
    pricedata1() {
      this.$axios
        .req("api/mock/prices")
        .then(res => {
          this.pedometer = res.data.data
          // console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.pricedata1();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.home-dv1 {
  width: 1150px;
  height: 100px;
  box-shadow: 0 2px 100px rgba(0, 0, 0, 0.4);
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.home-dis1 {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.home-dv2{
  width: 380px;

}
.hr-color1{
  height: 5px;
  border: none;

}
.home-dis2{
  display: flex;
}
  .home-dis3{
    display: flex;
    justify-content: space-around;
  }
  .home-dv3{
    position:relative;
    top: -56px;
    left: 15px;
    font-size: 12px;
    width: 40px;
    text-align: center;

  }
</style>
