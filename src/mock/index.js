import Mock from "mockjs";
import arr1 from "../static/position.json"

Mock.mock("api/mock/prices", "get", {
  code: 200,
  msg: "success",
  data: [
    {
      id: "@increment(1)",
      name: "本月营收（元）",
      revenue: "@natural( 1000, 100000)"
    },
    {
      id: "@increment(1)",
      name: "待回款（元）",
      revenue: "@natural( 1000, 100000)"
    },

    {
      id: "@increment(1)",
      name: "客单价/合同（元）",
      revenue: "@natural( 1000, 10000)"
    }
  ]
});

Mock.mock("api/mock/city", "get", {
  code: 200,
  msg: "success",
  "data|30": [
    {
      id: "@increment(1)",
      city: "@city()",
      profit: "@natural( 0, 100)"
    }
  ]
});

Mock.mock("api/mock/news", "get", {
  code: 200,
  msg: "success",
  "data|5": [
    {
      id: "@increment(1)",
      boer: "@boolean()",
      text1: "@cparagraph()",
      text2: "@cparagraph()"
    }
  ]
});

Mock.mock("api/mock/name", "get", {
  code: 200,
  msg: "success",
  "data|10": [
    {
      id: "@increment(1)",
      boer: "@boolean()",
      name: "@cname()"
    }
  ]
});

Mock.mock("api/mock/investigation", "get", {
  code: 200,
  msg: "success",
  "data|20": [
    {
      name: "@ctitle( 2, 7 )",
      describe: "@ctitle( 2, 7 )",
      deadline: "@date('yyyy-MM-dd')",
      creationtime: "@date('yyyy-MM-dd')",
      theme: "@boolean()",
      website: "@natural( 1, 4)"
    }
  ]
});

Mock.mock("api/mock/maillist", "get", {
  code: 200,
  msg: "success",
  "data|200": [
    {
      id: "@increment(1)",
      name: "@ctitle( 2, 3)",
      mailbox:"@natural( 1000000,1000000000)@qq.com",
      telephone: "@natural(10000000000,19999999999)",
      telephones: "@natural(10000000000,19999999999)",
      sex: "@boolean()",
      qq:"@natural( 1000000,1000000000)",
      'position|1': ["员工","董事长","总经理","组长",'班长',"部长","部门经理",'实习生'],
      "region|1":arr1,
      color:'@hex()',


    }
  ]
});
Mock.mock("api/mock/offer", "get", {
  code: 200,
  msg: "success",
  "data|200": [
    {
      id: "@increment(1)",
      name: "@ctitle( 2, 3)",
      mailbox:"@natural( 1000000,1000000000)@qq.com",
      documenttype: "@ctitle( 2, 3)",
      ids: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
      'sex|1': ["男",'女'],
      'position|1': ['经理','主管','员工','实习生'],
      places:"@city(true)",
      qq:"@natural( 1000000,1000000000)",
      date: "@date('yyyy-MM-dd')",
      telephone: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
      "region|1":arr1,
      'Marriage|1':['已婚','未婚'],
      birthday: "@date('yyyy-MM-dd')",
      "approval|1":['待发', '已发', '已接受', '已拒绝', '已入职',],
      age:"@natural( 18,60)",
      'education|1':['初中', '高中', '大专', '本科', '硕士',' 博士', '博士以上'],
      Nntion:"@ctitle( 2, 3)",
      city:"@city(true)",

    }
  ]
});

Mock.mock("api/mock/personnel", "post", {
  code: 200,
  msg: "success",
  "data|200": [
    {
      id: "@increment(1)",
      name: "@ctitle( 2, 4)",
      jobnumber:"@natural(1000,9999)",
      mechanism:"区域中心",
      "department|1":arr1,
      start:"@date('yyyy-MM-dd')",
      end:"@date('yyyy-MM-dd')",
      'position|1': ['经理','主管','员工','实习生'],
      'approval|1': ['审批通过','审批未通过','审批中'],

    }
  ]
});

