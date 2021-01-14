import koaRouter from 'koa-router'

export const Controller = target => {
  const router = new koaRouter()
  const prefix = target.prefix
  const routes = target.routes || []
  console.log(prefix)
  if (prefix) {
  }
  routes.forEach(route => {
    router[route.method](route.url, async ctx => {
      // use call to create context for descriptor
      await route.descriptor.value.call({ ctx }, ctx)
    })
  })
  return router
}
