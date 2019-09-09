import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/Home.vue";
import Content from "../views/content/Content";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Content,
      children:[
        {
          path:"",
          component:Home
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: Content,
      children:[
        {
          path:"",
          component:() => import(/* webpackChunkName: "about" */ "../views/About.vue")
        }
      ]
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("../views/login/login")

    },
    {
      path:"/register",
      name:"register",
      component:()=>import("../views/register/register")

    },
    {
      path:"/email",
      name:"email",
      component:()=>import("../views/email/email")

    },


  ]
});
