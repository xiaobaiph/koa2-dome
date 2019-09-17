<template>
  <div>
    <div class="dv1" @click.right="rightEvent()" v-color="'red'"></div>
    <div class="dv1"></div>
    <div class="dv1"></div>
    <div class="dv1"></div>
    <div class="dv1"></div>

    <div id="menu">
      <div class="menu">哈哈</div>
      <div class="menu">嘿嘿</div>
      <div class="menu">呵呵</div>
      <div class="menu">呼呼</div>
      <div class="menu">嘻嘻</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AAA",
  components: {

  },
  props: {},
  data() {
    return {};
  },
  methods: {
    // 鼠标右键
    rightEvent () {
      document.oncontextmenu = function(e) {
        return false;
      }
      document.onmousedown = function(e) {

        switch(e.button) {
          case 0:
            console.log("鼠标左键")
            break;
          case 1:
            console.log("鼠标中间");
            break;
          case 2:
            console.log("鼠标右键");
            break;
          default:
            break;
        }
        console.log(e.button);
      }


      window.oncontextmenu=function(e){
//取消默认的浏览器自带右键 很重要！！
        e.preventDefault();
//获取我们自定义的右键菜单
        var menu=document.querySelector("#menu");
//根据事件对象中鼠标点击的位置，进行定位
        menu.style.left=e.clientX+'px';
        menu.style.top=e.clientY+'px';

//改变自定义菜单的宽，让它显示出来
        menu.style.width='125px';
      }
//关闭右键菜单，很简单
      window.onclick=function(e){

//用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
        document.querySelector('#menu').style.height=0;
      }
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {

  }
};
</script>

<style scoped lang="scss">
.dv1 {
  width: 300px;
  height: 60px;
  border: red 1px solid;
}
#menu{
  width: 0; /*设置为0 隐藏自定义菜单*/
  height: 125px;
  overflow: hidden; /*隐藏溢出的元素*/
  box-shadow: 0 1px 1px #888,1px 0 1px #ccc;
  position: absolute; /*自定义菜单相对与body元素进行定位*/
}
.menu{
  width: 130px;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
}


</style>
