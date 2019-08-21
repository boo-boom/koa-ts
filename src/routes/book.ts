import Router from "koa-router";

const router: Router = new Router({
  prefix: "/v1"
});

router.get("/book", async ctx => {
  const { id } = ctx.request.query;
  ctx.body = {
    id,
    key: "book"
  };
});

export default router;
