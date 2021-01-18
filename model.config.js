import SequelizeAuto from 'sequelize-auto'
import database from './config/database'


const auto = new SequelizeAuto(database.database, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
  directory: 'model', // where to write files
  port: database.port,
  lang: 'esm',
  caseModel: 'p', // convert snake_case column names to camelCase field names: user_id -> userId
  caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
  singularize: true, // convert plural table names to singular model names
  additional: database.additional
  // tables: ['table1', 'table2', 'myschema.table3'] // use all tables, if omitted
  //...
})

auto.run().then(() => {
  console.log('Done!')
})
