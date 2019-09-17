<template>
  <div >
      <div>
          <Progressbar></Progressbar>
      </div>
      <div class="home-dis1">
          <div class="home-pos1">
              <Cityprofit></Cityprofit>
          </div>
          <div class="home-pos2">
              <Dynamic></Dynamic>
          </div>
      </div>
      <div>
          <Investigadata></Investigadata>
      </div>
  </div>
</template>
<script>
    import Progressbar from "../../components/progressbar/progressbar"
    import  Cityprofit from "../../components/cityprofit/cityprofit"
    import Dynamic from "../../components/dynamic/dynamic"
    import  Investigadata from "../../components/investigation/investigation"
export default {
  name: "home",
  components: {
      Progressbar,
      Cityprofit,
      Dynamic,
      Investigadata,
  },
    data(){
      return{
      }
    },
    methods:{

    },
    mounted() {

      },
};
</script>
<style>
    .home-pos1{
        margin: 30px 0px;
    }
    .home-dis1{
        display: flex;
        justify-content:space-around;

    }
    .home-pos2{
        margin: 30px 0px;
        overflow-y:auto;
        overflow-x:auto;
        height:300px;

    }

</style>
