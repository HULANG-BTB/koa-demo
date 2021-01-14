import context from '../utils/context'

export const autoLoadRoutes = app => {
  const files = context(__dirname, false, /\.js$/)
  files
    .keys()
    .filter(key => key !== 'index.js')
    .forEach(key => {
      const ctx = files.context(key)
      const router = ctx.default
      app.use(router.routes(), router.allowedMethods())
    })
}

export default autoLoadRoutes
