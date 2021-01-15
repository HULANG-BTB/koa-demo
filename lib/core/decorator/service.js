
/**
 * 具有Service装饰器的对象列表
 *
 */
export const service = {}


/**
 * 装饰器 用于存储具有Service装饰器的对象
 *
 * @param {*} target
 */
export const Service = target => {
  // 获取对象名称
  const serviceName = target.toString().match(/^function (.*)\(\)\s/)[1]
  service[serviceName] = target
}
