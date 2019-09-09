import Mock from "mockjs";

Mock.mock("api/mock/prices", "get", {
  code: 200,
  msg: "success",
  "data": [
    {
      id: "@increment(1)",
      name:"本月营收（元）",
      revenue: "@natural( 1000, 100000)",
    },
    {  id: "@increment(1)",
      name:"待回款（元）",
      revenue: "@natural( 1000, 100000)",},

    {
      id: "@increment(1)",
      name:"客单价/合同（元）",
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
Mock.mock("api/mock/news",'get',{
  code: 200,
  msg: "success",
  "data|5": [
    {
      id: "@increment(1)",
      boer: "@boolean()",
     text1: "@cparagraph()",
      text2: "@cparagraph()",

    }
  ]
})
