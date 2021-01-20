"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.database = void 0;
var database = {
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'root',
  database: 'koa-demo',
  dialect: 'mysql',
  timezone: '+08:00',
  pool: {
    max: 10
  },
  additional: {
    timestamps: true,
    // 自动时间戳
    createdAt: 'create_time',
    // 指定创建事件字段
    updatedAt: 'update_time',
    // 指定更新事件字段
    version: 'version',
    // 乐观锁定机制
    deletedAt: 'delete_time' // 逻辑删除（软删除）

  }
};
exports.database = database;
var _default = database;
exports["default"] = _default;