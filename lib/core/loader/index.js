export * from './controller'

import { controllerLoader } from './controller'

/**
 * 自动加载统一方法
 *
 * @param {*} app
 */
export const autoloader = app => {
  controllerLoader(app)
}

export default autoloader
