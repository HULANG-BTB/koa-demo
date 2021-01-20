"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koa = _interopRequireDefault(require("koa"));

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _settings = require("./config/settings");

var _koaBody = _interopRequireDefault(require("koa-body"));

var _koaJson = _interopRequireDefault(require("koa-json"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _loader = _interopRequireDefault(require("./lib/core/loader"));

// 导入依赖
// 配置信息
// 加载器
// 创建 Koa2 实例
var app = new _koa["default"](); // 中间件

app.use((0, _koaJson["default"])());
app.use((0, _koaLogger["default"])());
app.use((0, _koaBody["default"])(_settings.upload)); // 注册路由

(0, _loader["default"])(app); // 创建 Http 实例

var server = _http["default"].createServer(app.callback());
/**
 * Event listener for HTTP server "listening" event.
 */


var onListening = function onListening() {
  var log = (0, _debug["default"])('demo:server');
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  log('Listening on ' + bind);
};
/**
 * Event listener for HTTP server "error" event.
 */


var onError = function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}; // 启动实例并开始监听 8000 端口


var port = 8000;
server.listen(port); // 注册事件

server.on('listening', onListening);
server.on('error', onError);