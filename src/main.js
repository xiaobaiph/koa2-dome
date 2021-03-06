import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./soter";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "./http";
import  dayjs from "dayjs";
import Vant from 'vant';
import 'vant/lib/index.css';
import "./mock";
import VCharts from 'v-charts'
import clipboard from 'clipboard';
import Print from 'vue-print-nb'







Vue.use(Print); //打印

Vue.use(VCharts)
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.clipboard = clipboard;//复制
Vue.use(ElementUI)

Vue.prototype.$axios=axios
Vue.prototype.$dayjs=dayjs

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount("#app");
