export const RequestMethod = Object.freeze({
  ALL: 'all',
  HEAD: 'head',
  OPTIONS: 'options',
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete'
})

/**
 * 检查请求方式是否被支持
 *
 * @param {*} method
 * @return {Boolean} true || false
 */
const checkMethod = method => {
  Object.keys(RequestMethod).forEach(key => {
    if (method === key || method === RequestMethod[key]) {
      return true
    }
  })
  return false
}

/**
 * 添加路由信息到类的原型属性中
 *
 * @param {*} target
 * @param {*} props
 * @param {*} descriptor
 * @param {*} url
 * @param {*} method
 */
const addRoute = (target, props, descriptor, url, method) => {
  if (!target.routes) {
    target.routes = []
  }
  target.routes.push({ props, descriptor, url, method })
}

/**
 * 请求路由装饰器
 *
 * @param {*} url 路由地址
 * @param {*} method 请求方法 默认 ALL
 */
export const RequestMapping = (url, method = RequestMethod.ALL) => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('Decorator can only used to method.')
  }
  if (checkMethod(method)) {
    throw new Error(`Method ${method} is not allow to add to router.`)
  }
  addRoute(target, props, descriptor, url, method)
}

/**
 * Head请求路由装饰器
 *
 * @param {*} url 路由地址
 */
export const HeadMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('HeadMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.HEAD)
}

/**
 * Options请求路由装饰器
 *
 * @param {*} url 路由地址
 */
export const OptionsMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('OptionsMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.OPTIONS)
}

/**
 * Get请求路由装饰器
 *
 * @param {*} url 路由地址
 */
export const GetMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('GetMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.GET)
}

/**
 * Post请求路由装饰器
 *
 * @param {*} url 路由地址
 */
export const PostMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('PostMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.POST)
}

/**
 * Put请求路由装饰器
 *
 * @param {*} url 路由地址
 */
export const PutMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('PostMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.PUT)
}

/**
 * Patch请求路由装饰器
 *
 * @param {*} url 路由地址
 */
export const PatchMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('PatchMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.PATCH)
}

/**
 * Delete请求路由装饰器
 *
 * @param {*} url 路由地址
 */
export const DeleteMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('DeleteMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.DELETE)
}
