import Koa from "koa";
import parser from "koa-body";
import InitManager from "./core/init";
import catchError from "./middleware/catchError";

const app: Koa = new Koa();

app.use(catchError);
app.use(parser());

InitManager.initCore(app);

app.listen(8081);

console.log("Server running on http://localhost:8081");
