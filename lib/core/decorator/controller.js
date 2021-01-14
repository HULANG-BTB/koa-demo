import koaRouter from 'koa-router'

export const Controller = prefix => target => {
  const router = new koaRouter()
  if (prefix) {
    router.prefix(prefix)
  }
  // if there is no routes default []
  const routes = target.routes || []
  routes.forEach(route => {
    router[route.method](route.url, async ctx => {
      // use call to create context for descriptor
      ctx.body = await route.descriptor.value.call({ ctx })
    })
  })
  return router
}
