"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _database = _interopRequireDefault(require("../config/database"));

var _sequelize = require("sequelize");

var _initModels = _interopRequireDefault(require("./init-models"));

function _default() {
  var sequelize = new _sequelize.Sequelize(_database["default"]);
  return (0, _initModels["default"])(sequelize);
}