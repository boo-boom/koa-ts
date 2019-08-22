import Router from "koa-router";
import { isInt } from "validator";
import { ParameterError } from "../core/httpError";

const router: Router = new Router({
  prefix: "/v1"
});

router.get("/book", async ctx => {
  const { id } = ctx.request.query;
  if (!isInt(id)) {
    throw new ParameterError();
  }
  ctx.body = {
    id,
    key: "book"
  };
});

export default router;
