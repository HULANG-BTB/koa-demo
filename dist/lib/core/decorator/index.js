"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require("./controller");

Object.keys(_controller).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _controller[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _controller[key];
    }
  });
});

var _request = require("./request");

Object.keys(_request).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _request[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _request[key];
    }
  });
});

var _service = require("./service");

Object.keys(_service).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _service[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _service[key];
    }
  });
});