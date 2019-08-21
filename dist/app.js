"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const init_1 = __importDefault(require("./core/init"));
const app = new koa_1.default();
app.use(koa_body_1.default());
init_1.default.initCore(app);
app.listen(8081);
console.log("Server running on http://localhost:8081");
