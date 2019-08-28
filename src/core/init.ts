import { readdirSync } from "fs";
import Koa from "koa";
import { resolve } from "path";
import Router from "koa-router";

class InitManager {
  public static app: Koa;
  public static initCore(app: Koa) {
    InitManager.app = app;
    InitManager.initLoadRouters();
  }
  public static initLoadRouters() {
    const isProd = process.env.NODE_ENV === "production";
    const apiDirectory = `${process.cwd()}/${isProd ? "dist" : "src"}/controller`;
    const controller = readdirSync(apiDirectory);
    controller.forEach(file => {
      const fileName = readdirSync(`${apiDirectory}/${file}`);
      fileName.forEach(item => {
        const col = require(resolve(`${apiDirectory}/${file}`, item)).default;
        console.log(col);
      });
    });
    const router = new Router();
    router.all("/apiagg/m.api/", async ctx => {
      ctx.body = {
        a: 1
      };
    });

    InitManager.app.use(router.routes());
    // routes.forEach(item => {
    //   const route = require(resolve(apiDirectory, item)).default;
    //   InitManager.app.use(route.routes());
    // });
  }
}

export default InitManager;
