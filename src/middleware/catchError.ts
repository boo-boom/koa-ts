import { HttpError } from "../core/httpError";

const catchError = async (ctx: any, next: any) => {
  try {
    await next();
  } catch (error) {
    const isHttpError = error instanceof HttpError;
    if (isHttpError) {
      // 已知异常
      ctx.status = error.code;
      ctx.body = {
        errorCode: error.errorCode,
        msg: error.msg,
        requestUrl: `${ctx.method} ${ctx.path}`
      };
    } else {
      // 未知异常
      ctx.body = {
        errorCode: -999,
        msg: "服务器内部错误",
        requestUrl: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
};

export default catchError;
