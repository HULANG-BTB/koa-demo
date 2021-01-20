import path from 'path'
import fs from 'fs'

export default function (directory, recursive, regExp) {
  let basepath = directory
  let keys = null

  const readDirectory = pathName => {
    //fs.readdir读取文件目
    const dirs = []
    const list = fs.readdirSync(pathName)
    list.forEach(fileName => {
      const stat = fs.statSync(path.join(pathName, fileName))
      if (stat.isDirectory() && recursive) {
        dirs.push(...readDirectory(path.join(pathName, fileName)))
      } else if (stat.isFile()) {
        dirs.push(path.join(pathName, fileName))
      }
    })
    return dirs
  }

  if (directory[0] === '.') {
    // Relative path
    basepath = path.join(__dirname, directory)
  } else if (!path.isAbsolute(directory)) {
    // Module path
    basepath = require.resolve(directory)
  }

  keys = readDirectory(basepath)
    .filter(item => regExp.test(item))
    .map(function (file) {
      return path.join('.', file.slice(basepath.length + 1))
    })

  const context = {
    keys: () => {
      return keys || []
    },
    resolve(key) {
      return path.join(directory, key)
    },
    context(key) {
      return require(this.resolve(key))
    }
  }

  return context
}
