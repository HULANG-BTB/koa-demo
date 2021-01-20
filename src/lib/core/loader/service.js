import context from '../../../utils/context'
import path from 'path'

export const serviceLoader = () => {
  const modules = {}
  const files = context(path.join(__dirname, '../../../service'), false, /\.js$/)
  files.keys().forEach(key => {
    files.context(key)
  })
  return modules
}
