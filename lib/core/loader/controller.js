import context from '../../../utils/context'
import path from 'path'

/**
 * 自动注册controller路由方法
 * @param {*} app koa实例
 */
export const controllerLoader = app => {
  const files = context(path.join(__dirname, '../../../controller'), false, /\.js$/)
  files.keys().forEach(key => {
    const ctx = files.context(key)
    const router = ctx.default
    app.use(router.routes(), router.allowedMethods())
    console.log(router.routes())
  })
}
