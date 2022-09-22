import {Sequelize, Options} from "sequelize";



class OptionsConnection {
    private _sequelize:Sequelize

    constructor(options: Options){
        this._sequelize = new Sequelize(options)
    }

    get sequelize(): Sequelize {
        return this._sequelize
    }

    async authenticate():Promise<void>{
        try {
            await this._sequelize.authenticate();
            await this._sequelize.sync({alter: true});
        } catch (error) {
            console.log(error);
        }
    }
}


export default OptionsConnection;

