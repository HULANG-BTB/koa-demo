// 导入依赖
import Koa from 'koa'
import http from 'http'
import debug from 'debug'

// 配置信息
import { upload } from './config/settings'
import koaBody from 'koa-body'

import hello from './routes/hello'

// 创建 Koa2 实例
const app = new Koa()

// 中间件
app.use(koaBody(upload))

// 注册路由
app.use(hello.routes(), hello.allowedMethods())

// 创建 Http 实例
const server = http.createServer(app.callback())

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const log = debug('demo:server')
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  log('Listening on ' + bind)
}

/**
 * Event listener for HTTP server "error" event.
 */
const onError = error => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

// 启动实例并开始监听 8000 端口
const port = 8000
server.listen(port)

// 注册事件
server.on('listening', onListening)
server.on('error', onError)
