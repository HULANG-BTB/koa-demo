import database from '../config/database'
import { Sequelize } from 'sequelize'
import initModels from './init-models'

export default function () {
  const sequelize = new Sequelize(database)
  return initModels(sequelize)
}
