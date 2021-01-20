"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  autoloader: true
};
exports["default"] = exports.autoloader = void 0;

var _controller = require("./controller");

Object.keys(_controller).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _controller[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _controller[key];
    }
  });
});

var _service = require("./service");

/**
 * 自动加载统一方法
 *
 * @param {*} app
 */
var autoloader = function autoloader(app) {
  (0, _service.serviceLoader)();
  (0, _controller.controllerLoader)(app);
};

exports.autoloader = autoloader;
var _default = autoloader;
exports["default"] = _default;