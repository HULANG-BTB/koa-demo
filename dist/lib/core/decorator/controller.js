"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _service = require("./service");

var Controller = function Controller(target) {
  var router = new _koaRouter["default"]();
  var prefix = target.prefix;
  var routes = target.routes || [];

  if (prefix) {}

  routes.forEach(function (route) {
    router[route.method](route.url, /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
        var result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return route.descriptor.value.call({
                  ctx: ctx,
                  service: _service.service
                }, ctx, _service.service);

              case 2:
                result = _context.sent;
                if (result) ctx.body = result;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
  return router;
};

exports.Controller = Controller;