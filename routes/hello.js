import koaRouter from 'koa-router'

const router = new koaRouter()

router.get('/hello', async ctx => {
  ctx.body = ctx.query
})

router.post('/hello', async ctx => {
  ctx.body = {
    body:ctx.request.body,
    query: ctx.query
  }
})

router.put('/hello', async ctx => {
  ctx.body = {
    body:ctx.request.body,
    query: ctx.query
  }
})

router.delete('/hello/:var1/:var2', async ctx => {
  ctx.body = {
    query: ctx.query,
    path: ctx.params
  }
})

export default router
