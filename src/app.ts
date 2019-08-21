import Koa from "koa"; // 导入koa
import Router from "koa-router"; // 导入koa-router

const app: Koa = new Koa(); // 新建一个Koa对象
const router: Router = new Router(); // 新建一个koa-router对象

router.get("/*", async ctx => {
  // 截获所有路由,都指向此函数
  ctx.body = "Hello Koa and TS...."; // 向浏览器返回数据
});

app.use(router.routes()); // 使用路由

app.listen(8081); // 监听8080端口

console.log("Server running on http://localhost:8081");
