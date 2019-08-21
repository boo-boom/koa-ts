import Koa from 'koa';
import parser from 'koa-body';
import Router from 'koa-router';

const app: Koa = new Koa();
const router: Router = new Router();

router.get('/*', async ctx => {
  console.log(ctx.request.query);
  ctx.body = 'Hello Koa and TS....';
});

app.use(parser());
app.use(router.routes());

app.listen(8081);

console.log('Server running on http://localhost:8081');
