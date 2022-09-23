import { IGetOne, ICreate } from "./crud.interface";

export interface IUserRepository<TModel> extends IGetOne<TModel | null,  number>, ICreate<TModel>{}

export interface IUserController<TModel> extends IGetOne<TModel | null, number>, ICreate<TModel>{}
