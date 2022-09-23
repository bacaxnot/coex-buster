import { SequelizeConnection } from './DBConnection'
import { Sequelize, Options } from 'sequelize'

const mysqlOptions: Options = {
    database: 'coexdb',
    username: 'root',
    password: '',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
}

export const sequelize = new Sequelize(mysqlOptions)

export const db = new SequelizeConnection(sequelize)
export const orm = db.orm

db.connect()
