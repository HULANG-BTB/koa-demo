import koaRouter from 'koa-router'

const router = new koaRouter()

router.get('/hello', async ctx => {
  ctx.body = 'Hello World !'
})

export default router
