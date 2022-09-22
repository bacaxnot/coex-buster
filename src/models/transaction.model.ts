import { Model , DataTypes, Sequelize} from "sequelize";
const sequelize = require('sequelize');
import {  ITransactionModel } from "./interfaces/transaction.interface";


class TransactionModel extends Model<ITransactionModel> implements ITransactionModel{
    declare id:number;
    declare user_id:number
    declare create_date: Date;
    declare expiration_date: Date;
    declare status: boolean;

    get Transaction(): Sequelize {
        const transaction = sequelize.define("transaction", {
            id:{type:DataTypes.INTEGER},
            user_id:{type:DataTypes.INTEGER},
            create_date:{type:DataTypes.DATE},
            expiration_date:{type:DataTypes.DATE},
            status:{type:DataTypes.BOOLEAN}
        },{sequelize})
        return transaction
    }
}



export default TransactionModel;