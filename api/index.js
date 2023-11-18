import config from '../config.js';
import Router from 'koa-router';

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
