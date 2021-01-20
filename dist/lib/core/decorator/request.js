"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteMapping = exports.PatchMapping = exports.PutMapping = exports.PostMapping = exports.GetMapping = exports.OptionsMapping = exports.HeadMapping = exports.RequestMapping = exports.RequestMethod = void 0;
var RequestMethod = Object.freeze({
  ALL: 'all',
  HEAD: 'head',
  OPTIONS: 'options',
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete'
});
/**
 * 检查请求方式是否被支持
 *
 * @param {*} method
 * @return {Boolean} true || false
 */

exports.RequestMethod = RequestMethod;

var checkMethod = function checkMethod(method) {
  Object.keys(RequestMethod).forEach(function (key) {
    if (method === key || method === RequestMethod[key]) {
      return true;
    }
  });
  return false;
};
/**
 * 添加路由信息到类的原型属性中
 *
 * @param {*} target
 * @param {*} props
 * @param {*} descriptor
 * @param {*} url
 * @param {*} method
 */


var addRoute = function addRoute(target, props, descriptor, url, method) {
  if (!target.routes) {
    target.routes = [];
  }

  target.routes.push({
    props: props,
    descriptor: descriptor,
    url: url,
    method: method
  });
};
/**
 * 请求路由装饰器
 *
 * @param {*} url 路由地址
 * @param {*} method 请求方法 默认 ALL
 */


var RequestMapping = function RequestMapping(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RequestMethod.ALL;
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('Decorator can only used to method.');
    }

    if (checkMethod(method)) {
      throw new Error("Method ".concat(method, " is not allow to add to router."));
    }

    addRoute(target, props, descriptor, url, method);
  };
};
/**
 * Head请求路由装饰器
 *
 * @param {*} url 路由地址
 */


exports.RequestMapping = RequestMapping;

var HeadMapping = function HeadMapping(url) {
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('HeadMapping can only used to method.');
    }

    addRoute(target, props, descriptor, url, RequestMethod.HEAD);
  };
};
/**
 * Options请求路由装饰器
 *
 * @param {*} url 路由地址
 */


exports.HeadMapping = HeadMapping;

var OptionsMapping = function OptionsMapping(url) {
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('OptionsMapping can only used to method.');
    }

    addRoute(target, props, descriptor, url, RequestMethod.OPTIONS);
  };
};
/**
 * Get请求路由装饰器
 *
 * @param {*} url 路由地址
 */


exports.OptionsMapping = OptionsMapping;

var GetMapping = function GetMapping(url) {
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('GetMapping can only used to method.');
    }

    addRoute(target, props, descriptor, url, RequestMethod.GET);
  };
};
/**
 * Post请求路由装饰器
 *
 * @param {*} url 路由地址
 */


exports.GetMapping = GetMapping;

var PostMapping = function PostMapping(url) {
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('PostMapping can only used to method.');
    }

    addRoute(target, props, descriptor, url, RequestMethod.POST);
  };
};
/**
 * Put请求路由装饰器
 *
 * @param {*} url 路由地址
 */


exports.PostMapping = PostMapping;

var PutMapping = function PutMapping(url) {
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('PostMapping can only used to method.');
    }

    addRoute(target, props, descriptor, url, RequestMethod.PUT);
  };
};
/**
 * Patch请求路由装饰器
 *
 * @param {*} url 路由地址
 */


exports.PutMapping = PutMapping;

var PatchMapping = function PatchMapping(url) {
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('PatchMapping can only used to method.');
    }

    addRoute(target, props, descriptor, url, RequestMethod.PATCH);
  };
};
/**
 * Delete请求路由装饰器
 *
 * @param {*} url 路由地址
 */


exports.PatchMapping = PatchMapping;

var DeleteMapping = function DeleteMapping(url) {
  return function (target, props, descriptor) {
    if (!url) {
      throw new Error('params url can not be empty.');
    }

    if (props === undefined || descriptor === undefined) {
      throw new Error('DeleteMapping can only used to method.');
    }

    addRoute(target, props, descriptor, url, RequestMethod.DELETE);
  };
};

exports.DeleteMapping = DeleteMapping;