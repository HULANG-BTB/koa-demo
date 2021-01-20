"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _default(directory, recursive, regExp) {
  var basepath = directory;
  var _keys = null;

  var readDirectory = function readDirectory(pathName) {
    //fs.readdir读取文件目
    var dirs = [];

    var list = _fs["default"].readdirSync(pathName);

    list.forEach(function (fileName) {
      var stat = _fs["default"].statSync(_path["default"].join(pathName, fileName));

      if (stat.isDirectory() && recursive) {
        dirs.push.apply(dirs, (0, _toConsumableArray2["default"])(readDirectory(_path["default"].join(pathName, fileName))));
      } else if (stat.isFile()) {
        dirs.push(_path["default"].join(pathName, fileName));
      }
    });
    return dirs;
  };

  if (directory[0] === '.') {
    // Relative path
    basepath = _path["default"].join(__dirname, directory);
  } else if (!_path["default"].isAbsolute(directory)) {
    // Module path
    basepath = require.resolve(directory);
  }

  _keys = readDirectory(basepath).filter(function (item) {
    return regExp.test(item);
  }).map(function (file) {
    return _path["default"].join('.', file.slice(basepath.length + 1));
  });
  var context = {
    keys: function keys() {
      return _keys || [];
    },
    resolve: function resolve(key) {
      return _path["default"].join(directory, key);
    },
    context: function context(key) {
      return require(this.resolve(key));
    }
  };
  return context;
}