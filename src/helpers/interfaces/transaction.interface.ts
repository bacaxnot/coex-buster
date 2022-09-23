import { ICreate, IGetAll, IGetOne } from "./crud.interface";


export interface ITransactionController<TModel> extends IGetAll<TModel>, IGetOne<TModel, number>, ICreate<TModel> {}

export interface ITransactionRepository<TModel> extends IGetAll<TModel>, IGetOne<TModel, number>, ICreate<TModel> {}