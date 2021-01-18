import initModels from '../../../model'

/**
 * 具有Service装饰器的对象列表
 *
 */
export const service = {}

/**
 * 获取实例化对象
 */
const model = initModels()

/**
 * 装饰器 用于存储具有Service装饰器的对象
 *
 * @param {*} target
 */
export const Service = target => {
  // 获取对象名称
  const serviceName = target.toString().match(/^function (.*)\(\)\s/)[1]
  // 添加model到上下文
  target.model = model
  service[serviceName] = target
}
