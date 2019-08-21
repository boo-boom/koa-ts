"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.initLoadRouters();
    }
    static initLoadRouters() {
        const isProd = process.env.NODE_ENV === 'production';
        const apiDirectory = `${process.cwd()}/${isProd ? 'dist' : 'src'}/routes`;
        const routes = fs_1.readdirSync(apiDirectory).filter(item => item.indexOf("index") !== 0);
        routes.forEach(item => {
            const route = require(path_1.resolve(apiDirectory, item)).default;
            InitManager.app.use(route.routes());
        });
    }
}
exports.default = InitManager;
