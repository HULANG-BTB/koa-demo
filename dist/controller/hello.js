"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _decorator = require("../lib/core/decorator");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _class3, _temp;

var Hello = (_dec = (0, _decorator.GetMapping)('/hello'), _dec2 = (0, _decorator.PostMapping)('/hello'), _dec3 = (0, _decorator.PutMapping)('/hello'), _dec4 = (0, _decorator.DeleteMapping)('/hello/:var1/:var2'), _dec5 = (0, _decorator.GetMapping)('/create'), (0, _decorator.Controller)(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function Hello() {
    (0, _classCallCheck2["default"])(this, Hello);
  }

  (0, _createClass2["default"])(Hello, null, [{
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, service) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return service.Hello.say();

              case 2:
                ctx.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x, _x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ctx.body = {
                  body: ctx.request.body,
                  query: ctx.query
                };

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function post(_x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ctx.body = {
                  body: ctx.request.body,
                  query: ctx.query
                };

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function put(_x4) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ctx.body = {
                  query: ctx.query,
                  path: ctx.params
                };

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.service.Hello.create();

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function create() {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);
  return Hello;
}(), (0, _defineProperty2["default"])(_class3, "prefix", '/'), _temp), ((0, _applyDecoratedDescriptor2["default"])(_class2, "get", [_dec], Object.getOwnPropertyDescriptor(_class2, "get"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "post", [_dec2], Object.getOwnPropertyDescriptor(_class2, "post"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "put", [_dec3], Object.getOwnPropertyDescriptor(_class2, "put"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "delete", [_dec4], Object.getOwnPropertyDescriptor(_class2, "delete"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "create", [_dec5], Object.getOwnPropertyDescriptor(_class2, "create"), _class2)), _class2)) || _class);
var _default = Hello;
exports["default"] = _default;