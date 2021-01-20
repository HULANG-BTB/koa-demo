"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = exports.service = void 0;

var _model = _interopRequireDefault(require("../../../model"));

/**
 * 具有Service装饰器的对象列表
 *
 */
var service = {};
/**
 * 获取实例化对象
 */

exports.service = service;
var model = (0, _model["default"])();
/**
 * 装饰器 用于存储具有Service装饰器的对象
 *
 * @param {*} target
 */

var Service = function Service(target) {
  // 获取对象名称
  var serviceName = target.toString().match(/^function (.*)\(\)\s/)[1]; // 添加model到上下文

  target.model = model;
  service[serviceName] = target;
};

exports.Service = Service;