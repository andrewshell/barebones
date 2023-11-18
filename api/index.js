import Router from 'koa-router';
import config from '../config.js';

const router = new Router({
  prefix: '/api',
});

router.get('/health', async (ctx) => {
  ctx.body = {
    generator: config.generator,
    status: 'ok',
  };
});

export default router;
