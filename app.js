import 'dotenv/config';
import Koa from 'koa';
import serve from 'koa-static';
import api from './api/index';

const app = new Koa();

app.use(serve('./dist', {}));
app.use(api.routes());

export default app;
