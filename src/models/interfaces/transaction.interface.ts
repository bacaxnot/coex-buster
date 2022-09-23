import { ICreate, IGetAll, IGetOne } from "./crud.interface";

export interface ITransactionModel{
    id: number,
    user_id: number,
    create_date: Date,
    status: boolean,
}

export interface ITransactionDetailModel{
    id: number,
    movie_id: number,
    transaction_id: number,
    quantity: number,
}

export interface ITransactionController<TModel> extends IGetAll<TModel>, IGetOne<TModel, number>, ICreate<TModel> {}

export interface ITransactionRepository<TModel> extends IGetAll<TModel>, IGetOne<TModel, number>, ICreate<TModel> {}