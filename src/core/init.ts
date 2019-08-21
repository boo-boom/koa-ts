import { readdirSync } from "fs";
import Koa from "koa";
import { resolve } from "path";

class InitManager {
  public static app: Koa;
  public static initCore(app: Koa) {
    InitManager.app = app;
    InitManager.initLoadRouters();
  }
  public static initLoadRouters() {
    const isProd = process.env.NODE_ENV === "production";
    const apiDirectory = `${process.cwd()}/${isProd ? "dist" : "src"}/routes`;
    const routes = readdirSync(apiDirectory).filter(
      item => item.indexOf("index") !== 0
    );
    routes.forEach(item => {
      const route = require(resolve(apiDirectory, item)).default;
      InitManager.app.use(route.routes());
    });
  }
}

export default InitManager;
