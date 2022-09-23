import { Model , DataTypes} from "sequelize";
import {sequelize} from "../helpers/db/db";

class TransactionModel extends Model {}

TransactionModel.init(
{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    create_date: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
    expiration_date: {
        type: DataTypes.DATE,
        allowNull: true,
    }
},
{sequelize, modelName: 'Transaction'}
)

export default TransactionModel