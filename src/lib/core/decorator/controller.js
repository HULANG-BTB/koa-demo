import koaRouter from 'koa-router'

import { service } from './service'

export const Controller = target => {
  const router = new koaRouter()
  const prefix = target.prefix
  const routes = target.routes || []
  if (prefix) {
  }
  routes.forEach(route => {
    router[route.method](route.url, async ctx => {
      // use call to create context for descriptor
      const result = await route.descriptor.value.call({ ctx, service }, ctx, service)
      if (result) ctx.body = result
    })
  })
  return router
}
