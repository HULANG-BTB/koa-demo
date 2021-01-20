"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceLoader = void 0;

var _context = _interopRequireDefault(require("../../../utils/context"));

var _path = _interopRequireDefault(require("path"));

var serviceLoader = function serviceLoader() {
  var modules = {};
  var files = (0, _context["default"])(_path["default"].join(__dirname, '../../../service'), false, /\.js$/);
  files.keys().forEach(function (key) {
    files.context(key);
  });
  return modules;
};

exports.serviceLoader = serviceLoader;