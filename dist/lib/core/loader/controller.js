"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controllerLoader = void 0;

var _context = _interopRequireDefault(require("../../../utils/context"));

var _path = _interopRequireDefault(require("path"));

/**
 * 自动注册controller路由方法
 * @param {*} app koa实例
 */
var controllerLoader = function controllerLoader(app) {
  var files = (0, _context["default"])(_path["default"].join(__dirname, '../../../controller'), false, /\.js$/);
  files.keys().forEach(function (key) {
    var ctx = files.context(key);
    var router = ctx["default"];
    app.use(router.routes(), router.allowedMethods());
  });
};

exports.controllerLoader = controllerLoader;