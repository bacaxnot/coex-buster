import OptionsConnection from "./optionConnection";
import {Options} from "sequelize";

const mysql: Options = {
    database: "coexdb",
    username: "root",
    password: "",
    host: "localhost",
    port: 3306,
    dialect: "mysql"

}

class dbConnection {

    dbOptions = new OptionsConnection(mysql)

    async validate(){
        try {
            await this.dbOptions.authenticate();
            console.log('database authenticate')
        } catch (error) {
            console.error(error)
        }
        
    }
}

export const sequelizeObject = new dbConnection().dbOptions;

new dbConnection().validate();

