import { Sequelize, Options} from "sequelize";

export interface IDBConnection <TypeORM> {
    readonly orm: TypeORM 
    connect():Promise<void>,
}

abstract class DBConnection <TypeORM> implements IDBConnection<TypeORM> {

    private _orm: TypeORM;

    constructor(orm: TypeORM){
        this._orm = orm
    }
    get orm(): TypeORM {
        return this._orm
    }
    abstract connect(): Promise<void>
}

export class SequelizeConnection extends DBConnection<Sequelize> {
    async connect(): Promise<void> {
        try {
            await this.orm.authenticate();
            await this.orm.sync({alter: true});
            console.log("Data bases is connected");
        } catch (err) {
            console.log(err);
        }
    }
    
}