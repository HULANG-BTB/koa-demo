"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initModels;

var _sequelize2 = _interopRequireDefault(require("sequelize"));

var _user = _interopRequireDefault(require("./user.js"));

var DataTypes = _sequelize2["default"].DataTypes;

function initModels(sequelize) {
  var User = _user["default"].init(sequelize, DataTypes);

  return {
    User: User
  };
}