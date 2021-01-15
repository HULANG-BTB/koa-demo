export * from './controller'

import { controllerLoader } from './controller'
import { serviceLoader } from './service'

/**
 * 自动加载统一方法
 *
 * @param {*} app
 */
export const autoloader = app => {
  serviceLoader()
  controllerLoader(app)
}

export default autoloader
