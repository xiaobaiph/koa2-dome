import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/Home.vue";
import Content from "../views/content/Content";


Vue.use(Router);

const router = new Router({
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
    {
      path:"/aaa",
      name:"aaa",
      component:()=>import("../views/AAA")

    },
    {
      path: "/maillist",
      name: "maillist",
      component: Content,
      children:[
        {
          path:"",
         component:()=>import('../views/maillist/maillist')
        }
      ]
    },
    {
      path: "/schedule",
      name: "schedule",
      component: Content,
      children:[
        {
          path:"",
          component:()=>import('../views/schedule/schedule')
        }
      ]
    },
    {
      path: "/forms",
      name: "forms",
      component: Content,
      children:[
        {
          path:"",
          component:()=>import('../views/forms/forms')
        }
      ]
    },
    {
      path:"/printing",
      name:"printing",
      component:()=>import("../views/printing/printing")

    },
    {
      path: "/offeradministration",
      name: "offeradministration",
      component: Content,
      children:[
        {
          path:"",
          component:()=>import('../views/offeradministration/offeradministration')
        }
      ]
    },
    {
      path: "/personnel",
      name: "personnel",
      component: Content,
      children:[
        {
          path:"",
          component:()=>import('../views/personnel/personnel')
        }
      ],
    },
    {
      path: "/fundmanagement",
      name: "fundmanagement",
      component: Content,
      children:[
        {
          path:"",
          component:()=>import('../views/fundmanagement/fundmanagement')
        }
      ]
    },
  ]
});



router.beforeEach((to, from, next) => {
  let user=JSON.parse(localStorage.getItem('user'))
  if (user) {
    next()
  } else if (
      to.path==="/login"||
      to.path=== "/register"||
  to.path==="/email"
  ) {
    next()
  }
  else{
    next({path:"/login"})
  }
})

export default router

