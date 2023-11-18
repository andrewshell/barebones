import Koa from 'koa';
import serve from "koa-static";
import api from './api/index.js';

const app = new Koa();

app.use(serve('./dist', {}));
app.use(api.routes());

export default app;
