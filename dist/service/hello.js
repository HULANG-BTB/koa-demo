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

var _decorator = require("../lib/core/decorator");

var _class;

var Hello = (0, _decorator.Service)(_class = /*#__PURE__*/function () {
  function Hello() {
    (0, _classCallCheck2["default"])(this, Hello);
  }

  (0, _createClass2["default"])(Hello, null, [{
    key: "say",
    value: function () {
      var _say = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", 'Hello');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function say() {
        return _say.apply(this, arguments);
      }

      return say;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.model.User.create({
                  username: 'username',
                  password: 'password'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create() {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);
  return Hello;
}()) || _class;

var _default = Hello;
exports["default"] = _default;