<template>
  <div >
      <div>
          <Progressbar></Progressbar>
      </div>
      <div class="home-pos1">
          <Cityprofit></Cityprofit>
      </div>
  </div>
</template>
<script>
    import Progressbar from "../../components/progressbar/progressbar"
    import  Cityprofit from "../../components/cityprofit/cityprofit"
export default {
  name: "home",
  components: {
      Progressbar,
      Cityprofit,
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
        margin: 30px 20px;

    }

</style>
