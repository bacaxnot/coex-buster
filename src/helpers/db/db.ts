import { SequelizeConnection } from "./DbConnection";
import { Sequelize, Options } from "sequelize";

const mysqlOptions: Options = {
    database: "coexdb",
    username: "root",
    password: "",
    host: "localhost",
    port: 3306,
    dialect: "mysql"

}

const sequelize = new Sequelize(mysqlOptions)

export const db = new SequelizeConnection(sequelize)
export const orm = db.orm

db.connect()